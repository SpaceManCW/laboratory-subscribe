import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes = [
  // {
  //   path: "/example01",
  //   component: () => import("@/views/example01/Example01.vue")
  // },
  // {
  //   path: "/example02",
  //   component: () => import("@/views/example02/Example02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example03/students/:sid/homeworks/:hid",
  //   component: () => import("@/views/example03/Example03.vue")
  // },
  // {
  //   props: true,
  //   path: "/example04-01",
  //   component: () => import("@/views/example04/Example04-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example04-02",
  //   component: () => import("@/views/example04/Example04-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example04-03/students/:sid/homeworks/:hid",
  //   component: () => import("@/views/example04/Example04-03.vue")
  // },
  // {
  //   props: true,
  //   path: "/example04-04",
  //   component: () => import("@/views/example04/Example04-04.vue")
  // },
  // {
  //   props: true,
  //   path: "/example05-01",
  //   component: () => import("@/views/example05/Example05-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example05-02",
  //   component: () => import("@/views/example05/Example05-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example05-03",
  //   component: () => import("@/views/example05/Example05-03.vue")
  // },
  // /*
  // {
  //   props: true,
  //   path: "/example05-04",
  //   component: () => import("@/views/example05/Example05-04.vue")
  // }
  // */
  // {
  //   props: true,
  //   path: "/example06-01",
  //   component: () => import("@/views/example06/Example06-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example06-02",
  //   component: () => import("@/views/example06/Example06-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example07-01",
  //   component: () => import("@/views/example07/Example07-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example07-02",
  //   component: () => import("@/views/example07/Example07-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example07-03",
  //   component: () => import("@/views/example07/Example07-03.vue")
  // },
  // {
  //   props: true,
  //   path: "/example07-04",
  //   component: () => import("@/views/example07/Example07-04.vue")
  // },
  // {
  //   props: true,
  //   path: "/example08-01",
  //   component: () => import("@/views/example08/Example08-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example08-02",
  //   component: () => import("@/views/example08/Example08-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example09-01",
  //   component: () => import("@/views/example09/Example09-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example09-02",
  //   component: () => import("@/views/example09/Example09-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example10-01",
  //   component: () => import("@/views/example10/Example10-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/example10-02",
  //   component: () => import("@/views/example10/Example10-02.vue")
  // },
  // {
  //   props: true,
  //   path: "/example11-01",
  //   component: () => import("@/views/example11/Example11-01.vue"),
  //   children: [
  //     {
  //       // 空，默认加载的组件。
  //       // 即路由至/example11-01，router-view直接加载此组件。也可不设置
  //       path: "",
  //       component: () => import("@/views/example11/About.vue")
  //     },
  //     {
  //       // 声明相对路径。则路由到此组件的路径包含父组件路径
  //       // /example11-01/course
  //       path: "course",
  //       components: {
  //         default: () => import("@/views/example11/Course.vue"),
  //         button: () => import("@/views/example11/AddCourseButton.vue")
  //       }
  //     },
  //     {
  //       // 声明根路径。则路由到此组件的路径不包括父组件路径
  //       path: "/homework",
  //       components: {
  //         default: () => import("@/views/example11/Homework.vue"),
  //         button: () => import("@/views/example11/AddHomeworkButton.vue")
  //       }
  //     }
  //   ]
  // },
  // {
  //   props: true,
  //   path: "/example12/students/:sid/homeworks/:hid",
  //   component: () => import("@/views/example12/Example12-01.vue")
  // },
  // {
  //   props: true,
  //   path: "/homework01",
  //   component: () => import("@/views/homework01/Homework01.vue")
  // },
  // {
  //   props: true,
  //   path: "/homework02",
  //   component: () => import("@/views/homework02/Home.vue"),
  //   children: [
  //     {
  //       props: true,
  //       path: "location",
  //       component: () => import("@/views/homework02/Location.vue")
  //     },
  //     {
  //       name: "foods",
  //       props: true,
  //       path: "foods",
  //       component: () => import("@/views/homework02/Foods.vue")
  //     },
  //     {
  //       name: "shops",
  //       props: true,
  //       path: "shops/:sid",
  //       component: () => import("@/views/homework02/Shop.vue")
  //     },
  //     {
  //       props: true,
  //       path: "orders",
  //       component: () => import("@/views/homework02/Order.vue")
  //     }
  //   ]
  // },
  // {
  //   //----------------- 前后端联调
  //   props: true,
  //   path: "/example13",
  //   component: () => import("@/views/example13/Index.vue")
  // },
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
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
