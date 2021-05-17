<template>
  <div>
    <router-view name="button" />
    <ul>
      <li><router-link to="/example11-01">about</router-link></li>
      <li><router-link to="/example11-01/course">课程管理</router-link></li>
      <li><router-link to="/homework">作业管理</router-link></li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style scoped>
ul li {
  display: inline-block;
  padding: 5px;
}
</style>
