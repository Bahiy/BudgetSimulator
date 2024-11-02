<template>
  <div class="slider">
    <vue-slider
      :disabled="planSelected"
      :tooltip="'none'"
      :height="'1rem'"
      :adsorb="true"
      :dotSize="25"
      :contained="true"
      v-model="value"
      :data="clientNumbers"
      @change="emitPrices"
    />
    <div class="h2-hub total">{{ value }} Clientes</div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import { usePricesStore } from "@/stores/store"; // Importa o store

export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      planSelected: false,
      value: 1,
      clientNumbers: [
        1, 2, 3, 4, 5, 10, 20, 30, 50, 80, 100, 150, 200, 250, 300, 350, 400,
        450, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600,
        1700, 1800, 1900, 2000,
      ],
      monitorhubPrices: [
        87.33, 71.25, 60.31, 51.63, 45.95, 24.98, 14.45, 10.78, 7.86, 5.63,
        5.03, 4.43, 4.1, 3.83, 3.73, 3.63, 3.51, 3.4, 3.31, 3.29, 3.22, 3.18,
        3.13, 3.1, 3.09, 3.07, 3.04, 3.03, 3.02, 3.02, 3.01, 2.99, 2.98, 2.97,
      ],
      connecthubPrices: [
        38.81, 31.67, 26.8, 22.95, 20.42, 11.1, 6.42, 4.79, 3.49, 2.5, 2.24,
        1.97, 1.82, 1.7, 1.66, 1.61, 1.56, 1.51, 1.47, 1.46, 1.43, 1.41, 1.39,
        1.38, 1.37, 1.36, 1.35, 1.35, 1.34, 1.34, 1.34, 1.33, 1.32, 1.32,
      ],
      xmlhubPrices: [
        67.92, 55.42, 46.91, 40.16, 35.74, 19.43, 11.24, 8.39, 6.11, 4.38, 3.91,
        3.44, 3.19, 2.98, 2.9, 2.82, 2.73, 2.65, 2.58, 2.56, 2.51, 2.47, 2.44,
        2.41, 2.4, 2.39, 2.37, 2.36, 2.35, 2.34, 2.34, 2.32, 2.32, 2.31,
      ],
    };
  },
  setup() {
    const pricesStore = usePricesStore(); // Usa o store
    return { pricesStore };
  },

  created() {
    this.$root.$on("PlanSelected::true", () => {
      this.planSelected = true;
    });
  },
  methods: {
    emitPrices() {
      const clientIndex = this.clientNumbers.indexOf(this.value);
      if (clientIndex !== -1) {
        const xmlhubPrice = (
          this.value * this.xmlhubPrices[clientIndex]
        ).toFixed(2);
        const monitorhubPrice = (
          this.value * this.monitorhubPrices[clientIndex]
        ).toFixed(2);
        const connecthubPrice = (
          this.value * this.connecthubPrices[clientIndex]
        ).toFixed(2);
        const totalClients = this.value;

        // Atualiza os preços no store
        this.pricesStore.setPrices(
          totalClients,
          xmlhubPrice,
          monitorhubPrice,
          connecthubPrice
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.slider {
  margin-bottom: 1rem !important;
  .total {
    margin: 1rem 0 !important;
  }
}
</style>
