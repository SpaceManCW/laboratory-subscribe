<template>
  <div>
    <h1>v-bind</h1>
    <input type="checkbox" @click="changeAgree" />
    同意条款
    <br />
    <button type="button" :disabled="userAgree">提交</button>
    <hr />
    <p
      @mouseover="active = true"
      @mouseleave="active = false"
      :class="{ c1: active }"
    >
      鼠标放上去变色
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
export default defineComponent({
  setup() {
    const userAgree = ref(true);
    const active = ref(false);
    const changeAgree = () => {
      userAgree.value = !userAgree.value;
    };
    watch(userAgree, (newValue: boolean, oldValue: boolean) =>
      alert(`提交状态改变为 ${!newValue}状态`)
    );
    return {
      userAgree,
      changeAgree,
      active
    };
  }
});
</script>
<style scoped>
.c1 {
  background-color: aqua;
}
</style>
