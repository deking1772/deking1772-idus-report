<template>
  <div>
    <div class="text-box">
      <textarea
        :class="textAreaClass(data.readOnly)"
        :name="data.name"
        :cols="data.cols"
        :rows="data.rows"
        :placeholder="data.placeholder"
        :maxlength="data.maxLength"
        v-model="content"
        :readonly="data.readOnly"
      ></textarea>
      <span class="remain-cnt">{{ remainTextCnt }}</span>
    </div>
    <button :class="btnClass" :disabled="buttonDisabled" @click="save">
      save
    </button>
  </div>
</template>

<script>
export default {
  name: "Report2",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      content: this.data.value,
    };
  },
  computed: {
    remainTextCnt: function() {
      let remainCnt = this.data.maxLength - this.content.length;
      if (remainCnt === 0) {
        alert("더이상 작성할 수 없습니다.");
      }
      return remainCnt;
    },
    btnClass: function() {
      let btnClass = "btn";
      if (this.data.value !== this.content && this.content.length > 0) {
        btnClass += " btn-active";
      }
      return btnClass;
    },
    buttonDisabled: function() {
      return this.data.value === this.content || this.content.length === 0;
    },
  },
  methods: {
    textAreaClass: function(readonly) {
      let className = "text";
      if (readonly) {
        className += " readonly";
      }
      return className;
    },
    save: function() {
      alert("저장되었습니다.");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/textInput.scss";
</style>
