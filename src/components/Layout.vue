<template>
  <div>
    <router-link to="/report1">
      <button>과제1</button>
    </router-link>

    <router-link to="/report2">
      <button>과제2</button>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Layout",
};
</script>
