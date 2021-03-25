import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes = [
  {
    path: "/example01",
    component: () => import("@/views/example01/Example01.vue")
  },
  {
    path: "/example02",
    component: () => import("@/views/example02/Example02.vue")
  },
  {
    props: true,
    path: "/example03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example03/Example03.vue")
  },
  {
    props: true,
    path: "/example04-01",
    component: () => import("@/views/example04/Example04-01.vue")
  },
  {
    props: true,
    path: "/example04-02",
    component: () => import("@/views/example04/Example04-02.vue")
  },
  {
    props: true,
    path: "/example04-03/students/:sid/homeworks/:hid",
    component: () => import("@/views/example04/Example04-03.vue")
  },
  {
    props: true,
    path: "/example04-04",
    component: () => import("@/views/example04/Example04-04.vue")
  },
  {
    props: true,
    path: "/example05-01",
    component: () => import("@/views/example05/Example05-01.vue")
  }
  /*
  {
    props: true,
    path: "/example05-02",
    component: () => import("@/views/example05/Example05-02.vue")
  },
  {
    props: true,
    path: "/example05-03",
    component: () => import("@/views/example05/Example05-03.vue")
  },
  {
    props: true,
    path: "/example05-04",
    component: () => import("@/views/example05/Example05-04.vue")
  }
  */
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
