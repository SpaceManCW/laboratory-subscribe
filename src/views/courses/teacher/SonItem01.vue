<template>
  <div class="card">
    <span class="address">实验室：{{ lab.address }}</span>
    <span class="des">
      机器数量：{{ lab.machines }} 设备描述：{{ lab.describe }}
    </span>
    <button
      class="btn"
      @click="
        active = true;
        labSee = lab;
      "
    >
      查看详情>>
    </button>
    <beButton v-if="active" :lab="labSee" @emitClose="active = false" />
  </div>
</template>
<script lang="ts">
import { Lab } from "@/datasource/Types";
import { defineAsyncComponent, defineComponent, PropType, Ref, ref } from "vue";
const beButton = defineAsyncComponent(() => import("./BeButton.vue"));
export default defineComponent({
  props: {
    // 视图可直接使用，无需setup()函数
    lab: Object as PropType<Lab>
  },
  components: { beButton },
  setup() {
    const active = ref(false);
    const labSee: Ref<Lab> = ref({});
    return { active, labSee };
  }
});
</script>
<style scoped>
.card {
  padding: 10px;
  background-color: rgb(219, 237, 241);
  border-bottom: 1px solid #9daab860;
}
.card:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.address {
  font-size: 1rem;
  font-weight: bold;
}
.des {
  font-size: 0.5rem;
  color: darkgrey;
}
.btn {
  /* font-size: 1rem; */
  border: none;
  background-color: transparent;
  outline: none;
  float: right;
}
</style>
