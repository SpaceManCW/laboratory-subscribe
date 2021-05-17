<template>
  <div>
    <p>
      通过watch()函数，监听props的改变，渲染标签无需声明:key="$route.path"。
      <br />
      但首次进入组件时监听无效，因此声明初始化函数，在setup()中执行(首次进入)，在watch()回调中再次执行。
    </p>
    <p>
      <button @click="toWelcome">编程式路由至example01</button>
    </p>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const init = () => console.log(`模拟异步网络请求的函数。${props.sid}`);
    init();
    watch(props, () => init());
    const router = useRouter();
    const toWelcome = () => router.push("/example01");
    return {
      toWelcome
    };
  }
});
</script>
