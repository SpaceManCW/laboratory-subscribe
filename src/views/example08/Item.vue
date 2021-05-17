<template>
  <div class="card">
    <span class="name">{{ course.name }}</span>
    <br />
    {{ course.createTime }}
  </div>
</template>
<script lang="ts">
import { Course } from "@/datasource/Types";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    // 视图可直接使用，无需setup()函数
    course: Object as PropType<Course>
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
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
