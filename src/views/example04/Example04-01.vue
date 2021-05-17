<template>
  <div>
    <h1>composition-api</h1>
    <p>setup()在组件对象创建前回调，因此无法通过this获取当前vue对象</p>
    <p>setup()返回的对象中的属性，将暴露给组件视图模板</p>
    <hr />
    <b>method使用</b>
    msgRef: {{ msgRef }}
    <br />
    <button type="button" @click="changeMsgRef">changeMsgRef</button>
    <br />
    user: {{ userRef }}
    <br />
    <button @click="changeUserRef">changeUserRef</button>
    <hr />
    <b>计算属性输出</b>
    <br />
    {{ userComputed }}
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const msgRef = ref("hello");
    const user: User = {
      name: "Lin",
      insertTime: "2021T5-12"
    };
    const userRef = ref(user);
    const userT: User = {
      name: "Lv",
      insertTime: "2021T5-13"
    };
    //原来的method
    const changeMsgRef = () => {
      msgRef.value = "HELLO";
    };
    const changeUserRef = () => {
      userRef.value = userT;
    };
    //原来的计算属性
    const userComputed = computed(() =>
      userRef.value.insertTime?.replace("T", "-")
    );
    //watch
    watch(msgRef, (newMsg, oldMsg) => alert(`msg被改为: ${newMsg}`));

    return {
      msgRef,
      user,
      userRef,
      changeMsgRef,
      userComputed,
      changeUserRef
    };
  }
});
</script>
