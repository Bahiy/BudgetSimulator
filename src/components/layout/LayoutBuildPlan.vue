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
        price="R$ 38,81"
        buttonText="Adicionar ao plano"
        @add-to-plan="handleAddToPlan"
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
        price="R$ 87,33"
        buttonText="Adicionar ao plano"
        @add-to-plan="handleAddToPlan"
      />
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
        price="R$ 67,92
"
        buttonText="Adicionar ao plano"
        @add-to-plan="handleAddToPlan"
      />
    </main>
    <aside class="sidebar">
      <div class="d-flex flex-column justify-content-between h-100">
        <div class="d-flex flex-column">
          <h2 class="h2-hub mb-3">Seu plano</h2>
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

import monitorHubLogo from "@/assets/cards/monitorHubSVG.svg";
import monitorHubImage from "@/assets/cards/MonitorHub.jpg";
import ConnectHubLogo from "@/assets/cards/connectHub.svg";
import ConnectHubImage from "@/assets/cards/ConnectHub.jpg";
export default {
  components: {
    LayoutSlider,
    ProductCard,
  },
  data() {
    return {
      monitorHubLogo,
      monitorHubImage,
      ConnectHubLogo,
      ConnectHubImage,
    };
  },
  methods: {
    updateVolume() {
      // Aqui você pode adicionar lógica para ajustar o volume de um elemento de áudio
      console.log("Volume atual:", this.volume);
    },
    handleAddToPlan() {
      console.log("Produto adicionado ao plano!");
    },
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  background-color: #f2f3f8;
  margin-left: 16rem !important;
  display: flex;
  flex: 1;
  height: 100vh;
  .main-content {
    overflow: hidden auto;
    padding: 3rem !important;
    width: 70% !important;
  }
  .sidebar {
    width: 37.5rem;
    height: 100% !important;
    background: var(--surface-primary, #fff);
    border-left: 1px solid var(--stroke-contrast, #e6e6e6);
    padding: 3rem !important;
    align-items: flex-start;
    overflow-y: auto;
  }
}
</style>
