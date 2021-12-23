<template>
  <div class="bodyDiv">
    <div class="headline">
      <div class="caption">实验室预约</div>
    </div>
    <table id="allTable">
      <tr height="100%">
        <td width="75%">
          <!-- 显示信息的表格 -->
          <table id="tablecontent">
            <!-- 最上面的星期栏 -->
            <thead text-align: center>
              <tr>
                <th>时间</th>
                <th
                  v-for="(weekNum, weekIndex) in classTableData.weekId.length"
                  :key="weekIndex"
                >
                  {{ "周" + digital2Chinese2(weekIndex, "week") }}
                </th>
              </tr>
            </thead>
            <!-- 最上面的星期栏 -->
            <tbody>
              <!-- 循环行，一共有5行 -->
              <tr v-for="(lessonId, lId) in classTableData.lessonId" :key="lId">
                <!-- 循环行 -->

                <!-- 第一列是课程的节 -->
                <td align="center">
                  <p>{{ "第" + digital2Chinese(lId + 1) + "节" }}</p>
                </td>
                <!-- 第一列是课程的节 -->

                <!-- 循环后面的列，显示的是预约按钮 -->
                <td
                  v-for="(ls, wid) in lessonsSelects[lId]"
                  :key="wid"
                  align="center"
                >
                  <button @click="reserve(ls.wid, ls.lid)" :disabled="ls.maybe">
                    选择
                  </button>
                </td>
                <!-- 循环后面的列，显示的是预约按钮 -->
              </tr>
            </tbody>
          </table>
          <!-- 显示信息的表格 -->
        </td>
        <td width="25%">
          <!-- 登记信息的div -->
          <div id="inputbox">
            <!-- 预约申请的标题 -->
            <table id="bookingTable">
              <tr height="100%">
                <td class="bookingTitle" align="center">预约申请</td>
              </tr>
            </table>

            <!-- 预约申请的标题 -->

            <!-- 输入信息的表格 -->
            <table id="inputTable">
              <tr>
                <td align="center" width="32%">预约教师：</td>
                <td>
                  <label class="time">
                    {{ teacher.name }}
                  </label>
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;课程名称：</td>

                <td>
                  <select id="sele" v-model="selectedcourse">
                    <option
                      v-for="(c, cindex) in teacher.courses"
                      :key="cindex"
                      :value="c"
                      :label="c.name"
                    ></option>
                  </select>
                </td>
                &emsp;
                <td>
                  <button @click="sedCourse(selectedcourse.name)">确认</button>
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;课程人数：</td>
                <td>{{ selectedcourse.students }}</td>
              </tr>
              <tr>
                <td align="center" width="32%">
                  &nbsp;实&nbsp;&nbsp;验&nbsp;&nbsp;室：
                </td>
                <td>
                  <select v-model="selectedLab" id="sele">
                    <option
                      v-for="(l, index) of labs"
                      :key="index"
                      :value="l"
                      :label="l.address"
                    ></option>
                  </select>
                </td>
                &emsp;
                <td>
                  <button @click="sedLab(selectedLab.id)">确认</button>
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;容纳人数：</td>
                <td>{{ selectedLab.machines }}</td>
              </tr>
              <!-- 预约周次 -->

              <tr>
                <td align="center" width="32%">&nbsp;预约周次：</td>
                <td>
                  <select v-model="reWeek" id="sele">
                    <option
                      v-for="(wk, windex) of weeks"
                      :key="windex"
                      :disabled="wk.active"
                      :value="wk.id"
                    >
                      第{{ wk.id }}周
                    </option>
                  </select>
                </td>
                &emsp;
                <td>
                  <button @click="sedWeek(reWeek)">确认</button>
                </td>
              </tr>
              <!-- 预约周次 -->
              <tr>
                <td align="center" width="32%">&nbsp;星&emsp;&emsp;期：</td>
                <td>{{ digital2Chinese2(tReRecord.day, "week") }}</td>
              </tr>
              <tr>
                <td align="center" width="32%">
                  &nbsp;时&nbsp;&nbsp;间&nbsp;&nbsp;段：
                </td>
                <td>{{ digital2Chinese(tReRecord.lesson, "week") }}节</td>
              </tr>
            </table>

            <div class="yu">
              <button class="btn" @click="addRecord">预约</button>
            </div>
            <div class="notice">
              <span>
                注意:&nbsp;请先选择星期和时间段，再选择周次
              </span>
            </div>
            {{ tReRecord }}
            <!-- 输入信息的表格 -->
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, Ref, ref, watch } from "vue";
import { State } from "@/store";
import { useStore, Store } from "vuex";
import { ReRecord, Course, Lab } from "@/datasource/Types";
import {
  LIST_LABS,
  LIST_TEACHERS,
  GET_TEACHER,
  LIST_RECORDS
} from "@/store/VuexTypes";
export default defineComponent({
  /**
   * 数字转中文
   * @param {Number} num 需要转换的数字
   * @param {String} identifier 标识符
   * @returns {String} 转换后的中文
   */
  setup() {
    const classTableData = {
      lessonId: ["1,2", "3,4", "5,6", "7,8", "9,10"],
      weekId: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    };
    const weeks = ref([
      { id: 1, active: !true },
      { id: 2, active: !true },
      { id: 3, active: !true },
      { id: 4, active: !true },
      { id: 5, active: !true },
      { id: 6, active: !true },
      { id: 7, active: !true },
      { id: 8, active: !true },
      { id: 9, active: !true },
      { id: 10, active: !true },
      { id: 11, active: !true },
      { id: 12, active: !true },
      { id: 13, active: !true },
      { id: 14, active: !true },
      { id: 15, active: !true },
      { id: 16, active: !true },
      { id: 17, active: !true },
      { id: 18, active: !true }
    ]);
    const lessonsSelects = ref([
      [
        { wid: 0, lid: 1, maybe: !true },
        { wid: 1, lid: 1, maybe: !true },
        { wid: 2, lid: 1, maybe: !true },
        { wid: 3, lid: 1, maybe: !true },
        { wid: 4, lid: 1, maybe: !true },
        { wid: 5, lid: 1, maybe: !true },
        { wid: 6, lid: 1, maybe: !true }
      ],
      [
        { wid: 0, lid: 2, maybe: !true },
        { wid: 1, lid: 2, maybe: !true },
        { wid: 2, lid: 2, maybe: !true },
        { wid: 3, lid: 2, maybe: !true },
        { wid: 4, lid: 2, maybe: !true },
        { wid: 5, lid: 2, maybe: !true },
        { wid: 6, lid: 2, maybe: !true }
      ],
      [
        { wid: 0, lid: 2, maybe: !true },
        { wid: 1, lid: 3, maybe: !true },
        { wid: 2, lid: 3, maybe: !true },
        { wid: 3, lid: 3, maybe: !true },
        { wid: 4, lid: 3, maybe: !true },
        { wid: 5, lid: 3, maybe: !true },
        { wid: 6, lid: 3, maybe: !true }
      ],
      [
        { wid: 0, lid: 4, maybe: !true },
        { wid: 1, lid: 4, maybe: !true },
        { wid: 2, lid: 4, maybe: !true },
        { wid: 3, lid: 4, maybe: !true },
        { wid: 4, lid: 4, maybe: !true },
        { wid: 5, lid: 4, maybe: !true },
        { wid: 6, lid: 4, maybe: !true }
      ],
      [
        { wid: 0, lid: 5, maybe: !true },
        { wid: 1, lid: 5, maybe: !true },
        { wid: 2, lid: 5, maybe: !true },
        { wid: 3, lid: 5, maybe: !true },
        { wid: 4, lid: 5, maybe: !true },
        { wid: 5, lid: 5, maybe: !true },
        { wid: 6, lid: 5, maybe: !true }
      ]
    ]);
    const store: Store<State> = useStore();
    const selectedcourse = ref<Course>({});
    const selectedLab: Ref<Lab> = ref({});
    useStore().dispatch(LIST_LABS);
    useStore().dispatch(LIST_TEACHERS);
    useStore().dispatch(GET_TEACHER);
    useStore().dispatch(LIST_RECORDS);
    const labs = computed(() => store.state.labs);
    const teacher = computed(() => store.state.teacher);
    const records = computed(() => store.state.reRecords);
    const tReRecord = ref<ReRecord>({
      tid: teacher.value.id
    });
    const reWeek = ref<number>();
    const reLab = ref<number>();
    const sedCourse = (cName: string) => {
      tReRecord.value.courseName = cName;
    };
    const sedLab = (shiyan: number) => {
      tReRecord.value.lid = shiyan;
      reLab.value = shiyan;
      watch(reLab, () => {
        lessonsSelects.value.forEach(l => {
          l.forEach(ll => {
            ll.maybe = false;
          });
        });
      });
    };
    //这是一个拯救整个系统的函数
    const sedWeek = (zhou: number) => {
      tReRecord.value.week = zhou;
      const newRecord = records.value;
      lessonsSelects.value.forEach(l => {
        l.forEach(ll => {
          newRecord
            .filter(r => r.week == zhou && r.lid == reLab.value)
            .forEach(rr => {
              if (ll.wid == rr.day && ll.lid == rr.lesson) {
                ll.maybe = true;
              }
            });
        });
      });
      watch(reWeek, () => {
        lessonsSelects.value.forEach(l => {
          l.forEach(ll => {
            ll.maybe = false;
          });
        });
      });
    };
    const reserve = (w: number, s: number) => {
      tReRecord.value.day = w;
      tReRecord.value.lesson = s;
    };
    // const addRecord = () => {};
    return {
      labs,
      teacher,
      weeks,
      classTableData,
      selectedcourse,
      selectedLab,
      reserve,
      tReRecord,
      records,
      reWeek,
      lessonsSelects,
      sedWeek,
      sedLab,
      sedCourse
      // addRecord
    };
  },
  methods: {
    /**
     * 数字转中文
     * @param {Number} num 需要转换的数字
     * @param {String} identifier 标识符
     * @returns {String} 转换后的中文
     */
    digital2Chinese(num: number, identifier: string) {
      const character = ["0", "1,2", "3,4", "5,6", "7,8", "9,10"];
      return identifier === "week" && (num === 0 || num === 7)
        ? "日"
        : character[num];
    },
    digital2Chinese2(num: number, identifier: string) {
      const character = ["零", "一", "二", "三", "四", "五", "六"];
      return identifier === "week" && (num === 0 || num === 7)
        ? "日"
        : character[num];
    }
  }
});
</script>
<style scoped>
.bodyDiv {
  border: solid 1px #bbb;
  background-color: white;
  padding: 0px 10px;
  overflow: "auto";
}
.headline {
  height: 5%;
  line-height: 200%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
}
.caption {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-left: 4px;
}
.sel {
  margin-left: 4px;
}
#allTable {
  width: 100%;
  height: 90%;
}
#tablecontent {
  height: 100%;
  width: 99%;
  font-size: 0.9rem;
  border: solid #bbb;
  /* cellspacing: 0px;
  cellpadding: 0px; */
  border-width: 1px 0px 0px 1px;
}
#inputbox {
  width: 99%;
  height: 100%;
  font-size: 0.9rem;
  font-family: "微软雅黑";
  border: solid 1px #bbb;
}
#bookingTable {
  padding-top: 40px;
  width: 100%;
  height: 12%;
}
.bookingTitle {
  font-size: 1.5rem;
  font-family: "微软雅黑";
  padding-bottom: 20px;
}
#tablecontent {
  height: 100%;
  width: 99%;
  font-size: 0.9rem;
  border: solid #bbb;
  /* cellspacing: 0px;
  cellpadding: 0px; */
  border-width: 1px 0px 0px 1px;
}

#tablecontent td {
  border: solid #bbb;
  border-width: 0px 1px 1px 0px;
}
#inputTable {
  width: 100%;
  font-size: 0.9rem;
}

#inputTable tr {
  height: 42px;
}
#labelTable {
  width: 100%;
  font-size: 0.9rem;
}

#labelTable tr {
  height: 42px;
}
#week {
  width: 75px;
  height: 15px;
}
.time {
  width: 83px;
  height: 20px;
}
/* 表格样式 */
table {
  table-layout: fixed;
  width: 100%;
}

table thead {
  background-color: rgb(74, 82, 72);
}

table thead th {
  color: #fff;
  line-height: 45px;
  font-weight: normal;
}

table tbody {
  background-color: #f1f1f1;
}

table tbody td {
  color: #677998;
  line-height: 5px;
}

tr td:first-child {
  color: #333;
}
tr td:first-child.period {
  font-size: 8px;
}
.yu {
  padding: 20px 44px 10px 44px;
}
.btn {
  padding: 7px;
  position: relative;
  left: 20px;
  width: 200px;
}
.notice {
  margin: 50px 10px 0px 20px;
  color: red;
}
#sele {
  width: 100px;
  height: 25px;
}
</style>
