<template>
  <span class="dot-wrapper">
    <div v-for="i in 5" :key="i" class="dot" :class="activeDot(i)"></div>
  </span>
</template>

<script>
export default {
  name: "Dot",
  props: {
    point: Number,
  },
  computed: {
    activeDot: function() {
      return function(i) {
        return i <= this.point ? "on" : "off";
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.dot-wrapper {
  padding: 6px 0;
  height: 20px;
  line-height: 20px;
  .dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid #999;
    margin: 2px;
    vertical-align: top;
    &.on {
      background-color: #ffc801;
    }
    &.off {
      background-color: #d9d9d9;
    }
  }
}
</style>
