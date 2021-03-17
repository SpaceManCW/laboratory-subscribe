<template>
  <div>
    <h1>data()</h1>
    <p>
      {{ message }}
    </p>
    <hr />
    <h1>Computed</h1>
    <p>基本绑定，缺少null判断等</p>
    <p>
      对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript
      表达式支持，表达式会作为 JavaScript 解析
    </p>
    {{ isShow ? "为true显示" : "为false显示" }}
    <br />
    {{ reversMessage }}
    <hr />
    {{ user.name }}
    <br />
    <button type="button" @click="change">change</button>
    <br />
    {{ user.insertTime }}
    <br />
    {{ myDate }}
    <br />
    <p>
      data中属性必须提前声明。data中的响应式属性数据，在组件创建时确定，数据可更改，但默认不能添加新属性
      。user.address属性，必须提前声明
    </p>
    <button @click="addAddress">change</button>
    <br />
    {{ user.address }}
    <hr />
    <p>
      计算属性，默认声明的是属性的getter方法，不支持传参。但JS中，参数/属性可以是一个，函数
    </p>
    {{ myReplace(user.insertTime) }}
    <hr />
    <h1>watch</h1>
    <p>
      watch监听器中允许执行异步方法，当仅仅需要监听当值改变而改变值时，应使用计算属性。
    </p>
    <button @click="isShow = !isShow">change isShow</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    isShow: false,
    message: "hello",
    user: {
      name: "BO",
      insertTime: "2046-04-09T11:04:25",
      address: ""
    }
  }),
  methods: {
    change() {
      this.user.name = "SUN";
    },
    addAddress() {
      this.user.address = "956";
    }
  },
  computed: {
    myDate(): string {
      return this.user.insertTime.replace("T", " ");
    },
    reversMessage(): string {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    myReplace() {
      return (date: string) => date.replace("T", " ");
    }
  },
  watch: {
    isShow(newValue, oldValue) {
      alert(`新值为${newValue}`);
    }
  }
});
</script>
