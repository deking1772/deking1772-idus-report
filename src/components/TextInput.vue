<template>
  <div>
    <div class="wrapper">
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
    <button :class="btnClass" :disabled="buttonDisabled">save</button>
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
      return this.data.maxLength - this.content.length;
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
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: fit-content;
  position: relative;
  .text {
    font-size: 12px;
    color: #222222;
    &.readonly {
      color: #d73038;
      background-color: #dddddd;
      border-radius: 4px;
      border: 1px solid #aaaaaa;
    }
  }
  .remain-cnt {
    position: absolute;
    bottom: 5px;
    right: 5px;
  }
  .btn {
    width: 15%;
    border: 1px solid #212529;
    border-radius: 5px;
    &.btn-active {
      font-weight: bold;
      color: #0d6efd;
      border: 1px solid #0d6efd;
      border-radius: 5px;
    }
  }
}
</style>
