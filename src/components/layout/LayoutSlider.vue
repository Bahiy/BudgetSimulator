<template>
  <div>
    <div
      class="w-100 mb-3 vue-slider vue-slider-ltr"
      :style="{ padding: '7px 0', width: 'auto', height: '4px' }"
    >
      <div class="vue-slider-rail" @mousedown="onMouseDown">
        <div class="vue-slider-process" :style="processStyle"></div>
        <div class="vue-slider-marks">
          <div
            v-for="mark in marks"
            :key="mark.value"
            :class="[
              'vue-slider-mark',
              { 'vue-slider-mark-active': mark.value === value },
            ]"
            :style="{ height: '100%', width: '4px', left: mark.left }"
          >
            <div
              :class="[
                'vue-slider-mark-step',
                { 'vue-slider-mark-step-active': mark.value === value },
              ]"
            ></div>
            <div
              :class="[
                'vue-slider-mark-label',
                { 'vue-slider-mark-label-active': mark.value === value },
              ]"
            ></div>
          </div>
        </div>
        <div
          class="vue-slider-dot vue-slider-dot-hover"
          role="slider"
          :aria-valuenow="value"
          :aria-valuemin="1"
          :aria-valuemax="2000"
          aria-orientation="horizontal"
          tabindex="0"
          :style="dotStyle"
          @mousedown="onMouseDown"
        >
          <div class="vue-slider-dot-handle"></div>
        </div>
      </div>
    </div>
    <div>
      <h2 class="h2-hub mb-0">{{ value }} Clientes</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      dragging: false,
      marks: [
        { value: 1, left: "0%" },
        { value: 2, left: "0.050025%" },
        { value: 3, left: "0.10005%" },
        { value: 4, left: "0.150075%" },
        { value: 5, left: "0.2001%" },
        { value: 10, left: "0.450225%" },
        { value: 20, left: "0.950475%" },
        { value: 30, left: "1.45073%" },
        { value: 50, left: "2.45123%" },
        { value: 80, left: "3.95198%" },
        { value: 100, left: "4.95248%" },
        { value: 150, left: "7.45373%" },
        { value: 200, left: "9.95498%" },
        { value: 250, left: "12.4562%" },
        { value: 300, left: "14.9575%" },
        { value: 350, left: "17.4587%" },
        { value: 400, left: "19.96%" },
        { value: 450, left: "22.4612%" },
        { value: 500, left: "24.9625%" },
        { value: 600, left: "29.965%" },
        { value: 700, left: "34.9675%" },
        { value: 800, left: "39.97%" },
        { value: 900, left: "44.9725%" },
        { value: 1000, left: "49.975%" },
        { value: 1100, left: "54.9775%" },
        { value: 1200, left: "59.98%" },
        { value: 1300, left: "64.9825%" },
        { value: 1400, left: "69.985%" },
        { value: 1500, left: "74.9875%" },
        { value: 1600, left: "79.99%" },
        { value: 1700, left: "84.9925%" },
        { value: 1800, left: "89.995%" },
        { value: 1900, left: "94.9975%" },
        { value: 2000, left: "100%" },
      ],
    };
  },
  computed: {
    processStyle() {
      return {
        height: "100%",
        top: "0px",
        left: "0%",
        width: `${(this.value / 2000) * 100}%`,
      };
    },
    dotStyle() {
      return {
        width: "14px",
        height: "14px",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: `${(this.value / 2000) * 100}%`,
      };
    },
  },
  methods: {
    setValue(newValue) {
      // Limita o valor apenas para os valores dentro dos marks
      const closestMark = this.marks.reduce((prev, curr) =>
        Math.abs(curr.value - newValue) < Math.abs(prev.value - newValue)
          ? curr
          : prev
      );
      this.value = closestMark.value;
    },
    onMouseDown(event) {
      this.dragging = true;
      this.updateValueFromEvent(event);
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseup", this.onMouseUp);
    },
    onMouseMove(event) {
      if (this.dragging) {
        this.updateValueFromEvent(event);
      }
    },
    onMouseUp() {
      this.dragging = false;
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseup", this.onMouseUp);
    },
    updateValueFromEvent(event) {
      const sliderRect = this.$el.getBoundingClientRect();
      const offsetX = event.clientX - sliderRect.left;
      const newValue = Math.round((offsetX / sliderRect.width) * 2000);

      // Aqui, chamamos a função `setValue` para atualizar o valor para o mark mais próximo
      this.setValue(newValue);
    },
  },
};
</script>

<style scoped>
.vue-slider {
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vue-slider-rail {
  position: relative;
  width: 100%;
  background-color: #e9e9e9;
  height: 16px !important;
  border-radius: 1rem;
}
.vue-slider-process {
  z-index: 1;
  padding: 0.8rem;
  position: absolute;
  border-radius: 15px;
  background-color: var(--featured-light) !important;
  border: 2px solid #fff;
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
}
.vue-slider-dot {
  z-index: 10;
  border-radius: 50%;
  padding: 0.6rem !important;
  background-color: var(--featured-light) !important;
  border: 4px solid #fff;
  box-shadow: 0.5px 0.5px 2px 1px rgba(0, 0, 0, 0.32);
  position: absolute;
  cursor: pointer;
}
.vue-slider-dot-handle {
  background-color: #3b82f6;
  border-radius: 50%;
}
.vue-slider-mark {
  position: absolute;
  text-align: center;
}
.vue-slider-mark-step {
  width: 2px;
  height: 80%;

  background-color: #dfdfdf;
  margin: auto;
}
</style>
