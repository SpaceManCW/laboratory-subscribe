<template>
  <div>
    <div>
      <h2>教师管理</h2>
      <div class="b1">
        <itemT
          class="cc"
          v-for="(t, index) of teachers"
          :key="index"
          :teacher="t"
        />
      </div>
    </div>
    <button class="btn btn-primary" @click="active2 = true">添加新教师</button>
    <addButton2 v-if="active2" @emitClose2="active2 = false" />
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore, Store } from "vuex";
import { defineComponent, computed, ref, defineAsyncComponent } from "vue";
import { LIST_LABS, LIST_TEACHERS } from "@/store/VuexTypes";
import itemT from "./ItemT.vue";
const addButton2 = defineAsyncComponent(() => import("./AddButton02.vue"));
export default defineComponent({
  components: { itemT, addButton2 },
  setup() {
    useStore().dispatch(LIST_LABS);
    useStore().dispatch(LIST_TEACHERS);
    const store: Store<State> = useStore();
    const teachers = computed(() => store.state.teachers);
    const active2 = ref(false);
    return {
      teachers,
      active2
    };
  }
});
</script>
<style scoped>
.b1 {
  border: 1px solid black;
  overflow: hidden;
}
.btn {
  display: inline-block;
  padding: 10px 10px;
  margin: 2px;
  color: white;
  background: gray;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
}
.btn-primary {
  background: rgb(160, 187, 194);
}
</style>
