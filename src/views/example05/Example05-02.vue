<template>
  <div>
    <h1>v-bind</h1>
    <p>
      v-bind，将指定事件绑定到methods中的方法
    </p>
    <p>
      <label>
        <input type="checkbox" @click="setAgree" />
        同意以上条款
      </label>
      <br />
      <button type="button" :disabled="submitButtonDisabled">提交</button>
    </p>
    <hr />
    <p>
      也支持直接在事件中声明执行语句
    </p>
    <p
      @mouseover="active = true"
      @mouseleave="active = false"
      :class="{ 'bg-red': active }"
    >
      元素class属性值与active值绑定， 当鼠标进入/移出时改变active值，
      从而动态改变元素样式
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const submitButtonDisabled = ref(true);
    const active = ref(false);
    watch(submitButtonDisabled, (newValue: boolean, oldValue: boolean) =>
      alert(`按钮被禁用 ${newValue}`)
    );
    const setAgree = () =>
      (submitButtonDisabled.value = !submitButtonDisabled.value);
    return {
      submitButtonDisabled,
      active,
      setAgree
    };
  }
});
</script>
<style scoped>
.bg-red {
  background-color: red;
}
</style>
