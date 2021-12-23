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
        props: true,
        path: "/courses/manager",
        component: () => import("@/views/courses/manager/LabManager.vue")
      },
      {
        props: true,
        path: "/teacherManager",
        component: () => import("@/views/courses/manager/TeacherManager.vue")
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
    title: "管理员",
    children: [
      {
        title: "主页",
        path: "/main"
      },
      {
        title: "实验室管理",
        path: "/courses/manager"
      },
      {
        title: "教师管理",
        path: "/teacherManager"
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
