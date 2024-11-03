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
            <div class="content">
              <ul class="p text-secondary pl-4">
                <li v-for="(feature, index) in features" :key="index">
                  <span class="p-bold">{{ feature.title }}</span>
                  {{ feature.description }}
                </li>
              </ul>
            </div>
          </div>
          <div class="product-card-img-container">
            <img :src="imageSrc" :alt="imageAlt" width="200px" />
          </div>
        </div>
        <div class="product-card-actions mt-3">
          <span class="price" v-money-format="price.toString()"></span>

          <button
            :disabled="selected"
            type="button"
            class="btn-custom"
            @click="addToPlan"
          >
            <i class="fa fa-plus" /> {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "@/stores/store";
import SelectedCard from "./SelectedCard.vue";

export default {
  name: "ProductCard",

  setup() {
    const store = useStore();
    return { store };
  },

  components: {
    SelectedCard,
  },

  data() {
    return {
      selected: false,
    };
  },
  props: {
    logoSrc: { type: String, required: true },
    logoAlt: { type: String, default: "product-logo" },
    title: { type: String, required: true },
    features: {
      type: Array,
      required: true,
      default: () => [
        { title: "Feature Title", description: "Feature description" },
      ],
    },
    imageSrc: { type: String, required: true },
    imageAlt: { type: String, default: "" },
    price: { type: [Number, String], required: true },
    buttonText: { type: String, default: "Adicionar ao plano" },
  },
  methods: {
    addToPlan() {
      this.selected = true;
      this.store.setRange(true);

      if (this.logoAlt === "MonitorHub") {
        this.store.setSelectedPlan(
          this.store.xmlSelected,
          true,
          this.store.connectSelected
        );
      } else if (this.logoAlt === "ConnectHub") {
        this.store.setSelectedPlan(
          this.store.xmlSelected,
          this.store.monitorSelected,
          true
        );
      } else if (this.logoAlt === "xmlHub") {
        this.store.setSelectedPlan(
          true,
          this.store.monitorSelected,
          this.store.connectSelected
        );
      }
      console.log(typeof this.store.totalPrice);
      console.log(this.store.totalPrice);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  margin-bottom: 3rem !important;
  display: flex;
  padding: 3rem !important;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  align-self: stretch;
  border-radius: 1rem;
  border: 1px solid #cbd5e1;
  background: var(--surface-primary, #fff);

  .product-card-data-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: min-content;

    .title {
      font-weight: bold;
    }

    .content {
      padding: 10px 15px 15px 3rem !important;

      .p-bold {
        font-weight: 600;
      }
    }
  }

  .product-card-content {
    display: flex;
    justify-content: space-between !important;
  }
}
.product-card-actions {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1rem;
}
.price {
  font-weight: 600;
  font-size: 24px;
}
</style>
