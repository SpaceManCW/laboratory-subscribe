<template>
  <div class="card">
    <span class="address">实验室：{{ lab.address }}</span>
    <br />
    <span class="des">
      机器数量：{{ lab.machines }} 设备描述：{{ lab.describe }}
    </span>
  </div>
</template>
<script lang="ts">
import { Lab } from "@/datasource/Types";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    // 视图可直接使用，无需setup()函数
    lab: Object as PropType<Lab>
  }
});
</script>
<style scoped>
.card {
  padding: 10px;
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
</style>
