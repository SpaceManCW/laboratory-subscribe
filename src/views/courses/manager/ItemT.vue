<template>
  <div class="card">
    <span class="name">教师姓名：{{ teacher.name }}</span>
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
  </div>
</template>

<script lang="ts">
import { Teacher } from "@/datasource/Types";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    // 视图可直接使用，无需setup()函数
    teacher: Object as PropType<Teacher>
  }
});
</script>

<style scoped>
.card {
  padding: 10px;
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
</style>
