<template>
  <div>
    <h1>Integrating with backend</h1>
    <p>
      前后端联合调试。
      <br />
      API接口文档：http://114.116.213.241:8080/swagger-ui/index.html
      <br />
      仅实现了以教师登录后，获取当前教师全部课程功能.
      <br />
      超管:admin/admin 测试教师: 1001/1001
      <br />
      详细基于返回角色，动态生成路由信息/功能列表等，参考：
      <br />
      https://github.com/bwhyman/vue3-login-examples
    </p>
    <home v-if="isLogin" />
    <login v-else />
  </div>
</template>
<script lang="ts">
import { mapState } from "vuex";
import { defineAsyncComponent, defineComponent } from "vue";

const login = defineAsyncComponent(() => import("./Login.vue"));
const home = defineAsyncComponent(() => import("./Home.vue"));
export default defineComponent({
  components: { login, home },
  computed: {
    ...mapState(["isLogin"])
  }
});
</script>
