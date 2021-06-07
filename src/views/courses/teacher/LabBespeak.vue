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
                <td align="center" width="32%">&nbsp;开始时间：</td>
                <td><select id="startTime" name="startTime"></select></td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;结束时间：</td>
                <td><select id="endTime" name="endTime"></select></td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;预&nbsp;约&nbsp;人：</td>
                <td><label id="creator"></label></td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;会议主题：</td>
                <td>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="会议主题"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;部门名称：</td>
                <td>
                  <input
                    id="department"
                    type="text"
                    name="department"
                    placeholder="部门选填"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;参会人数：</td>
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
                <td align="center" width="32%">&nbsp;设备选择：</td>
                <td>
                  <input
                    id="facility1"
                    type="checkbox"
                    name="facility1"
                    value="投影"
                  />
                  投影
                  <input
                    id="facility2"
                    type="checkbox"
                    name="facility2"
                    value="电话"
                  />
                  电话
                  <input
                    id="facility3"
                    type="checkbox"
                    name="facility3"
                    value="视频"
                  />
                  视频
                </td>
              </tr>
              <tr>
                <td align="center" width="32%">&nbsp;是否招待：</td>
                <td>
                  <input
                    id="serviceYes"
                    type="radio"
                    name="service"
                    value="true"
                  />
                  是
                  <input
                    id="serviceNo"
                    type="radio"
                    name="service"
                    value="false"
                  />
                  否
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
import { LIST_LABS } from "@/store/VuexTypes";
import sonItem from "./SonItem01.vue";
export default defineComponent({
  components: { sonItem },
  setup() {
    useStore().dispatch(LIST_LABS);
    const store: Store<State> = useStore();
    const labs = computed(() => store.state.labs);
    return {
      labs
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
</style>
