<template>
  <li class="type2">
    <div class="card">
      <!-- 카드영역 -->
      <div class="card-img" :style="backgroundImg"></div>

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
.bar {
  color: #999;
  vertical-align: middle;
  margin: 0 3px;
}
// 카드타입2
li.type2 {
  width: 48%;
  margin: 1%;
  display: inline-block;
  .card {
    display: table;
    border: 1px solid #d9d9d9;
    width: 100%;
    &-img {
      display: table-cell;
      background-image: url("/static/images/bread.png");
      width: 50%;
      padding-bottom: 50%;
      background-size: contain;
      background-repeat: no-repeat;
    }
    &-content {
      display: table-cell;
      vertical-align: top;
      width: 50%;
      //   min-width: 215px;
      position: relative;
      .content-wrapper {
        padding: 0 20px;
        .card-text {
          .review {
            color: #666;
            display: block;
            display: -webkit-box;
            font-size: 12px;
            line-height: 1.5;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
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
          }
        }
        .card-meta {
          position: absolute;
          bottom: 10px;

          .author {
            color: #999;
            font-size: 12px;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
//  모바일 태블릿
@media (max-width: 768px) {
  li.type2 {
    width: 100%;
  }
}
</style>
