<template>
  <li class="type1">
    <div class="card">
      <!-- 카드영역 -->
      <div class="card-img" :style="backgroundImg"></div>

      <!-- 카드 텍스트 영역 -->
      <div class="card-text">
        <label class="label">{{ card.label }}</label>
        <h4 class="title">{{ card.title }}</h4>
        <span class="hilight">{{ card.hilight }}</span>
        <span class="del">{{ card.crossOut }}</span>
      </div>

      <!-- 별점 영역 -->
      <div class="card-review" v-if="card.isReview">
        <point :point="card.point"></point>
        <span class="review" v-if="card.review">
          {{ card.review }}
        </span>
      </div>
    </div>
  </li>
</template>

<script>
import Point from "@/components/Point";

export default {
  name: "ColCard",
  components: {
    Point,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      backgroundImg: `background-image: url(${this.card.imgUrl})`,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/colCard.scss";
</style>
