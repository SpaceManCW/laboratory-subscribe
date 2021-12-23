import { User, Lab } from "@/datasource/Types";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);
// 过滤http前缀请求
mock.onAny(/^http/).passThrough();
mock.onAny(/^\/api\//).passThrough();

// 地址，支持JS正则表达式
// 正则表达式中 \，由转义符，\/，替代
// 匹配任意字符，\w+；
// $，结束。避免匹配多个
// 整个表达式，置于/  /之间
// 通用的，将{}占位符的字符串路径，转为正则表达式对象
// 例如，/users/{uid}; /users/{uid}/courses/{hid}
function path(p: string) {
  const reg = p.replace(/{\w+}/g, "(\\w+)").replace(/\//g, "\\/") + "$";
  return new RegExp(reg);
}
export interface ResultVO {
  code: number;
  message?: string;
  data?: any;
}
const resulVO: ResultVO = {
  code: 200,
  data: {}
};
// ===================================
//实验室模拟数据
mock.onGet(path("labs")).reply(200, {
  code: 200,
  data: {
    labs: [
      { id: 1, machines: 20, describe: "联想", address: "丹青901" },
      { id: 2, machines: 30, describe: "惠普", address: "丹青902" },
      { id: 3, machines: 25, describe: "苹果", address: "丹青903" },
      { id: 4, machines: 25, describe: "华为", address: "丹青904" },
      { id: 5, machines: 40, describe: "华硕", address: "丹青905" }
    ]
  }
} as ResultVO);

mock.onGet(path("labs/{lid}")).reply(200, {
  code: 200,
  data: {
    lab: { id: 1, machines: 20, describe: "联想", address: "丹青901" }
  }
} as ResultVO);

//教师模拟数据
mock.onGet(path("teachers")).reply(200, {
  code: 200,
  data: {
    teachers: [
      {
        id: 1,
        name: "王波",
        department: "信息学院",
        major: "软件工程",
        courses: [
          { id: 1, name: "Java程序设计", classHour: 32, students: 30 },
          { id: 2, name: "Web开发技术", classHour: 32, students: 30 }
        ]
      },
      {
        id: 2,
        name: "李莉",
        department: "信息学院",
        major: "软件工程",
        courses: [
          { id: 1, name: "软件工程导论", classHour: 32, students: 30 },
          { id: 2, name: "需求分析", classHour: 32, students: 30 }
        ]
      },
      {
        id: 3,
        name: "李丹",
        department: "信息学院",
        major: "计算机科学与技术",
        courses: [
          { id: 1, name: "计算机组成原理", classHour: 32, students: 30 },
          { id: 2, name: "Web开发技术", classHour: 32, students: 30 }
        ]
      },
      {
        id: 4,
        name: "毛阿川",
        department: "信息学院",
        major: "计算机科学与技术",
        courses: [
          { id: 1, name: "离散数学", classHour: 32, students: 30 },
          { id: 2, name: "数据结构", classHour: 32, students: 30 }
        ]
      }
    ]
  }
} as ResultVO);

mock.onGet(path("teacher")).reply(200, {
  code: 200,
  data: {
    teacher: {
      id: 1,
      name: "王波",
      department: "信息学院",
      major: "软件工程",
      courses: [
        { id: 1, name: "Java程序设计", classHour: 32, students: 35 },
        { id: 2, name: "Web开发技术", classHour: 32, students: 30 }
      ],
      records: [
        {
          id: 5,
          lid: 5,
          tid: 1,
          courseName: "Java程序设计",
          week: 5,
          day: 2,
          lesson: 3
        }
      ]
    }
  }
} as ResultVO);
// id?: number;
//   lid?: number;
//   tid?: string;
//   courseName?: string;
//   week?: number; //周次
//   day?: number; //星期几
//   lesson?: number; //第几节课
mock.onGet(path("records")).reply(200, {
  code: 200,
  data: {
    records: [
      // 901预约记录
      {
        id: 1,
        lid: 1,
        tid: 2,
        courseName: "课程1",
        week: 1,
        day: 1,
        lesson: 1
      },
      {
        id: 2,
        lid: 1,
        tid: 4,
        courseName: "课程2",
        week: 1,
        day: 2,
        lesson: 1
      },
      //902预约记录
      {
        id: 2,
        lid: 2,
        tid: 5,
        courseName: "课程3",
        week: 1,
        day: 3,
        lesson: 3
      },
      {
        id: 3,
        lid: 2,
        tid: 2,
        courseName: "课程4",
        week: 2,
        day: 3,
        lesson: 4
      },
      //903预约记录
      {
        id: 4,
        lid: 3,
        tid: 3,
        courseName: "计算机组成原理",
        week: 3,
        day: 4,
        lesson: 4
      }
    ]
  }
} as ResultVO);
mock.onPost("login").reply(c => {
  const user = JSON.parse(c.data);
  if (user.userName == "2018214248" && user.password == "123456") {
    resulVO.code = 200;
    resulVO.data = {
      user: {
        id: 2018214248,
        name: "Lin",
        sex: "男",
        tel: "15041556185",
        password: "123456",
        role: 1
      }
    };
    resulVO.message = "";
    return [
      200,
      resulVO,
      {
        role: "ds2fsd2f21ds2f"
      },
      {
        Authorization: "744193c87ed2ed2eec665c8824ebc353042ba2be136efcb5c6"
      }
    ];
  } else if (user.userName == "1001" && user.password == "1001") {
    resulVO.code = 200;
    resulVO.data = {
      user: {
        id: 1001,
        name: "admin",
        sex: "男",
        tel: "18888888888",
        password: "1001",
        role: 2
      }
    };
    resulVO.message = "";
    return [
      200,
      resulVO,
      {
        Authorization: "744193c872b677aab12a0ced447882f4cf9fcc6"
      }
    ];
  }

  resulVO.code = 401;
  resulVO.message = "用户名密码错误";
  return [200, resulVO];
});

// 模拟请求携带token是否合法
// mock.onGet("home").reply(c => {
//   const auth = c.headers?.authorization;
//   if (
//     auth ==
//     "744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6"
//   ) {
//     resulVO.code = 200;
//     resulVO.data = { courses: listCourses() };
//     return [200, resulVO];
//   }
//   resulVO.code = 403;
//   resulVO.message = "无权限";
//   return [200, resulVO];
// });

// mock.onGet(path("courses/{cid}")).reply(c => {
//   // 默认不支持从正则表达式提取变量，可手动实现
//   const reg = /courses\/(\d+)/;
//   const cid = c.url?.match(reg)![1];
//   const course = listCourses().find(h => h.id == cid);
//   resulVO.code = 200;
//   resulVO.data = { course: course };
//   return [200, resulVO];
// });
