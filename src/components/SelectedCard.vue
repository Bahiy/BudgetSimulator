<template>
  <div :style="bgColor" class="product-card">
    <div class="d-flex flex-row w-100 align-items-center">
      <div class="flex-grow-1">
        <div class="product-card-content flex-grow-1">
          <div class="product-card-data-layout">
            <div class="logo">
              <img :src="logoSrc" :alt="logoAlt" />
            </div>
            <div class="title">{{ title }}</div>
          </div>
        </div>
      </div>
      <div class="added">
        <i :style="iconColor" :class="styling" />
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoSrc: { type: String, required: true },
    logoAlt: { type: String, default: "product-logo" },
    title: { type: String },
    text: { type: String, default: "Adicionado" },
    styling: { type: String, default: "fa fa-check" },
    iconColor: { type: String, default: "color: var(--stroke-heavy-contrast)" },
    bgColor: {
      type: String,
      default:
        "background-image: var(--background-image-deafult); border: 2px solid var(--stroke-heavy-contrast);",
    },
  },
};
</script>

<style scoped lang="scss">
.product-card {
  margin-bottom: 1rem !important;
  display: flex;
  padding: 3rem !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  align-self: stretch;
  border-radius: 1rem;

  .product-card-data-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: min-content;

    .title {
      font-weight: bold;
    }
  }
  .added {
    font-size: 18px;
  }
}
</style>
