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
          title: "Card Title",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: true,
          point: 5,
          review: " 목막히는 식감 굳👍🏻.. 포슬포슬 너무 맛있어요 ",
          author: "류병옥",
        },
        {
          id: 2,
          imgUrl: "/static/images/bread.png",
          label: "Card Label",
          title: "Card Title",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: true,
          point: 4,
          review: "",
          author: "버그킹",
        },
        {
          id: 3,
          imgUrl: "/static/images/bread.png",
          label: "Card Label",
          title: "Card Title",
          hilight: "Hilight",
          crossOut: "CrossOut",
          isReview: false,
          point: null,
          review: "",
          author: "주니어",
        },
      ],
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.frame {
  text-align: left;
  width: 100%;
  list-style: none;
  padding: 0;
}
</style>
