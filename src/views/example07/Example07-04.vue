<template>
  <div>
    <p>
      通过mapState，获取state指定属性名称的值。
      <br />
      {{ user.name }} / {{ user.address }}
      <br />
    </p>
    <p>
      基于mapGetters辅助函数绑定
      <br />
      <span v-if="premission(1)">用户权限为1显示</span>
      <br />
      <span v-if="premission(2)">用户权限为2显示</span>
    </p>
    <hr />
    <p>
      基于setup()绑定
      <br />
      <span v-if="premissionGetter(1)">用户权限为1显示</span>
      <br />
      <span v-if="premissionGetter(2)">用户权限为2显示</span>
    </p>
  </div>
</template>
<script lang="ts">
import { State } from "@/store";
import { computed, defineComponent } from "vue";
import { mapGetters, mapState, Store, useStore } from "vuex";
import { GETTER_PREMISSION } from "@/store/VuexTypes";

export default defineComponent({
  setup() {
    const store: Store<State> = useStore();
    const premissionGetter = computed(() => store.getters[GETTER_PREMISSION]);
    return {
      premissionGetter
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["premission"])
  }
});
</script>
