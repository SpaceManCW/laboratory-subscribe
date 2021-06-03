<template>
  <div>
    <div class="modal" @click="$emit('emitClose2')">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h3>添加教师</h3>
          <p>输入教师信息，点击添加，添加结束点击完成关闭模态框</p>
        </div>
        <div class="modal-content">
          <div>
            教师姓名：
            <input
              type="text"
              placeholder="请输入教师姓名"
              v-model="addTeacher.name"
              autocomplete="off"
              name="input"
            />
          </div>
          <br />
          <div>
            所在学院：
            <input
              type="text"
              placeholder="请输入教师所在学院"
              v-model="addTeacher.department"
            />
          </div>
          <br />
          <div>
            授课专业：
            <input
              type="text"
              placeholder="请输入教师授课专业"
              v-model="addTeacher.major"
            />
          </div>
          <br />
          <button @click="clear">清除</button>
        </div>

        <div class="modal-content02">
          <div>
            <h3>教师的课程</h3>
            <p style="color:red">添加完成点击清除可继续添加多个课程</p>
            <div>
              已添加课程：
              <span class="courses" v-for="(c, index) of courses" :key="index">
                {{ c.id }}:{{ c.name }} &emsp;
              </span>
            </div>
            <br />
            课程序号：
            <input
              type="text"
              placeholder="请输入课程id"
              v-model="coursesItme.id"
            />
          </div>
          <br />
          <div>
            课程名称：
            <input
              type="text"
              placeholder="请输入课程名称"
              v-model="coursesItme.name"
            />
            <div>
              <br />
              <button @click="clear02">清除</button>
              &emsp;
              <button @click="addCourses">添加</button>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn btn-primary" @click="addItem">
            添加
          </button>
          <button class="btn btn-primary" @click="$emit('emitClose2')">
            完成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref, watch } from "vue";
import { Course, Teacher } from "@/datasource/Types";
import { State } from "@/store";
import { Store, useStore } from "vuex";

export default defineComponent({
  props: {
    teacher: Object as PropType<Teacher>
  },
  setup() {
    const addTeacher: Ref<Teacher> = ref({});
    const store: Store<State> = useStore();
    const coursesItme: Ref<Course> = ref({});
    const courses = computed(() => store.state.courses);
    const teachers = computed(() => store.state.teachers);
    const addItem = () => {
      teachers.value.push({
        id: teachers.value.length + 1,
        name: addTeacher.value.name,
        department: addTeacher.value.department,
        major: addTeacher.value.major,
        courses: store.state.courses
      });
    };
    const addCourses = () => {
      courses.value.push({
        id: coursesItme.value.id,
        name: coursesItme.value.name,
        createTime: new Date()
          .toISOString()
          .replace("T", " ")
          .substring(0, 10)
      });
    };
    const clear = () => {
      addTeacher.value.name = "";
      addTeacher.value.department = "";
      addTeacher.value.major = "";
    };
    const clear02 = () => {
      coursesItme.value.id = undefined;
      coursesItme.value.name = "";
    };
    watch(addTeacher, (newValue, oldValue) => {
      if (addTeacher.value.name == "") alert(`输入内容不可为空`);
    });
    return {
      addItem,
      addTeacher,
      addCourses,
      coursesItme,
      clear,
      clear02,
      courses
    };
  }
});
</script>
<style scoped>
a.btn {
  display: inline-block;
  padding: 5px 10px;
  background: red;
}

.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
}
/* 模态框容器中的对话框，实际显示操作的部分。显式声明宽度，基于margin自动居中 */
.modal .modal-dialog {
  width: 450px;
  margin: auto;
  background: white;
  top: 30px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* 加条下线，作为分割线 */
.modal .modal-header {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

/*改变文字大小*/
.modal .modal-dialog .modal-content {
  padding: 30px 15px 12px 15px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}
.modal .modal-dialog .modal-content02 {
  padding: 0px 15px 12px 15px;
  border-bottom: 1px solid #e5e5e5;
  position: relative;
}
.modal .modal-dialog .modal-footer {
  text-align: right;
  padding: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 10px;
  margin: 2px;
  color: white;
  background: gray;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
}
.btn-primary {
  background: rgb(160, 187, 194);
}
.courses {
  color: rgb(31, 16, 236);
}
</style>
