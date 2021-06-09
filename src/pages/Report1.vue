<template>
  <div class="wrapper">
    <h1>과제 1. 카드 UI</h1>
    <ul class="frame">
      <col-card
        :card="item"
        v-for="(item, index) in list"
        :key="index"
      ></col-card>
    </ul>
    <hr />

    <ul class="frame">
      <raw-card
        :card="item"
        v-for="(item, index) in list"
        :key="index"
      ></raw-card>
    </ul>
  </div>
</template>

<script>
import ColCard from "@/components/ColCard";
import RawCard from "@/components/RawCard";

export default {
  name: "Report1",
  components: { ColCard, RawCard },
  data() {
    return {
      list: [
        {
          id: 1,
          imgUrl: "/static/images/bread.png",
          label: "Card Label",
          title: "맛있는 빵 입니다.",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: true,
          point: 5,
          review: " 목막히는 식감 굳👍🏻.. 포슬포슬 너무 맛있어요 ",
          author: "류병옥",
          a11y: "빵사진 입니다.",
          to:
            "https://www.idus.com/w/product/288106bd-c2c7-4942-a15f-0cfbb8b93b49",
        },
        {
          id: 2,
          imgUrl: "/static/images/egg.png",
          label: "Card Label",
          title: "Card Title",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: true,
          point: 4,
          review: "",
          author: "버그킹",
          a11y: "맥반석 계란",
          to:
            "https://www.idus.com/w/product/288106bd-c2c7-4942-a15f-0cfbb8b93b49",
        },
        {
          id: 3,
          imgUrl: "/static/images/eggtart.png",
          label: "Card Label",
          title: "Card Title",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: false,
          point: null,
          review: "",
          author: "주니어",
          a11y: "에그타르트",
          to:
            "https://www.idus.com/w/product/bbd56d61-41d0-4678-9c71-ea44320e243f?keyword_channel=user&search_word=%EC%97%90%EA%B7%B8%ED%83%80%EB%A5%B4%ED%8A%B8",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@/assets/scss/report1.scss";
</style>
