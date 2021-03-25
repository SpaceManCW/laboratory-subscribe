<template>
  <div>
    <p>
      <b>一定在router配置声明启用props支持，否则无法获取数据。</b>
      <br />
      在vue props属性中声明同名变量
    </p>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    也可通过$route.params调用
    <br />
    studentID: {{ $route.params.sid }}
    <br />
    homeworksID: {{ $route.params.hid }}
    <hr />
    {{ getTitle }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["sid", "hid"],
  data: () => ({
    homeworks: [
      { id: 1, title: "spring" },
      { id: 2, title: "springMVC" },
      { id: 3, title: "JPA" }
    ]
  }),
  created() {
    //组件首次创建时调用
    //基于参数异步请求数据再渲染
    console.log(this.$route.params.sid);
    console.log(this.$route.params.hid);
    this.init();
  },
  beforeUpdate() {
    //组件数据变化时，例如props改变时调用
    this.init();
  },
  beforeRouteUpdate(to, from, next) {
    //复用组件渲染后，路由更新前（首次进入不会回调）回调。可替代beforeUpdate()
    this.init();
  },
  methods: {
    init() {
      console.log("init()");
    }
  },
  computed: {
    getTitle(): string {
      const c = this.homeworks.find(h => h.id == this.hid);
      if (c) {
        return c.title;
      }
      return "df";
    }
  }
});
</script>
