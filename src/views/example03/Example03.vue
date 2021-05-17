<template>
  <div>
    <h2>路由传参的两种方法</h2>
    <b>
      第一种方法，在路由里把props打开，然后在组件里使用props[],之后可直接使用
    </b>
    <hr />
    通过第一种方法传递的sid：{{ sid }}
    <hr />
    <b>
      第二种方法，不用在路由里打开props,直接在组件中通过$route.params.的方法使用
    </b>
    <hr />
    通过第二种方法传递的hid: {{ $route.params.hid }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["sid", "hid"]
});
</script>
