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
li.type1 {
  width: 25%;
  display: inline-block;
  vertical-align: top;
  // 카드타입 1
  .card {
    border: 1px solid #d9d9d9;
    margin: 5px;
    &-img {
      width: 100%;
      padding-bottom: 100%;
      background-size: contain;
      background-repeat: no-repeat;
    }

    .card-text {
      padding: 5px;
      .label {
        display: block;
        height: 15px;
        font-size: 12px;
        color: #999;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-bottom: 4px;
      }
      .title {
        color: #333;
        display: block;
        display: -webkit-box;
        height: 42px;
        font-size: 14px;
        line-height: 1.5;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0;
      }
      .hilight {
        color: #ff7b30;
        font-size: 12px;
      }
      .del {
        text-decoration: line-through;
        color: inherit;
        font-size: 10px;
        color: #999;
        vertical-align: bottom;
        margin: 0 5px;
      }
    }
    .card-review {
      padding: 5px;
      min-height: 45px;
      border-top: 1px solid #d9d9d9;

      .review {
        color: #666;
        display: block;
        display: -webkit-box;
        height: 18px;
        font-size: 12px;
        line-height: 1.5;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

//  모바일 태블릿
@media (max-width: 768px) {
  li.type1 {
    width: 50%;
  }
}
</style>
