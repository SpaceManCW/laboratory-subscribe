<template>
  <div>
    <p>
      基于路径的字符串匹配，而非正则表达式。
      <br />
      {{ user.id }} / {{ user.name }}
    </p>
    <hr />
    <p>
      <!-- .prevent事件修饰符。阻止执行默认事件。即当前阻止超链接默认的跳转 -->
      <a href="" @click.prevent="choseUser(user.id)">
        {{ user.name }}
      </a>
      <br />
      <ul>
        <li v-for="(c, index) of courses" :key="index">{{c.name}}</li>
      </ul>
    </p>
  </div>
</template>
<script lang="ts">
import axios from "@/axios";
import { User } from "@/datasource/Types";
import { State } from "@/store";
import { LIST_USER_COURSES } from "@/store/VuexTypes";
import { computed, defineComponent, ref } from "vue";
import { Store, useStore } from "vuex";

function useUserCourses(store: Store<State>) {
  const choseUser = (userId: number) => {
    store.dispatch(LIST_USER_COURSES, userId);
  };
  return {
    choseUser
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({});
    // 发出异步请求，获取结果。没有置于state
    axios.get("users/12").then(resp => {
      user.value = resp.data.data.user;
    });
    const store: Store<State> = useStore();
    const courses = computed(() => store.state.userCourses);
    const { choseUser } = useUserCourses(store);
    return {
      user,
      courses,
      choseUser
    };
  }
});
</script>
