<template>
  <div>
    <h2>组件化设计与传参</h2>
    <p>
      将组件的部分内容合理分割设计为独立的组件,但组件粒度过细也会增加维护成本
    </p>
    <br />
    <item v-for="(c, index) of courses" :key="index" :course="c" />
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";
import { LIST_COURSES } from "@/store/VuexTypes";
import item from "./Item.vue";
export default defineComponent({
  components: { item },
  setup() {
    const store = useStore<State>();
    const courses = computed(() => store.state.courses);
    store.dispatch(LIST_COURSES);
    return {
      courses
    };
  }
});
</script>
