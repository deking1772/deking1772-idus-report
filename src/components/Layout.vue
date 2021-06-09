<template>
  <div>
    <router-link to="/report1" ref="skipLink">
      <button>과제1</button>
    </router-link>

    <router-link to="/report2" ref="skipLink">
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
