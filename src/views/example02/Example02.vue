<template>
  <div>
    <h1>数据绑定</h1>
    <br />
    {{ msg }}
    <br />
    {{ user.name }}
    <br />
    <h2>methods使用</h2>
    <button type="button" @click="change">change</button>
    <br />
    {{ user.insertTime }}
    <br />
    <h2>computed使用</h2>
    {{ myReplace(user.insertTime) }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data: () => ({
    msg: "hello",
    user: {
      name: "Lin",
      insertTime: "2021L5-12"
    }
  }),
  methods: {
    change() {
      this.user.name = "Lv";
    }
  },
  computed: {
    myReplace() {
      return (date: string) => date.replace("L", "-");
    }
  }
});
</script>
