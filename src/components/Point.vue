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
@import "~@/assets/scss/point.scss";
</style>
