<template>
  <div id="app">
    <router-view />
    <!--渲染路径匹配到的视图组件  -->
    <alertdialog />
  </div>
</template>
<script>
export default {
  components: { alertdialog: () => import("@/components/AlertDialog.vue") }
};
</script>
