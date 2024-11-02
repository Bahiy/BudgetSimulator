import { defineStore } from "pinia";

export const usePricesStore = defineStore("pricesStore", {
  state: () => ({
    planSelected: false,
    totalClients: 1,
    xmlhubFinalPrice: "67.92",
    connecthubFinalPrice: "38.81",
    monitorhubFinalPrice: "87.33",
  }),
  actions: {
    setSelectedPlan(plan) {
      this.planSelected = plan;
    },
    setPrices(clients, xmlhub, monitorhub, connecthub) {
      this.totalClients = clients;
      this.xmlhubFinalPrice = xmlhub;
      this.monitorhubFinalPrice = monitorhub;
      this.connecthubFinalPrice = connecthub;
    },
  },
});
