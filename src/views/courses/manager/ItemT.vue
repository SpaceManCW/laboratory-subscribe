<template>
  <div class="card">
    <span class="name">教师姓名：{{ teacher.name }}</span>
    &emsp;&emsp;
    <br />
    <span class="dep">
      <span class="infor">所在学院：</span>
      {{ teacher.department }} &emsp;
      <span class="infor">授课专业：</span>
      {{ teacher.major }}
      &emsp;
      <span class="infor">授课课程：</span>
      <span v-for="(c, index) of teacher.courses" :key="index">
        {{ c.name }} &emsp;
      </span>
      <!-- 教授课程：{{ teacher.courses }} -->
    </span>
    <button class="btn">删除</button>
  </div>
</template>

<script lang="ts">
import { Teacher } from "@/datasource/Types";
import { State } from "@/store";
import { defineComponent, PropType } from "vue";
import { Store, useStore } from "vuex";
import { DELETE_TEACHER } from "@/store/VuexTypes";
export default defineComponent({
  props: {
    // 视图可直接使用，无需setup()函数
    teacher: Object as PropType<Teacher>
  },
  setup() {
    const store: Store<State> = useStore();
    const deleteTeacher = (teacher: any) => {
      const tid = teacher.id;
      store.dispatch(DELETE_TEACHER, tid);
    };
    return {
      deleteTeacher
    };
  }
});
</script>

<style scoped>
.card {
  padding: 15px;
  display: flex;
  align-items: center;
  background-color: rgb(219, 237, 241);
  border-bottom: 1px solid #9daab860;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.name {
  font-size: 1rem;
  font-weight: bold;
}
.dep {
  font-size: 0.5rem;
  color: darkgrey;
}
.infor {
  color: rgb(37, 194, 233);
}
.btn {
  position: absolute;
  border: none;
  background-color: rgba(238, 22, 22, 0.199);
  outline: none;
  padding: 10px;
  border-radius: 5px;
  right: 100px;
}
</style>
