<template>
  <div id="app">
    <sidebar id="sidebar" />
    <router-view id="router" :key="$route.path" />
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
  margin-top: 10px;
  display: flex;
}
#sidebar {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
