<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">

        <div class="col">
          <layout-navigation />
        </div>

        <div class="col-9">
          <router-view />
        </div>
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
  min-height: 100vh;
  color: var(--darker);
  background-color: var(--light);
}
</style>
