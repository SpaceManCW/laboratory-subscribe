import { Course, Title, Lab, Teacher } from "@/datasource/Types";

export function listCourses() {
  const courses: Course[] = [
    { id: 4, name: "Java程序设计", createTime: "2046-05-10T12:00" },
    { id: 5, name: "Web开发技术", createTime: "2046-04-10T09:00" },
    { id: 6, name: "Web系统框架", createTime: "2046-06-10T21:30" },
    { id: 7, name: "移动终端开发技术", createTime: "2046-06-13T18:43" }
  ];
  return courses;
}

export function listTitles() {
  const titles: Title[] = [
    { id: 1, name: "讲师" },
    { id: 2, name: "副教授" },
    { id: 3, name: "教授" }
  ];
  return titles;
}
//以下是课设需要
export function listLabs() {
  const labs: Lab[] = [
    { id: 1, machines: 20, describe: "联想", address: "丹青901" },
    { id: 2, machines: 30, describe: "惠普", address: "丹青902" },
    { id: 3, machines: 25, describe: "苹果", address: "丹青903" },
    { id: 4, machines: 25, describe: "华为", address: "丹青904" },
    { id: 5, machines: 25, describe: "华硕", address: "丹青905" }
  ];
  return labs;
}
export function listTeachers() {
  const teachers: Teacher[] = [
    {
      id: 1,
      name: "王波",
      department: "信息学院",
      major: "软件工程",
      courses: [
        { id: 1, name: "Java程序设计", createTime: "2046-05-10T12:00" },
        { id: 2, name: "Web开发技术", createTime: "2046-04-10T09:00" }
      ]
    },
    {
      id: 2,
      name: "李莉",
      department: "信息学院",
      major: "软件工程",
      courses: [
        { id: 1, name: "软件工程导论", createTime: "2046-05-10T12:00" },
        { id: 2, name: "需求分析", createTime: "2046-04-10T09:00" }
      ]
    },
    {
      id: 3,
      name: "李丹",
      department: "信息学院",
      major: "计算机科学与技术",
      courses: [
        { id: 1, name: "计算机组成原理", createTime: "2046-05-10T12:00" },
        { id: 2, name: "Web开发技术", createTime: "2046-04-10T09:00" }
      ]
    },
    {
      id: 4,
      name: "毛阿川",
      department: "信息学院",
      major: "计算机科学与技术",
      courses: [
        { id: 1, name: "离散数学", createTime: "2046-05-10T12:00" },
        { id: 2, name: "数据结构", createTime: "2046-04-10T09:00" }
      ]
    }
  ];
  return teachers;
}
