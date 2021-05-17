import axios from "@/axios";
import { listCourses } from "@/datasource/DataSource";
import { Course, User } from "@/datasource/Types";
import { ResultVO } from "@/mock";
import { getShop, listShops, Order, Shop } from "@/views/homework02/homework02";
import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import * as vxt from "./VuexTypes";

export interface State {
  user: User;
  courses: Course[];
  exception: string;
  userCourses: Course[];
  // homework02
  shopList: Shop[];
  shopCache: Shop[];
  orders: Order[];
  // Integrating with backend
  isLogin: boolean;
}

const myState: State = {
  user: {
    name: "BO",
    address: "956",
    level: 1
  },
  courses: [],
  userCourses: [],
  exception: "",
  shopList: [],
  shopCache: [],
  orders: [],
  isLogin: false
};
const myMutations: MutationTree<State> = {
  [vxt.UPDATE_USER]: (state, data: User) => (state.user = data),
  [vxt.LIST_COURSES]: (state, data: Course[]) => (state.courses = data),
  [vxt.LIST_USER_COURSES]: (state, data: Course[]) =>
    (state.userCourses = data),
  [vxt.UPDATE_EXCEPTION]: (state, data: string) => (state.exception = data),
  [vxt.LIST_SHOPS]: (state, data: Shop[]) => (state.shopList = data)
};

const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  },
  [vxt.LIST_COURSES]: ({ commit }) => {
    const courses = listCourses();
    setTimeout(() => commit(vxt.LIST_COURSES, courses), 2000);
  },
  // 10-01
  [vxt.LIST_USER_COURSES]: async ({ commit }, userId: string) => {
    const resp = await axios.get<ResultVO>(`users/${userId}/courses`);
    commit(vxt.LIST_USER_COURSES, resp.data.data.courses);
  },
  [vxt.LOGIN]: async ({ commit }, user) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO>("login", user);
      console.log(resp.headers.token);
      sessionStorage.setItem("token", resp.headers.token);
      commit(vxt.UPDATE_USER, resp.data.data.user);
    } catch (error) {
      // eslint默认禁止空执行体。加一段注释或关闭该检测
    }
  },
  [vxt.GET_HOME]: async ({ commit }) => {
    // 未捕获异常，请求失败在控制台输出信息
    const resp = await axios.get<ResultVO>("home");
    commit(vxt.LIST_COURSES, resp.data.data?.courses);
  },
  [vxt.LIST_SHOPS]: ({ commit, state }) => {
    if (state.shopList.length == 0) {
      setTimeout(() => {
        commit(vxt.LIST_SHOPS, listShops());
      }, 1000);
    }
  },
  [vxt.GET_SHOP]: ({ state }, sid: number) => {
    // 异步加载数据，并更新state中数据
    setTimeout(() => {
      // 返回可能为空，但强制断言结果不为空
      // state.shopCache.push(getShop(sid)!);
      // &&短路特性。如果shop为空直接结束，不为空执行右表达式
      const shop = getShop(sid);
      shop && state.shopCache.push(shop);
    }, 1000);
  },
  //------- 前后端联调。
  [vxt.BACKEND_WELCOME]: async () => {
    const resp = await axios.get("/api/welcome");
    // 将数据封装到promise返回给组件的方法
    return Promise.resolve(resp.data.data);
  },
  [vxt.BACKEND_LOGIN]: async ({ state }, user: any) => {
    const resp = await axios.post("/api/login", user);
    const token: string = resp.headers.token;
    if (token && token.length > 96) {
      sessionStorage.setItem("token", token);
      state.isLogin = true;
    }
  },
  [vxt.BACKEND_COURSES]: async ({ state }) => {
    const resp = await axios.get("/api/teacher/courses");
    console.log(resp.data.data.courses);
    state.courses = resp.data.data.courses;
  }
};

const myGetters: GetterTree<State, State> = {
  premission: state => (level: number) => state.user?.level == level,
  [vxt.GETTER_PREMISSION]: state => (level: number) =>
    state.user?.level == level
};
// 加载vuex时，判断登录/角色等信息，加载初始化数据
const token = sessionStorage.getItem("token");
if (token && token.length > 96) {
  myState.isLogin = true;
}

export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {}
});
// https://next.vuex.vuejs.org/guide/typescript-support.html#simplifying-usestore-usage
//const key: InjectionKey<Store<State>> = Symbol()
// export function useStore () {
//   return baseUseStore(key)
// }
