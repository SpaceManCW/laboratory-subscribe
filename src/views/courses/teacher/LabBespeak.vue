<template>
  <div class="bodyDiv">
    <div class="headline">
      <div class="caption">实验室预约</div>
      <div class="sel">
        <select>
          <option v-for="(l, index) of labs" :key="index">
            {{ l.address }}
          </option>
        </select>
      </div>
    </div>
    <table id="allTable">
      <tr height="100%">
        <td width="79%">
          <!-- 显示信息的表格 -->
          <table id="tablecontent">
            <sonItem v-for="(l, index) of labs" :key="index" :lab="l" />
          </table>
          <!-- 显示信息的表格 -->
        </td>
        <td width="21%">
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
                  <select class="time">
                    <option v-for="(t, index) in teachers" :key="index">
                      {{ t.name }}
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;课程名称：</td>
                <td>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="请输入课程名称"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;课程人数：</td>
                <td>
                  <input
                    id="number"
                    type="text"
                    name="number"
                    placeholder="请输入正整数"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;备注信息：</td>
                <td>
                  <input
                    id="remark"
                    type="text"
                    name="remark"
                    placeholder="选填"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;预约周次：</td>
                <td>
                  <input id="week" type="number" min="1" max="19" step="1" />
                </td>
              </tr>

              <tr>
                <td align="center" width="32%">&nbsp;星&emsp;&emsp;期：</td>
                <td>
                  <select class="time">
                    <option>日</option>
                    <option>一</option>
                    <option>二</option>
                    <option>三</option>
                    <option>四</option>
                    <option>五</option>
                    <option>六</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td align="center" width="32%">&nbsp;预约时间：</td>
                <td>
                  <select class="time">
                    <optgroup label="上午">
                      <option>1,2节</option>
                      <option>3,4节</option>
                    </optgroup>
                    <optgroup label="下午">
                      <option>5,6节</option>
                      <option>7,8节</option>
                      <option>9,10节</option>
                    </optgroup>
                  </select>
                </td>
              </tr>
            </table>

            <!-- 输入信息的表格 -->
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { State } from "@/store";
import { useStore, Store } from "vuex";
import { LIST_LABS, LIST_TEACHERS } from "@/store/VuexTypes";
import sonItem from "./SonItem01.vue";
export default defineComponent({
  components: { sonItem },
  setup() {
    useStore().dispatch(LIST_LABS);
    useStore().dispatch(LIST_TEACHERS);
    const store: Store<State> = useStore();
    const labs = computed(() => store.state.labs);
    const teachers = computed(() => store.state.teachers);
    return {
      labs,
      teachers
    };
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
  width: 100%;
  height: 12%;
}
.bookingTitle {
  font-size: 1.5rem;
  font-family: "微软雅黑";
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
</style>
