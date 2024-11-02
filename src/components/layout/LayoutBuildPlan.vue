<template>
  <div class="content-wrapper">
    <main class="main-content">
      <h2 class="h2-hub mb-4">Monte seu plano</h2>
      <h4 class="h4-hub mb-4">Selecione a quantidade de clientes</h4>

      <layout-slider />

      <ProductCard
        :logoSrc="monitorHubLogo"
        logoAlt="MonitorHub Logo"
        title="Gerencie pendências fiscais da emissão ao rastreio de envio"
        :features="[
          {
            title: 'Busque documentos do e-CAC',
            description: 'e outros sites',
          },
          {
            title: 'Envie guias e pendências',
            description: 'automaticamente aos seus clientes',
          },
          {
            title: 'Cuide de milhares de clientes',
            description: 'com facilidade',
          },
          {
            title: 'Integração connecthub',
            description: 'para disparo WhatsApp',
          },
        ]"
        :imageSrc="monitorHubImage"
        imageAlt="MonitorHub"
        :price="store.monitorhubFinalPrice"
        buttonText="Adicionar ao plano"
      />

      <ProductCard
        :logoSrc="ConnectHubLogo"
        logoAlt="MonitorHub Logo"
        title=" Disparo automático com integração WhatsApp e E-mail "
        :features="[
          {
            title: 'Integração',
            description: 'para enviar PDFs e comunicados',
          },
          {
            title: 'Gerenciamento e armazenamento',
            description: ' de documentos',
          },
          {
            title: 'Inteligência artificial',
            description: ' com reconhecimento de guias automático',
          },
          {
            title: '1 GB',
            description: ' de armazenamento para arquivos',
          },
        ]"
        :imageSrc="ConnectHubImage"
        imageAlt="MonitorHub"
        :price="store.connecthubFinalPrice"
        buttonText="Adicionar ao plano"
      />
      <ProductCard
        :logoSrc="XmlHubLogo"
        logoAlt="MonitorHub Logo"
        title="Gerencie pendências fiscais da emissão ao rastreio de envio"
        :features="[
          {
            title: 'Busque documentos do e-CAC',
            description: 'e outros sites',
          },
          {
            title: 'Envie guias e pendências',
            description: 'automaticamente aos seus clientes',
          },
          {
            title: 'Cuide de milhares de clientes',
            description: 'com facilidade',
          },
          {
            title: 'Integração connecthub',
            description: 'para disparo WhatsApp',
          },
        ]"
        :imageSrc="XmlHubImage"
        imageAlt="MonitorHub"
        :price="store.xmlhubFinalPrice"
        buttonText="Adicionar ao plano"
      />
    </main>
    <aside class="sidebar">
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="d-flex flex-column">
          <h2 class="h2-hub mb-3">Seu plano</h2>

          <div
            class="mb-5"
            style="display: flex; flex-direction: column; gap: 16px"
          >
            <div class="client-badge d-flex flex-row justify-content-between">
              <h2 class="h2-hub mb-0 client-text">600 clientes</h2>
              <div style="display: flex; align-items: center; gap: 8px">
                <h2 class="h2-hub mb-0 client-text light">1 produto</h2>
              </div>
            </div>
            <div class="product-checkout-card">
              <img :src="monitorHubLogo" alt="monitorhub-logo" />
              <div class="inner-container">
                <span
                  class="price"
                  v-money-format="store.monitorhubFinalPrice"
                ></span>
              </div>
            </div>
            <button
              type="button"
              class="w-100 custom-button big custom-button-secondary"
            >
              Limpar carrinho
            </button>
          </div>
          <div class="d-flex flex-row gap-8">
            <p class="p text-color-primary">
              Vamos montar seu plano? Selecione um produto à esquerda.
            </p>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import LayoutSlider from "./LayoutSlider.vue";
import ProductCard from "../ProductCard.vue";

import { useStore } from "@/stores/store";

import monitorHubLogo from "@/assets/cards/monitorHubSVG.svg";
import monitorHubImage from "@/assets/cards/MonitorHub.jpg";
import ConnectHubLogo from "@/assets/cards/connectHub.svg";
import ConnectHubImage from "@/assets/cards/ConnectHub.jpg";
import XmlHubLogo from "@/assets/cards/xmlhub.svg";
import XmlHubImage from "@/assets/cards/XMLHub.jpg";
export default {
  components: {
    LayoutSlider,
    ProductCard,
  },
  setup() {
    const store = useStore(); // Usa o store
    return { store };
  },
  data() {
    return {
      monitorHubLogo,
      monitorHubImage,
      ConnectHubLogo,
      ConnectHubImage,
      XmlHubLogo,
      XmlHubImage,
    };
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: #f2f3f8;
  margin-left: 16rem !important;
  display: flex;
  height: 100vh !important;
  .main-content {
    overflow: auto;
    padding: 3rem !important;
    width: 65% !important;
  }
  .main-content::-webkit-scrollbar {
    text-decoration: none;
  }
  .sidebar {
    width: 40% !important;
    max-width: 600px;
    background: var(--surface-primary, #fff);
    border-left: 1px solid var(--stroke-contrast, #e6e6e6);
    padding: 3rem !important;
    align-items: flex-start;
    overflow-y: auto;
  }
}
</style>
