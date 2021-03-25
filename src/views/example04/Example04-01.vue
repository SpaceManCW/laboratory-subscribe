<template>
  <div>
    <h1>composition-api</h1>
    <p>
      基于composition-api重写example02实例
      <br />
      <a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html">
        什么是组合式 API？
      </a>
    </p>
    <hr />
    <h1>ref()</h1>
    <p>
      ref()函数，支持基本数据类型/数组/对象/数据转为响应式数据，
      在TS中通过value属性获取/修改，在视图模板直接使用自动拆箱。
    </p>
    <p>
      messageRef为响应式属性，即当其封装的数据改变时，动态响应式改变。
      <br />
      messageRef: {{ messageRef }}
    </p>

    <button type="button" @click="changeUserRef">changeUserRef</button>
    <br />
    {{ userRef?.name }} / {{ userRef?.insertTime }} / {{ userRef?.address }}
    <hr />
    <h1>computed()</h1>
    <p>
      computed()函数。声明计算属性，当user对象改变时，重新计算user中inserttime属性值
      <br />
      {{ userComputed }}
    </p>
    <hr />
    <h1>watch()</h1>
    <p>
      watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)
      <br />
      watch()函数包含2个参数，被监听的响应式属性(Ref对象)，传入new/old值的监听回调函数
    </p>
  </div>
</template>
<script lang="ts">
import { User } from "@/datasource/Types";
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const isShow = false;
    const messageRef = ref("hello");
    const user: User = {
      name: "BO",
      insertTime: "2046-04-09T11:04:25"
    };
    const userAsync: User = {
      name: "SUN",
      insertTime: "2046-04-11T20:24:59",
      address: "956"
    };
    const userRef = ref(user);
    // 视图执行函数
    const changeUserRef = () => {
      setTimeout(() => {
        userRef.value = userAsync;
      }, 1000);
    };
    // computed()函数
    const userComputed = computed(() =>
      userRef.value.insertTime?.replace("T", " ")
    );
    // watch()函数
    watch(userRef, (newUser, oldUser) =>
      alert(`用户名被改为: ${newUser.name}`)
    );
    return {
      isShow,
      messageRef,
      user,
      userRef,
      changeUserRef,
      userComputed
    };
  }
});
</script>
