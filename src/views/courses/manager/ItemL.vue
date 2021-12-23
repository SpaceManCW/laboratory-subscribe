<template>
  <div class="card">
    <span class="address">实验室：{{ lab.address }}</span>
    &emsp;&emsp;
    <br />
    <span class="des">
      机器数量：{{ lab.machines }}&emsp;&emsp; 设备描述：{{ lab.describe }}
    </span>
    <button class="btn" @click="deleteLab">删除</button>
  </div>
</template>
<script lang="ts">
import { Lab } from "@/datasource/Types";
import { State } from "@/store";
import { DELETE_LAB } from "@/store/VuexTypes";
import { defineComponent, PropType } from "vue";
import { Store, useStore } from "vuex";
export default defineComponent({
  props: {
    // 视图可直接使用，无需setup()函数
    lab: Object as PropType<Lab>
  },
  setup() {
    const store: Store<State> = useStore();
    const deleteLab = (lab: any) => {
      const lid = lab.id;
      store.dispatch(DELETE_LAB, lid);
    };
    return {
      deleteLab
    };
  }
});
</script>
<style scoped>
.card {
  padding: 15px;
  display: flex;
  align-items: center;
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
  position: absolute;
  border: none;
  background-color: rgba(238, 22, 22, 0.199);
  outline: none;
  padding: 10px;
  border-radius: 5px;
  right: 100px;
}
</style>
