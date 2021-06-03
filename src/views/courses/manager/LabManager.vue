<template>
  <div>
    <h2>实验室管理</h2>
    <div class="b1">
      <itemL v-for="(l, index) of labs" :key="index" :lab="l" />
    </div>
    <button class="btn btn-primary" @click="active = true">添加新实验室</button>
    <addButton v-if="active" @emitClose="active = false" />
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { useStore, Store } from "vuex";
import { defineComponent, computed, ref, defineAsyncComponent } from "vue";
import { LIST_LABS, LIST_TEACHERS } from "@/store/VuexTypes";
import itemL from "./ItemL.vue";
const addButton = defineAsyncComponent(() => import("./AddButton01.vue"));
export default defineComponent({
  components: { itemL, addButton },
  setup() {
    useStore().dispatch(LIST_LABS);
    useStore().dispatch(LIST_TEACHERS);
    const store: Store<State> = useStore();
    const labs = computed(() => store.state.labs);
    const active = ref(false);
    return {
      labs,
      active
    };
  }
});
</script>
<style scoped>
.b1 {
  border: 1px solid black;
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
