export interface UserForm {
  userName?: string;
  password?: string;
}

export interface User {
  id?: number;
  name?: string;
  sex?: string;
  tel?: string;
  password?: string;
  role?: number;
}
export interface Lab {
  id?: number;
  machines?: number;
  describe?: string;
  address?: string;
}

export interface Course {
  id?: number;
  name?: string;
  classHour?: number;
  students?: number;
}
export interface Teacher {
  id?: number;
  name?: string;
  department?: string;
  major?: string;
  courses?: Course[];
  records?: [];
}

export interface ReRecord {
  id?: number;
  lid?: number;
  tid?: number;
  courseName?: string;
  week?: number; //周次
  day?: number; //星期几
  lesson?: number; //第几节课
}
