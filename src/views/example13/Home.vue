<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { BACKEND_COURSES } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store = useStore<State>();
    store.dispatch(BACKEND_COURSES);
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
