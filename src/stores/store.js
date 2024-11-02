import { defineStore } from "pinia";

export const useStore = defineStore("pricesStore", {
  state: () => ({
    monitorSelected: false,
    connectSelected: false,
    xmlSelected: false,
    disableRange: false,

    enableCard: false,

    totalClients: 1,
    xmlhubFinalPrice: "67.92",
    connecthubFinalPrice: "38.81",
    monitorhubFinalPrice: "87.33",
  }),
  actions: {
    setRange(range) {
      this.disableRange = range;
    },
    setCard(condition) {
      this.enableCard = condition;
    },

    setSelectedPlan(
      xmlhub = this.xmlSelected,
      monitorhub = this.monitorSelected,
      connecthub = this.connectSelected
    ) {
      this.xmlSelected = xmlhub;
      this.monitorSelected = monitorhub;
      this.connectSelected = connecthub;
    },
    setPrices(
      clients = this.totalClients,
      xmlhub = this.xmlhubFinalPrice,
      monitorhub = this.monitorhubFinalPrice,
      connecthub = this.connecthubFinalPrice
    ) {
      this.totalClients = clients;
      this.xmlhubFinalPrice = xmlhub;
      this.monitorhubFinalPrice = monitorhub;
      this.connecthubFinalPrice = connecthub;
    },
  },
});
