import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes = [
  //以下是课程设计
  {
    props: true,
    path: "/courses/manager",
    component: () => import("@/views/courses/manager/LabManager.vue")
  },
  {
    props: true,
    path: "/teacherManager",
    component: () => import("@/views/courses/manager/TeacherManager.vue")
  },
  {
    props: true,
    path: "/addCourses",
    component: () => import("@/views/courses/teacher/AddCourses.vue")
  },
  {
    props: true,
    path: "/labBespeak",
    component: () => import("@/views/courses/teacher/LabBespeak.vue")
  },
  {
    props: true,
    path: "/",
    component: () => import("@/views/courses/main.vue")
  },
  {
    props: true,
    path: "/index",
    component: () => import("@/views/courses/Index.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
