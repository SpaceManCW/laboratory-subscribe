<template>
  <div>
    <h3>对于msg的useMsg方法的使用</h3>
    msg: {{ msgRef }}
    <br />
    <p>按钮触发useMsg中的changeMsg方法</p>
    <br />
    <button type="button" @click="changeMsg">点击改变msg</button>
    <br />
    <p>使用计算属性将msg翻转</p>
    {{ computedMsg }}
    <hr />
    <h3>对于user的useUser方法的使用</h3>
    user: {{ userRef }}
    <br />
    <p>按钮触发useUser中的changeUser改变user对象</p>
    <button type="button" @click="changeUser">点击改变user</button>
    <br />
    <p>使用计算属性改变插入时间的格式</p>
    {{ computedUser(userRef.insertTime) }}
    <hr />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, Ref } from "vue";
import { User } from "@/datasource/Types";
function useMsg(msg: Ref<string>) {
  const changeMsg = () => {
    msg.value = "hello";
  };
  const computedMsg = computed(() =>
    msg.value
      .split("")
      .reverse()
      .join("")
  );
  return {
    computedMsg,
    changeMsg
  };
}
function useUser(user: Ref<User>) {
  const userT: User = {
    name: "Lv",
    insertTime: "2021T5-13"
  };
  const changeUser = () => {
    user.value = userT;
  };
  const computedUser = computed(() => (data: string) => data.replace("T", "-"));
  return {
    changeUser,
    computedUser
  };
}
export default defineComponent({
  setup() {
    const user: User = {
      name: "Lin",
      insertTime: "2021T5-13"
    };
    const msgRef = ref("hello world");
    const userRef = ref(user);
    const { computedMsg, changeMsg } = useMsg(msgRef);
    const { changeUser, computedUser } = useUser(userRef);
    return {
      msgRef,
      userRef,
      computedMsg,
      changeMsg,
      changeUser,
      computedUser
    };
  }
});
</script>
