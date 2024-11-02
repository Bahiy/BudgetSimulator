<template>
  <div class="product-card">
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
        <i style="color: var(--stroke-heavy-contrast)" class="fa fa-check" />
        Adicionado
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logoSrc: { type: String, required: true },
    logoAlt: { type: String, default: "product-logo" },
    title: { type: String, required: true },
  },
};
</script>

<style scoped lang="scss">
.product-card {
  margin-bottom: 3rem !important;
  display: flex;
  padding: 3rem !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 2px solid var(--stroke-heavy-contrast, #cbd5e1) !important;
  background-image: linear-gradient(
    290deg,
    #c0f2e4,
    #c5f2e6 14%,
    #cdf4ea 24%,
    #d1f5eb 31%,
    #d9f7ef 37%,
    #def8f0 43%,
    #e6f9f5 50%,
    #eafbf7 57%,
    #f3fcf9 65%,
    #fbfefd 77%,
    #fff
  ) !important;

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
