<template>
  <div class="wrapper">
    <h1>과제 2. 입력 폼 UI</h1>
    <div class="item-wrapper">
      <h3>default 상태 & 입력중 상태</h3>
      <text-input :data="textData1" />
    </div>
    <div class="item-wrapper">
      <h3>초기값이 있는상태</h3>
      <text-input :data="textData2" />
    </div>
    <div class="item-wrapper">
      <h3>readOnly 상태</h3>
      <text-input :data="textData3" />
    </div>
  </div>
</template>

<script>
import TextInput from "../components/TextInput.vue";

export default {
  name: "Report2",
  components: {
    TextInput,
  },
  data() {
    return {
      textData1: {
        id: 1,
        name: "text1",
        cols: 40,
        rows: 5,
        placeholder: "1. 내용이 있을수도 있습니다.",
        maxLength: 500, // 최대 글자수 설정
        readOnly: false,
        value: "",
      },
      textData2: {
        id: 2,
        name: "text1",
        cols: 40,
        rows: 5,
        placeholder: "2. 내용이 있을수도 있습니다.",
        maxLength: 500, // 최대 글자수 설정
        readOnly: false,
        value: "aaa",
      },
      textData3: {
        id: 3,
        name: "text1",
        cols: 40,
        rows: 5,
        placeholder: "3. 내용이 있을수도 있습니다.",
        maxLength: 500, // 최대 글자수 설정
        readOnly: true,
        value: "읽기전용입니다.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/report2.scss";
</style>
