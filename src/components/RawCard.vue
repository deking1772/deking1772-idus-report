<template>
  <li class="type2">
    <a :href="card.to" target="_blank">
      <div class="card">
        <!-- 카드영역 -->
        <div class="card-img" :style="backgroundImg">
          <span class="sr_only">{{ card.a11y }}</span>
        </div>

        <!-- 카드 텍스트 영역 -->
        <div class="card-content">
          <div class="content-wrapper">
            <div class="card-text">
              <h4 class="title">{{ card.title }}</h4>
              <p class="review" v-if="card.review">
                {{ card.review }}
              </p>
            </div>
            <div class="card-meta" v-if="card.isReview">
              <point :point="card.point"></point>
              <span class="bar">|</span>

              <span class="author">
                류병옥
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
import Point from "@/components/Point";

export default {
  name: "RawCard",
  components: { Point },
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
@import "~@/assets/scss/rawCard.scss";
</style>
