<template>
  <div>
    <h1>组件化设计与传参</h1>
    <p>
      组件粒度过粗包含过多内容，会使组件过于臃肿不利于维护。可将部分内容合理分割设计为独立组件。
      <br />
      但组件粒度过细也会增加维护成本。
    </p>
    <item v-for="(c, index) in courses" :key="index" :course="c" />
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { LIST_COURSES } from "@/store/VuexTypes";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import item from "./Item.vue";
export default defineComponent({
  components: { item },
  setup() {
    const store = useStore<State>();
    store.dispatch(LIST_COURSES);
    const courses = computed(() => store.state.courses);
    return {
      courses
    };
  }
});
</script>
