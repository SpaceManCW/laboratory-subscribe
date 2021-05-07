<template>
  <div>
    <p>
      与视图元素的绑定需要声明元素，以及绑定函数，在视图元素通过：ref绑定函数
    </p>
    <p>同意条款才能选择操作；必须选择两项才能提交；等于两项时变为不可用状态</p>

    <form>
      <label>
        <input type="checkbox" v-model="agreed" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses" :key="index">
        <label>
          <input
            :ref="chRefs"
            type="checkbox"
            v-model="sCoursesRef"
            :value="{ id: c.id }"
            :disabled="!agreed"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <button type="button" :disabled="!agreed || sCoursesRef.length < amount">
        submit
      </button>
    </form>
    <p>
      {{ sCoursesRef }}
    </p>
  </div>
</template>
<script lang="ts">
import { listCourses } from "@/datasource/DataSource";
import { Course } from "@/datasource/Types";
import { defineComponent, ref, watch } from "vue";

const selectedCourses: Course[] = [{ id: 7 }];
export default defineComponent({
  setup() {
    const agreed = ref(false);
    const courses = listCourses();
    const checkboxs: HTMLInputElement[] = [];
    const chRefs = (e1: HTMLInputElement) => checkboxs.push(e1);
    const sCoursesRef = ref<Course[]>(selectedCourses);
    const amount = 2;

    watch(sCoursesRef, () => {
      const checkboxDis = sCoursesRef.value.length >= amount;
      checkboxs
        .filter(c => !c.checked)
        .forEach(c => (c.disabled = checkboxDis));
    });

    return {
      amount,
      sCoursesRef,
      agreed,
      courses,
      chRefs
    };
  }
});
</script>
