<template>
  <div>
    <!-- <aside>
      <div class="sidebar">
        <h4><a class="first" href="#">首页</a></h4>
      </div>
      <hr />
      <div class="sidebar">
        <h4>管理员</h4>
        <ul>
          <li>
            <router-link to="/courses/manager">
              实验室管理
            </router-link>
          </li>
          <li>
            <router-link to="/teacherManager">
              教师管理
            </router-link>
          </li>
        </ul>
      </div>
      <hr />
      <div class="sidebar">
        <h4>教师</h4>
        <ul>
          <li>
            <router-link to="/addCourses">
              添加课程
            </router-link>
          </li>
          <li>
            <router-link to="/labBespeak">
              实验室预约
            </router-link>
          </li>
        </ul>
      </div>
    </aside> -->
    <aside>
      <div
        class="sidebar"
        v-for="(menu1, m1index) in menuList"
        :key="`m1-${m1index}`"
      >
        <h4>{{ menu1.title }}</h4>
        <div v-if="menu1?.children.length > 0">
          <ul>
            <li
              v-for="(menu2, m2index) in menu1.children"
              :key="`m2-${m2index}`"
            >
              <router-link :to="menu2.path">{{ menu2.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script lang="ts">
import { State } from "@/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const state: State = useStore().state;
    const menuList = state.menuList;
    return {
      menuList
    };
  }
});
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font: 1.2rem "隶书";
}
/* 左侧边栏容器宽度 */
aside {
  width: 150px;
  background: #f1f1f1;
}
/* 导航标题 */
.sidebar > h4 {
  padding: 15px 20px;
  background: rgb(74, 82, 72);
  color: white;
}
/* 添加标题悬浮样式 */
.sidebar > h4:hover {
  cursor: pointer;
  background: #000;
}
.sidebar ul {
  list-style: none;
}
/* 二级菜单样式 */
.sidebar li a {
  display: block;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
}
/* 二级菜单悬浮样式 */
aside li a:hover {
  font-weight: bold;
  background-color: rgba(85, 85, 85, 0.658);
  color: white;
}
.first {
  display: block;
  color: white;
  text-decoration: none;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
