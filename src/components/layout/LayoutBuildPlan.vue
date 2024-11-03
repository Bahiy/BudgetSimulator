<template>
  <div class="content-wrapper">
    <main class="main-content">
      <h2 class="h2-hub mb-4">Monte seu plano</h2>
      <h4 class="h4-hub mb-4">Selecione a quantidade de clientes</h4>

      <layout-slider />
      <selected-card
        v-if="store.monitorSelected"
        :logoSrc="monitorHubLogo"
        title="Gerencie pendências fiscais da emissão ao rastreio de envio"
      />

      <ProductCard
        v-else
        :logoSrc="monitorHubLogo"
        logoAlt="MonitorHub"
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

      <selected-card
        v-if="store.connectSelected"
        :logoSrc="ConnectHubLogo"
        title="Gerencie pendências fiscais da emissão ao rastreio de envio"
      />
      <ProductCard
        v-else
        :logoSrc="ConnectHubLogo"
        logoAlt="ConnectHub"
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
            title: '10 GB',
            description: ' de armazenamento para arquivos',
          },
        ]"
        :imageSrc="ConnectHubImage"
        imageAlt="ConnectHub"
        :price="store.connecthubFinalPrice"
        buttonText="Adicionar ao plano"
      />
      <selected-card
        v-if="store.xmlSelected"
        :logoSrc="XmlHubLogo"
        title="Gerencie pendências fiscais da emissão ao rastreio de envio"
      />
      <ProductCard
        v-else
        :logoSrc="XmlHubLogo"
        logoAlt="xmlHub"
        title="Busca de XMLs com segurança e relatórios dinâmicos"
        :features="[
          {
            title: 'Busca automática de',
            description: 'NF-e, CT-e*, CF-e SP*',
          },
          {
            title: 'Monitoramento de notas faltantes',
            description: 'por série',
          },
          {
            title: 'XMLCloud para',
            description: '800.000 XMLs/mês',
          },
          {
            title: 'Relatório dinâmico',
            description: 'para empresas/contador',
          },
          {
            title: 'Proteção de manifestação automática',
            description: 'para empresas',
          },
          {
            title: 'Busca automatizada',
            description: 'para 400.000 XMLs/mês',
          },
        ]"
        :imageSrc="XmlHubImage"
        imageAlt="xmlHub"
        :price="store.xmlhubFinalPrice"
        buttonText="Adicionar ao plano"
      />
    </main>
    <LayoutSideBar />
  </div>
</template>

<script>
import LayoutSlider from "./LayoutSlider.vue";
import LayoutSideBar from "./LayoutSideBar.vue";
import ProductCard from "../ProductCard.vue";
import SelectedCard from "../SelectedCard.vue";

import { useStore } from "@/stores/store";

import monitorHubLogo from "@/assets/cards/monitorHubSVG.svg";
import ConnectHubLogo from "@/assets/cards/connectHub.svg";
import XmlHubLogo from "@/assets/cards/xmlhub.svg";

import monitorHubImage from "@/assets/cards/MonitorHub.jpg";
import ConnectHubImage from "@/assets/cards/ConnectHub.jpg";
import XmlHubImage from "@/assets/cards/XMLHub.jpg";

export default {
  components: {
    LayoutSlider,
    ProductCard,
    LayoutSideBar,
    SelectedCard,
  },
  setup() {
    const store = useStore(); // Usa o store
    return { store };
  },
  data() {
    return {
      monitorHubLogo,
      ConnectHubLogo,
      XmlHubLogo,
      monitorHubImage,
      ConnectHubImage,
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
}
</style>
