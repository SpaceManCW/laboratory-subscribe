<template>
  <div>
    <h2>从单一数据源获取数据有三种方法</h2>
    <p>第一种：直接通过$store.state.的方法获取</p>
    <p>第二种：定义一个变量const store然后通过store.的方式获取</p>
    <!--const store: Store<State> = useStore()-->
    <p>第三种：在计算属性中用...mapState()获取，然后直接使用</p>
    <p>
      注意组件内声明的user必须通过计算属性绑定state.user,否则state.user更新，组件的user不会响应式的更新
    </p>
    <hr />
    第一种方法：{{ $store.state.user.name }}/{{ $store.state.user.address }}
    <br />
    第二种方法：{{ users.name }}/{{ users.address }}
    <br />
    {{ store.state.user }}
    <br />
    第三种方法：{{ user.name }}/{{ user.address }}
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { State } from "@/store";
import { mapState, useStore, Store } from "vuex";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const users = computed(() => store.state.user);
    return {
      users,
      store
    };
  },
  computed: {
    ...mapState(["user"])
  }
});
</script>
