<template>
  <div>
    <h2>v-if与v-else</h2>
    <template v-if="userLogin">
      <input placeholder="请输入账号" />
      <br />
      <input type="password" placeholder="请输入密码" />
    </template>
    <template v-else>
      <input type="password" placeholder="请输入密码" />
    </template>
    <br />
    <button type="button" @click="changeUserLogin">点击切换状态</button>
    <hr />
    <h2>v-show</h2>
    <p v-show="close">
      此语句在close=true时显示，点击下方按键转换状态
    </p>
    <button type="button" @click="changeClose">点击切换状态</button>
    <br />
    <p>可以不写方法，直接在click中使close=!close</p>
    <button @click="close = !close">点击切换状态</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const userLogin = ref(true);
    const close = ref(true);
    const changeUserLogin = () => {
      userLogin.value = !userLogin.value;
    };
    const changeClose = () => {
      close.value = !close.value;
    };
    return {
      userLogin,
      changeUserLogin,
      close,
      changeClose
    };
  }
});
</script>
