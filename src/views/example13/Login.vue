<template>
  <div>
    <div>{{ msg }}</div>
    <div>
      <input v-model="user.number" />
      <br />
      <input v-model="user.password" />
      <br />
      <button @click="login">login</button>
    </div>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { State } from "@/store";
import { BACKEND_WELCOME, BACKEND_LOGIN } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const msg = ref("");
    const user = ref({ number: "", password: "" });
    const store = useStore<State>();
    // vuex返回promise对象。即不是所有数据都需要挂在state上
    store.dispatch(BACKEND_WELCOME).then(data => (msg.value = data.messages));
    const login = () => {
      store.dispatch(BACKEND_LOGIN, user.value);
    };
    return {
      msg,
      user,
      login
    };
  }
});
</script>
