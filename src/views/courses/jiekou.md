```java
// 用户
### 登录 输入姓名和密码
POST http://localhost:8080/api/login
Content-Type: application/json

{
  "name": "teacher",
  "password": "123456"
}

### 注册
POST http://localhost:8080/api/user/adduser
Content-Type: application/json

{
  "age": 0,
  "name": "string",
  "password": "string",
  "role": "string",
  "sex": "string",
  "telephone": "string"
}

### 修改密码
PATCH http://localhost:8080/api/user/password
Content-Type: application/json

{
  "password": "string"
}

//教师
### 查询课程信息
GET http://localhost:8080/api/teacher/courses


### 添加课程信息 学时 课程名 学生数量
POST http://localhost:8080/api//teacher/course
Content-Type: application/json

{
  "classHour": 0,
  "name": "string",
  "studentNumber": 0
}


### 删除课程信息 输入课程名
DELETE http://localhost:8080/api/teacher/course/课程名


### 输入课程名称基于学生数查询符合条件的实验室
POST http://localhost:8080/api/teacher/labbycourse
Content-Type: application/json

{
  "name": "string"
}

### 基于教室名查询实验室预约信息
POST http://localhost:8080/api/user/labclasses
Content-Type: application/json

{
  "labClass": 0
}

### 批量预约实验室 实验室名 课程名 第几周开始 第几周结束 星期几 第几节课
POST http://localhost:8080/api/teacher/addlabclasses
Content-Type: application/json

{
  "labClass": 0,
  "courseName": "string",
  "weekNumMin": 0,
  "weekNumMax": 0,
  "week": 0,
  "classNum": 0
}

### 预约实验室 教室号 课程名 第几周 星期几 第几节课
POST http://localhost:8080/api/teacher/addlabclass
Content-Type: application/json

{
  "labClass": 0,
  "courseName": "string",
  "weekNum": 0,
  "week": 0,
  "classNum": 0
}

// 管理员
### 查询教师信息
GET http://localhost:8080/api/admine/teacher

### 基于姓名删除教师信息
DELETE http://localhost:8080/api/admine/deleteteacher/教师姓名

### 查询管理员信息
GET http://localhost:8080/api/admine/admines

### 查询实验室信息
GET http://localhost:8080/api/admine/lab

### 添加实验室信息  教室号 教室配置描述 电脑数量
POST http://localhost:8080/api/admine/lab
Content-Type: application/json

{
  "labClass": 0,
  "labDescribe": "string",
  "number": 0
}

### 基于姓名更新教师信息
PATCH http://localhost:8080/api/admine/updateteacher
Content-Type: application/json

{
  "age": 0,
  "id": 0,
  "name": "string",
  "sex": "string",
  "telephone": "string"
}
```