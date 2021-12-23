<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router" :key="$route.path" />
    <!--渲染路径匹配到的视图组件  -->
  </div>
</template>
<script lang="ts">
import sidebar from "@/views/Sidebar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { sidebar }
});
</script>
<style>
#app {
  display: flex;
  width: 100%;
}
#sidebar {
  width: 150px;
  height: 750px;
  border: 1px solid black;
  border-right-style: none;
}
#router {
  width: 100%;
  border: 1px solid black;
  flex: 1;
  padding: 10px;
}
</style>
