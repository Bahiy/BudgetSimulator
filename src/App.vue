<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div class="navigation-sidebar">
          <layout-navigation />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNavigation from "./components/layout/LayoutNavigation.vue";

export default {
  components: { LayoutNavigation },
  name: "App",
};
</script>

<style lang="scss">
#app {
  min-height: 100vh !important;
  color: var(--darker);
  background-color: var(--light);
}
.navigation-sidebar {
  box-sizing: content-box;
  padding: 10px 5px !important;
  position: fixed;
  overflow: hidden auto;
  width: 15rem !important;
  height: 100% !important;
  box-shadow: 0 0 6px 4px rgba(0, 0, 0, 0.171) !important;
}
</style>
