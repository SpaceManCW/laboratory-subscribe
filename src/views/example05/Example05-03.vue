<template>
  <div>
    <h2>v-for使用</h2>
    <ul>
      <li v-for="c of courses" :key="c.id">
        {{ c.name }}
      </li>
    </ul>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>createTime</th>
          <th>operation</th>
        </tr>
      </thead>
      <tr v-for="(c, index) of courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ computedTime(c.createTime) }}</td>
        <td>
          <button type="button" @click="removeItem(index)">remove Item</button>
        </td>
      </tr>
    </table>

    <button type="button" @click="addItem">add Itme</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, Ref, ref, computed } from "vue";
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
function useCourses(courses: Ref<Course[]>) {
  const removeItem = (index: number) => {
    courses.value.splice(index, 1);
  };
  const addItem = () => {
    courses.value.push({
      id: courses.value.length + 1,
      name: "软件项目管理",
      createTime: new Date().toISOString()
    });
  };
  return {
    removeItem,
    addItem
  };
}
export default defineComponent({
  setup() {
    const courses: Ref<Course[]> = ref(listCourses());
    const { removeItem, addItem } = useCourses(courses);
    const computedTime = computed(() => (data: string) =>
      data.replace("T", " ").substring(0, 16)
    );
    return {
      courses,
      removeItem,
      addItem,
      computedTime
    };
  }
});
</script>
