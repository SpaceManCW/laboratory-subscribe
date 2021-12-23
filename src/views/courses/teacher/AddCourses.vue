<template>
  <div>
    <h2>课程实验管理</h2>
    <div>
      <ul>
        <li v-for="(c, cindex) in teacher.courses" :key="cindex">
          {{ c.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Ref } from "vue";
import { State } from "@/store";
import { computed, defineComponent, ref } from "vue";
import { Course } from "@/datasource/Types";
import { ADD_COURSE } from "@/store/VuexTypes";
import { Store, useStore } from "vuex";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const teacher = computed(() => store.state.teacher);
    const courseAdd: Ref<Course> = ref({});
    const addCourse = () => {
      const course = {
        id: courseAdd.value.id,
        name: courseAdd.value.name,
        classHour: courseAdd.value.classHour,
        students: courseAdd.value.students
      };
      store.dispatch(ADD_COURSE, course);
    };

    return {
      teacher,
      addCourse,
      courseAdd
    };
  }
});
</script>
