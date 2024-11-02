import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/scss/app.scss";
import money from "v-money";
import "./utils/directives";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import {createPinia} from "pinia";

const pinia = createPinia();

Vue.use(pinia);

Vue.component("VueSlider", VueSlider);
Vue.use(
  money,
  {
    decimal: ",",
    thousands: ".",
    prefix: "R$ ",
    precision: 2,
  },
  pinia
);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
