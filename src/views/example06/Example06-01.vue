<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
  </div>
</template>
<script lang="ts">
import { listCourses, listTitles } from "@/datasource/DataSource";
import { User } from "@/datasource/Types";
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
  setup() {
    const user = ref<User>({ courses: [] });
    const titles = listTitles();
    const courses = listCourses();
    return {
      user,
      titles,
      courses
    };
  }
});
</script>
