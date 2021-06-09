<template>
  <div>
    <!-- <div class="modal" @click="$emit('emitClose', courseR.name)"> -->
    <div class="modal" @click="$emit('emitClose')">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h3>预约情况</h3>
          <p>输入实验室信息，点击添加，添加结束点击完成</p>
        </div>
        <div class="modal-content">
          <table>
            <thead>
              <tr>
                <th>时间</th>
                <th
                  v-for="(weekNum, weekIndex) in classTableData.courses.length"
                  :key="weekIndex"
                >
                  {{ "周" + digital2Chinese2(weekIndex, "week") }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(lesson, lessonIndex) in classTableData.lessons"
                :key="lessonIndex"
              >
                <td>
                  <p>{{ "第" + digital2Chinese(lessonIndex + 1) + "节" }}</p>
                  <!-- <p class="period">{{ lesson }}</p> -->
                </td>

                <td
                  v-for="(course, courseIndex) in classTableData.courses"
                  :key="courseIndex"
                >
                  {{ classTableData.courses[courseIndex][lessonIndex] || "-" }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <h3>实验室信息:</h3>
          实验室最大容纳人数:&emsp;
          <span class="red">{{ lab.machines }}</span>
          <br />
          实验室描述：&emsp;
          <span class="red">{{ lab.describe }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Lab } from "@/datasource/Types";
export default {
  props: {
    lab: {
      type: Lab
    }
  },
  data() {
    return {
      classTableData: {
        lessons: [
          "08:00-09:00",
          "09:00-10:00",
          "10:00-11:00",
          "11:00-12:00",
          "13:00-14:00"
        ],
        courses: [
          ["空闲", "空闲", "空闲", "空闲", "空闲"],
          ["空闲", "空闲", "已预约", "空闲", "空闲"],
          ["已预约", "空闲", "空闲", "已预约", "空闲"],
          ["已预约", "已预约", "空闲", "空闲", "空闲"],
          ["空闲", "空闲", "已预约", "空闲", "已预约"],
          ["已预约", "空闲", "空闲", "已预约", "空闲"],
          ["空闲", "空闲", "空闲", "已预约", "空闲"]
        ]
      }
    };
  },
  created() {
    // /* mock随机数据*/
    // Mock.mock({
    //     lessons: ['08:00-09:00', '09:00-10:00', '10:00-11:00', '11:00-12:00', '13:00-14:00', '14:00-15:00', '15:00-16:00', '16:00-17:00'],
    //     'courses|7': [['生物', '物理', '化学', '政治', '历史', '英语', '', '语文']]
    // });
  },
  methods: {
    /**
     * 数字转中文
     * @param {Number} num 需要转换的数字
     * @param {String} identifier 标识符
     * @returns {String} 转换后的中文
     */
    digital2Chinese(num, identifier) {
      const character = ["0", "1,2", "3,4", "5,6", "7,8", "9,10"];
      return identifier === "week" && (num === 0 || num === 7)
        ? "日"
        : character[num];
    },
    digital2Chinese2(num, identifier) {
      const character = ["零", "一", "二", "三", "四", "五", "六"];
      return identifier === "week" && (num === 0 || num === 7)
        ? "日"
        : character[num];
    }
  }
};
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
  width: 650px;
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
.modal .modal-dialog .modal-footer {
  /* text-align: right; */
  padding: 15px 15px 30px 15px;
}
/* 表格样式 */
table {
  table-layout: fixed;
  width: 100%;
}

table thead {
  background-color: #67a1ff;
}

table thead th {
  color: #fff;
  line-height: 15px;
  font-weight: normal;
}

table tbody {
  background-color: #eaf2ff;
}

table tbody td {
  color: #677998;
  line-height: 5px;
}

table th,
td {
  width: 20px;
  padding: 12px 2px;
  font-size: 12px;
  text-align: center;
}

tr td:first-child {
  color: #333;
}
tr td:first-child.period {
  font-size: 8px;
}
.red {
  color: red;
}
</style>
