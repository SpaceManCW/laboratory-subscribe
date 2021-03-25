<template>
  <div>
    <p>
      <b>一定在router配置声明启用props支持，否则无法获取数据。</b>
      <br />
      在vue props属性中声明同名变量，声明类型。
      <br />
      props可作为参数直接注入到setup()函数中使用
    </p>
    studentID: {{ sid }}
    <br />
    homeworksID: {{ hid }}
    <br />
    从setup()中获取studentID: {{ sidR }}
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    sid: String,
    hid: String
  },
  setup(props) {
    const sidR = ref(props.sid);
    console.log(sidR);
    return {
      sidR
    };
  }
});
</script>
