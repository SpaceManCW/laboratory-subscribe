<template>
  <div>
    <!-- <div class="modal" @click="$emit('emitClose', courseR.name)"> -->
    <div class="modal" @click="$emit('emitClose')">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h3>添加实验室</h3>
          <p>输入实验室信息，点击添加，添加结束点击完成</p>
        </div>
        <div class="modal-content">
          <div>
            实验室机器数量：
            <input
              type="text"
              placeholder="请输入数字"
              v-model="addLab.machines"
            />
          </div>
          <br />
          <div>
            实验室具体地点：
            <input
              type="text"
              placeholder="请输入地点"
              v-model="addLab.address"
            />
          </div>
          <br />
          实验室设备描述：
          <div>
            <!--
            <input class="btn02" type="text" v-model="addLab.describe" />
           -->
            <textarea class="btn02" v-model="addLab.describe" />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" @click="addItem">
            添加
          </button>
          <button class="btn btn-primary" @click="$emit('emitClose')">
            完成
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType, Ref, ref } from "vue";
import { Lab } from "@/datasource/Types";
import { State } from "@/store";
import { Store, useStore } from "vuex";

export default defineComponent({
  props: {
    lab: Object as PropType<Lab>
  },
  setup() {
    const addLab: Ref<Lab> = ref({});
    const store: Store<State> = useStore();
    const labs = computed(() => store.state.labs);
    const addItem = () => {
      labs.value.push({
        id: labs.value.length + 1,
        machines: addLab.value.machines,
        describe: addLab.value.describe,
        address: addLab.value.address
      });
    };
    return {
      addItem,
      addLab
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
.btn02 {
  width: 270px;
  height: 100px;
  left: 132px;
  resize: none;
  bottom: 18px;
  position: relative;
}
</style>
