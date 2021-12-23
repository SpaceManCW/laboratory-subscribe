import axios from "@/axios";
//注意引入Lab
import { Course, User, Lab, Teacher, ReRecord } from "@/datasource/Types";
import { ResultVO } from "@/mock";
import router from "@/router";
import { ActionTree, createStore, GetterTree, MutationTree } from "vuex";
import * as vxt from "./VuexTypes";
import { Menu } from "@/role/Menu";

export interface State {
  user: User;
  exception: string;
  //以下是课设需要
  teacher: Teacher;
  lab: Lab;
  labs: Lab[];
  teachers: Teacher[];
  role?: number | null;
  menuList?: Menu[];
  reRecords: ReRecord[];
  isLogin: boolean;
  course: Course;
  courses: Course[];
}

const myState: State = {
  exception: "",
  isLogin: false,
  user: {},
  teacher: {},
  course: {},
  // teacherRecords:[],
  lab: {},
  labs: [],
  teachers: [],
  reRecords: [],
  role: null,
  menuList: [],
  courses: []
};
const myMutations: MutationTree<State> = {
  //以下是课设需要
  [vxt.LIST_LABS]: (state, data) => (state.labs = data),
  [vxt.GET_LAB]: (state, data) => (state.lab = data),
  [vxt.LIST_TEACHERS]: (state, data: Teacher[]) => (state.teachers = data),
  [vxt.GET_TEACHER]: (state, data) => (state.teacher = data),
  [vxt.UPDATE_COURSE]: (state, data) => (state.teacher.courses = data),
  [vxt.SET_ROLE](state: State, data) {
    state.role = data;
  },
  [vxt.SET_MENULIST](state: State, data: Menu[]) {
    state.menuList = data;
  },
  [vxt.UPDATE_EXCEPTION]: (state, data: string) => {
    state.exception = data;
  },
  [vxt.LIST_RECORDS]: (state, data) => (state.reRecords = data)
};

const myActions: ActionTree<State, State> = {
  async [vxt.LOGIN]({ commit }, data) {
    const resp = await axios.post("login", data);
    if (resp != null) {
      sessionStorage.setItem("Authorization", resp.headers["Authorization"]);
      sessionStorage.setItem("role", resp.data.role);
      commit(vxt.LOGIN, true);
    }
    if (resp.data.data.user.role == 1) {
      commit(vxt.SET_ROLE, 1);
      const { setUserRole } = await import("@/role/UserRole");
      const menuList = setUserRole();
      commit(vxt.SET_MENULIST, menuList);
      router.push("/index");
    } else if (resp.data.data.user.role == 2) {
      commit(vxt.SET_ROLE, 5);
      sessionStorage.setItem("role", "2");
      const { setUserRole } = await import("@/role/Admin");
      const menuList = setUserRole();
      commit(vxt.SET_MENULIST, menuList);
      router.push("/index");
    }
  },

  //将commit作为第一个参数传入，两秒之后执行commit

  //获取实验室列表
  async [vxt.LIST_LABS]({ commit }, data) {
    const resp = await axios.get("labs");
    commit(vxt.LIST_LABS, resp.data.data.labs);
  },
  async [vxt.GET_LAB]({ commit }, data) {
    const resp = await axios.get(`labs/${data.lid}`);
    commit(vxt.GET_LAB, resp.data.data.lab);
  },
  //删除实验室
  [vxt.DELETE_LAB]: async ({ commit }, data) => {
    const lid = data;
    const resp = await axios.delete<ResultVO>(`labs/${lid}`);
    commit(vxt.LIST_LABS, resp.data.data.labs);
  },
  //获取教师列表
  async [vxt.LIST_TEACHERS]({ commit }, data) {
    const resp = await axios.get("teachers");
    commit(vxt.LIST_TEACHERS, resp.data.data.teachers);
  },
  async [vxt.GET_TEACHER]({ commit }, data) {
    const resp = await axios.get(`teacher`);
    commit(vxt.GET_TEACHER, resp.data.data.teacher);
  },
  //删除教师
  [vxt.DELETE_TEACHER]: async ({ commit }, data) => {
    const tid = data;
    const resp = await axios.delete<ResultVO>(`teachers/${tid}`);
    commit(vxt.LIST_TEACHERS, resp.data.data.labs);
  },
  //添加课程
  [vxt.UPDATE_COURSE]: async ({ commit }, data) => {
    const resp = await axios.patch<ResultVO>(`teacher/course`, data);
    commit(vxt.UPDATE_COURSE, resp.data.data.teacher.courses);
  },
  [vxt.ADD_COURSE]: async ({ commit }, data) => {
    const resp = await axios.post<ResultVO>(`teacher/course`, data);
    commit(vxt.UPDATE_COURSE, resp.data.data.teacher.courses);
  },
  //预约记录
  async [vxt.LIST_RECORDS]({ commit }, data) {
    const resp = await axios.get("records");
    commit(vxt.LIST_RECORDS, resp.data.data.records);
  },
  // [vxt.ADD_RECORDS]: async ({ commit }, data) => {
  //   const resp = await axios.post<ResultVO>(`records`, data);
  //   commit(vxt.UPDATE_TEACHERS, resp.data.data.teachers);
  // },
  //以上是课设需要

  [vxt.UPDATE_USER]: ({ commit }, data: User) => {
    setTimeout(() => commit(vxt.UPDATE_USER, data), 2000);
  }

  // //------- 前后端联调。
  // [vxt.BACKEND_WELCOME]: async () => {
  //   const resp = await axios.get("/api/welcome");
  //   // 将数据封装到promise返回给组件的方法
  //   return Promise.resolve(resp.data.data);
  // },
  // [vxt.BACKEND_LOGIN]: async ({ state }, user: any) => {
  //   const resp = await axios.post("/api/login", user);
  //   const token: string = resp.headers.token;
  //   if (token && token.length > 96) {
  //     sessionStorage.setItem("token", token);
  //     state.isLogin = true;
  //   }
  // },
  // [vxt.BACKEND_COURSES]: async ({ state }) => {
  //   const resp = await axios.get("/api/teacher/courses");
  //   console.log(resp.data.data.courses);
  //   state.courses = resp.data.data.courses;
  // }
};

// const myGetters: GetterTree<State, State> = {
//   premission: state => (level: number) => state.user?.level == level,
//   [vxt.GETTER_PREMISSION]: state => (level: number) =>
//     state.user?.level == level
// };
// // 加载vuex时，判断登录/角色等信息，加载初始化数据
// const token = sessionStorage.getItem("token");
// if (token && token.length > 96) {
//   myState.isLogin = true;
// }

export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  // getters: myGetters,
  modules: {}
});

if (sessionStorage.getItem("Authorization") != null) {
  myState.isLogin = true;
}
