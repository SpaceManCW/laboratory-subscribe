<template>
  <div>
    <h2>同步事件应用</h2>
    {{ user.name }}/{{ user.address }}
    <br />
    <input type="text" v-model="myUser.name" />
    <br />
    <input type="text" v-model="myUser.address" />
    <br />
    <button type="button" @click="updateuser">同步更新数据</button>
    <br />
    <button type="button" @click="asyncUpdate">异步更新数据</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { State } from "@/store";
import { Store, useStore } from "vuex";
import { User } from "@/datasource/Types";
import { UPDATE_USER } from "@/store/VuexTypes";
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const user = computed(() => store.state.user);
    //创建一个响应式对象用于双向绑定
    const myUser = ref<User>({});
    const updateuser = () => {
      store.commit(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    const asyncUpdate = () => {
      store.dispatch(UPDATE_USER, {
        name: myUser.value.name,
        address: myUser.value.address
      } as User);
    };
    return {
      user,
      myUser,
      updateuser,
      asyncUpdate
    };
  }
});
</script>
