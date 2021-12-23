import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  //以下是课程设计
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/courses/Login.vue")
  },
  {
    name: "nomatch",
    path: "/:pathMatch(.*)*",
    redirect: { name: "login" }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
