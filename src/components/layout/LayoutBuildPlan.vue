<template>
  <div class="content-wrapper">
    <main class="main-content">
      <h2 class="h2-hub mb-4">Monte seu plano</h2>
      <h4 class="h4-hub mb-3">Selecione a quantidade de clientes</h4>
      <layout-slider />
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
export default {
  components: {
    LayoutSlider,
  },
  methods: {
    updateVolume() {
      // Aqui você pode adicionar lógica para ajustar o volume de um elemento de áudio
      console.log("Volume atual:", this.volume);
    },
  },
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  display: flex;
  flex: 1;
  overflow: hidden;
  .main-content {
    margin-left: 16rem !important;
    overflow-y: auto;
    padding: 3rem !important;
    width: 70% !important;
  }
  .sidebar {
    width: 40%;
    max-width: 600px;
    background: var(--surface-primary, #fff);
    border-left: 1px solid var(--stroke-contrast, #e6e6e6);
    padding: 3rem !important;
    align-items: flex-start;
    overflow-y: auto;
  }
}
</style>
