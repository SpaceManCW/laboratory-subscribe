<template>
  <div>
    <h2>双向绑定应用2</h2>
    <form>
      <label>
        <input type="checkbox" v-model="agree" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses" :key="index">
        <label>
          <input
            :ref="chRefs"
            type="checkbox"
            v-model="selectedCourses"
            :value="{ id: c.id }"
            :disabled="!agree"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <button
        type="button"
        :disabled="!agree || selectedCourses.length < amount"
      >
        提交
      </button>
    </form>
    <p>{{ selectedCourses }}</p>
  </div>
</template>
<script lang="ts">
import { listCourses } from "@/datasource/DataSource";
import { defineComponent, ref, watch } from "vue";
import { Course } from "@/datasource/Types";
export default defineComponent({
  setup() {
    const checkboxs: HTMLInputElement[] = [];
    const chRefs = (el: HTMLInputElement) => checkboxs.push(el);
    const agree = ref(false);
    const courses = listCourses();
    const amount = 2;
    const selectedCourses = ref<Course[]>([{ id: 7 }]);
    watch(selectedCourses, () => {
      const checkboxDis = selectedCourses.value.length >= amount;
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });
    return {
      agree,
      courses,
      amount,
      selectedCourses,
      chRefs
    };
  }
});
</script>
