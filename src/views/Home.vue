<template>
  <div class="home">
    <Header />
    <layout-build-plan />
  </div>
</template>

<script>
import Header from "../components/layout/LayoutHeader.vue";
import LayoutBuildPlan from "../components/layout/LayoutBuildPlan.vue";
export default {
  name: "Home",
  components: {
    Header,
    LayoutBuildPlan
  },
};
</script>

<style lang="scss" scoped>

</style>
