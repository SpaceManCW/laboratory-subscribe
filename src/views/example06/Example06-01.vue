<template>
  <div>
    <h2>双向绑定</h2>
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
    <input type="file" @change="fileChange($event.target.files[0])" />
    <br />
    <p>{{ file.fileName }} / {{ file.fileSize }}</p>
    <br />
  </div>
</template>
<script lang="ts">
import { listCourses, listTitles } from "@/datasource/DataSource";
import { User } from "@/datasource/Types";
import { defineComponent, ref, Ref } from "vue";
interface VFile {
  fileName: string;
  fileSize: string;
}
function useFile(file: Ref<VFile>) {
  const fileChange = (f: File) => {
    console.log(f);
    file.value.fileName = f.name;
    file.value.fileSize = `${(f.size / 1024 / 1024).toFixed(2)} MB`;
  };
  return {
    fileChange
  };
}
export default defineComponent({
  setup() {
    const user = ref<User>({ courses: [] });
    const file = ref({ fileName: "", fileSize: "" });
    const courses = listCourses();
    const titles = listTitles();
    const { fileChange } = useFile(file);
    return {
      user,
      courses,
      titles,
      file,
      fileChange
    };
  }
});
</script>
