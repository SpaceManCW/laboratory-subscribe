<template>
  <div
    class="container"
    v-bind:style="{
      backgroundImage: 'url(' + bg + ')',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 100%'
    }"
  >
    <p class="head">东北林业大学实验室预约系统</p>

    <!-- 登录界面 -->
    <template v-if="active">
      <div class="big">
        <!-- 账号输入区域 -->
        <div class="num">
          <span class="char">账号</span>
          &nbsp;:&nbsp;
          <input class="input" type="text" v-model="userForm.userName" />
        </div>
        <!-- 账号输入区域 -->
        <br />
        <!-- 密码输入区域 -->
        <div class="pass">
          <span class="char">密码</span>
          &nbsp;:&nbsp;
          <input class="input" type="password" v-model="userForm.password" />
        </div>
        <!-- 密码输入区域 -->
        <br />
        <!-- 登陆按键 -->
        <button class="btn" @click="login" type="button">
          登录
        </button>
        <br />
        <button class="btn02" @click="changeActive">新用户注册</button>
      </div>
    </template>
    <!-- 登录界面 -->
    <!-- 注册界面 -->
    <template v-else>
      <div class="big02">
        <div class="title">
          新用户注册
        </div>
        <div>
          姓名:
          <input type="text" id="infor" />
          &emsp;&emsp;&emsp;&emsp;&emsp;电话:
          <input type="tel" id="infor" />
        </div>
        <br />
        <div>
          我是:
          <select id="infor02">
            <option>教师</option>
            <option>管理员</option>
          </select>
          &emsp;&emsp; &emsp;&emsp;性别:
          <select id="infor02">
            <option>男</option>
            <option>女</option>
          </select>
          &emsp;&emsp; &emsp;&emsp;年龄:
          <input type="number" id="age" />
        </div>
        <br />
        <div>
          请输入账号密码:
          <input type="password" id="infor" />
        </div>
        <br />
        <button class="btn03">注册</button>
      </div>
    </template>
    <!-- 注册界面 -->
  </div>
</template>
<script lang="ts">
import { UserForm } from "@/datasource/Types";
import { State } from "@/store";
import { LOGIN, SET_ROLE, SET_MENULIST } from "@/store/VuexTypes";
import { ref, defineComponent, computed, Ref } from "vue";
import { useRouter } from "vue-router";
import { Store, useStore } from "vuex";
function useLogin(userForm: Ref<UserForm>, store: Store<State>) {
  const login = () => {
    const user = {
      userName: userForm.value.userName,
      password: userForm.value.password
    };
    store.dispatch(LOGIN, user);
  };
  return {
    login
  };
}
export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const userForm = ref<UserForm>({ userName: "", password: "" });
    const userRef = computed(() => store.state.user);
    const active = ref(true);
    const { login } = useLogin(userForm, store);
    const changeUserLogin = () => {
      active.value = !active.value;
    };
    return {
      bg: require("@/assets/img/mage01.jpg"),
      changeUserLogin,
      login,
      userForm,
      active
    };
  }
});
</script>
<style scoped>
#router {
  width: 1000px;
  border: 1px solid black;
}
.head {
  position: absolute;
  color: white;
  left: 100px;
  font-size: 2.2rem;
}
.container {
  position: absolute;
  top: 120px;
  display: flex;
  width: 100%;
  height: 450px;
}
/* 登录界面样式 */
.big {
  background-color: white;
  opacity: 0.78;
  left: 60%;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  border: 1px solid black;
  padding: 30px 0 20px 0;
  margin: 100px;
}
.char {
  font-size: 1.2rem;
}
.num {
  display: flex;
  align-items: center;
  width: 250px;
  height: 35px;
  border: 1px solid black;
  padding-left: 7px;
}
.pass {
  display: flex;
  align-items: center;
  width: 250px;
  height: 35px;
  border: 1px solid black;
  padding-left: 7px;
}
.input {
  font-size: 1.2rem;
  width: 190px;
  height: 30px;
  border: none;
  outline-style: none;
}
.btn {
  width: 260px;
  height: 35px;
  background-color: rgb(151, 163, 173);
  color: white;
}
.btn:hover {
  background-color: rgba(46, 54, 52, 0.904);
}
.btn02 {
  position: relative;
  left: 90px;
  background: none;
  border: none;
  outline-style: none;
}
.btn02:hover {
  color: rgb(139, 153, 146);
}
/* 登录界面样式 */
/* 注册界面样式 */
.big02 {
  background-color: white;
  opacity: 0.78;
  left: 60%;
  width: 450px;
  position: absolute;
  border: 1px solid black;
  padding: 20px 20px 30px 30px;
  margin: 80px;
}
.title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}
.tab {
  border-collapse: separate;
  border-spacing: 0px 15px;
}
#infor {
  width: 120px;
  height: 15px;
}
#infor02 {
  width: 50px;
  height: 22px;
}
#age {
  width: 50px;
  height: 15px;
}
.btn03 {
  position: relative;
  left: 90px;
  width: 260px;
  height: 35px;
  background-color: rgb(151, 163, 173);
  color: white;
}
.btn03:hover {
  background-color: rgba(46, 54, 52, 0.904);
}
/* 注册界面样式 */
</style>
