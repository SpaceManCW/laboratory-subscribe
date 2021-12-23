import { RouteRecordRaw } from "vue-router";
import { Menu } from "@/role/Menu";
import router from "@/router/index";

const routes: Array<RouteRecordRaw> = [
  {
    name: "index",
    path: "/index",
    component: () => import("@/views/courses/Index.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/courses/main.vue")
      },
      {
        path: "/main",
        component: () => import("@/views/courses/main.vue")
      },
      {
        path: "/addCourses",
        component: () => import("@/views/courses/teacher/AddCourses.vue")
      },
      {
        path: "/labBespeak",
        component: () => import("@/views/courses/teacher/LabBespeak.vue")
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "index" }
  }
];

//----------

const menuList: Menu[] = [
  {
    title: "教师端",
    children: [
      {
        title: "主页",
        path: "/main"
      },
      {
        title: "课程添加",
        path: "/addCourses"
      },
      {
        title: "实验室预约",
        path: "/labBespeak"
      }
    ]
  }
];

//------------
export function setUserRole() {
  router.removeRoute("nomatch");
  routes.forEach(r => router.addRoute(r));
  return menuList;
}
