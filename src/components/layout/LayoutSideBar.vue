<template>
  <aside class="sidebar">
    <div class="d-flex flex-column justify-content-between teste">
      <div class="d-flex flex-column">
        <h2 class="h2-hub mb-3">Seu plano</h2>

        <div
          class="mb-5"
          style="display: flex; flex-direction: column; gap: 1rem"
          v-if="
            store.monitorSelected || store.connectSelected || store.xmlSelected
          "
        >
          <div class="client-badge d-flex flex-row justify-content-between">
            <h2 class="h2-hub mb-0 client-text">
              {{ store.totalClients }} clientes
            </h2>
            <div style="display: flex; align-items: center; gap: 8px">
              <h2 class="h2-hub mb-0 client-text light">1 produto</h2>
            </div>
          </div>
          <div v-if="store.monitorSelected" class="product-checkout-card">
            <img :src="monitorHubLogo" />
            <div class="inner-container">
              <span
                class="price"
                v-money-format="store.monitorhubFinalPrice"
              ></span>
            </div>
          </div>
          <div v-if="store.connectSelected" class="product-checkout-card">
            <img :src="ConnectHubLogo" />
            <div class="inner-container">
              <span
                class="price"
                v-money-format="store.connecthubFinalPrice"
              ></span>
            </div>
          </div>
          <div v-if="store.xmlSelected" class="product-checkout-card">
            <img :src="XmlHubLogo" />
            <div class="inner-container">
              <span
                class="price"
                v-money-format="store.xmlhubFinalPrice"
              ></span>
            </div>
          </div>
          <button
            type="button"
            class="w-100 big btn-custom btn-custom-secondary btn-reset-cart"
            @click="resetForm"
          >
            Limpar carrinho
          </button>
          <div class="d-flex flex-column align-items-end footer">
            <h2 class="h2-hub">Total</h2>
            <h3 class="h3-hub mb-1">
              <span v-money-format="store.totalPrice"></span>
              por mês
            </h3>
            <div  class="mb-4 text-color-brand-contrast">
              <span v-money-format="store.totalPrice/store.totalClients"></span>
              por cliente
            </div>
          </div>
        </div>
        <div v-else class="d-flex flex-row gap-8">
          <p class="p text-color-primary">
            Vamos montar seu plano? Selecione um produto à esquerda.
          </p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { useStore } from "@/stores/store";

import monitorHubLogo from "@/assets/cards/monitorHubSVG.svg";
import ConnectHubLogo from "@/assets/cards/connectHub.svg";
import XmlHubLogo from "@/assets/cards/xmlhub.svg";

export default {
  setup() {
    const store = useStore();
    return { store };
  },

  data() {
    return {
      monitorHubLogo,
      ConnectHubLogo,
      XmlHubLogo,
    };
  },

  methods: {
    resetForm() {
      this.store.setRange(false);
      this.store.setSelectedPlan(false, false, false);
      this.store.setCard(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  width: 40% !important;
  max-width: 600px;
  background: var(--light);
  border-left: 2px solid #e6e6e6;
  box-shadow: #e6e6e6;
  padding: 3rem !important;
  align-items: flex-start;
  overflow-y: auto;
  .client-badge {
    padding: 0.5rem 0.75rem !important;
    border: 1px solid #e2e8f0;
    background: #f1f5f9;
    border-radius: 0.5rem;
    .client-text {
      font-size: 1rem;
    }
  }
  .product-checkout-card {
    position: relative;
    flex-grow: 1;
    width: 100%;
    display: flex;
    padding: 1rem !important;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--border-radius-normal, 8px);
    border-radius: var(--border-radius-normal, 8px);
    background: var(--surface-brand-heavy-light, #e6fbf5);

    .price {
      font-weight: 600;
    }
  }

}
</style>
