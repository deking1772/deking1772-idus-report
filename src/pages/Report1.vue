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
          imgUrl: "/static/images/hanwoo.png",
          label: "Card Label",
          title: "한우 입니다.",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: true,
          point: 5,
          review: "한우 정말맛있어요.",
          author: "류병옥",
          a11y: "한우 입니다.",
          to:
            "https://www.instagram.com/p/CP23z6ClzVU/?utm_source=ig_web_copy_link",
        },
        {
          id: 2,
          imgUrl: "/static/images/mero.png",
          label: "Card Label",
          title: "메로구이 먹어는봤나",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: true,
          point: 4,
          review: "",
          author: "버그킹",
          a11y: "메로구이",
          to:
            "https://www.instagram.com/p/CPxsnLQl-pK/?utm_source=ig_web_copy_link",
        },
        {
          id: 3,
          imgUrl: "/static/images/nakgee.png",
          label: "Card Label",
          title: "무교동 철판 낙지",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: false,
          point: null,
          review: "",
          author: "주니어",
          a11y: "철판낙지",
          to:
            "https://www.instagram.com/p/CP23z6ClzVU/?utm_source=ig_web_copy_link",
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
