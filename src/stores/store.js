import { defineStore } from "pinia";

export const useStore = defineStore("pricesStore", {
  state: () => ({
    monitorSelected: false,
    connectSelected: false,
    xmlSelected: false,
    disableRange: false,
    enableCard: false,
    totalClients: 1,
    xmlhubFinalPrice: 67.92,
    connecthubFinalPrice: 38.81,
    monitorhubFinalPrice: 87.33,
  }),
  actions: {
    setRange(range) {
      this.disableRange = range;
    },
    setCard(condition) {
      this.enableCard = condition;
    },
    setSelectedPlan(xmlhub, monitorhub, connecthub) {
      this.xmlSelected = xmlhub;
      this.monitorSelected = monitorhub;
      this.connectSelected = connecthub;
    },
    setPrices(clients, xmlhub, monitorhub, connecthub) {
      this.totalClients = clients;
      this.xmlhubFinalPrice = xmlhub;
      this.monitorhubFinalPrice = monitorhub;
      this.connecthubFinalPrice = connecthub;
    },
  },
  getters: {
    totalPrice() {
      let total = 0;

      if (this.monitorSelected) total += parseFloat(this.monitorhubFinalPrice);
      if (this.connectSelected) total += parseFloat(this.connecthubFinalPrice);
      if (this.xmlSelected) total += parseFloat(this.xmlhubFinalPrice);

      return total.toFixed(2).toString(); // Retorna como string para o v-money-format
    },
  },
});
