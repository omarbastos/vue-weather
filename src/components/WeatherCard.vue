<template>
  <div class="grid-container elevation-12">
    <div class="weather-temp">
      <div class="center-item large-text single-line">
        {{ main.temp | temp }}<span class="text--disabled"><sup>°c</sup></span>
        <span class="text--disabled font-weight-thin"> |</span>
      </div>
    </div>
    <div class="weather-location">
      <div class="center-item title">
        <div class="font-weight-bold">{{ name }}</div>
        <div class="font-weight-bold">
          <sup>{{ sys.country }}</sup>
        </div>
      </div>
    </div>
    <div class="weather-humidity">
      <div class="center-item text--disabled caption">
        Humidity {{ main.humidity }} %
        <span class="text--disabled font-weight-thin"> |</span>
      </div>
    </div>
    <div class="weather-direction">
      <div
        class="center-item text--disabled caption single-line text-capitalize"
      >
        {{ description }}
        <span class="text--disabled font-weight-thin"> |</span>
      </div>
    </div>
    <div class="weather-icon">
      <v-img
        class="item-x2 secondary border-18"
        contain
        :src="weatherIcon"
      ></v-img>
    </div>
    <div class="weather-speed">
      <div class="center-item text--disabled caption">
        {{ wind.speed }} km/h
      </div>
    </div>
    <slot name="button"></slot>
  </div>
</template>

<script>
import weatherComputed from "@/mixins/weatherComputed";
export default {
  props: {
    temp: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: "Bogotá",
    },
    sys: {
      type: Object,
      default: () => ({ country: "CO" }),
    },
    main: {
      type: Object,
      default: () => ({ temp: 15, humidity: 82 }),
    },
    weather: {
      type: Array,
      default: () => [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
    },
    wind: {
      type: Object,
      default: () => ({ deg: 30, speed: 3.09 }),
    },
  },
  mixins: [weatherComputed],
};
</script>

<style lang="scss">
.grid-container {
  display: grid;
  border-radius: 18px !important;
  width: 300 !important;
  max-height: 210px;
  max-width: 300px;
  min-width: 300px;
  grid-template-columns: 1.5fr 1.5fr 1.5fr;
  grid-template-rows: 1fr 0.3fr;
  gap: 0% 2%;
  background-color: white;
}
.large-text {
  font-size: xx-large;
  font-weight: bold;
}
.single-line {
  overflow: hidden;
  white-space: nowrap;
}

.weather-temp {
  grid-area: 1 / 2 / 2 / 3;
  display: grid;
}

.weather-location {
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
}

.weather-humidity {
  grid-area: 2 / 1 / 3 / 2;
  display: grid;
}

.weather-direction {
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
}

.weather-icon {
  grid-area: 1 / 1 / 2 / 2;
}

.weather-speed {
  grid-area: 2 / 3 / 3 / 4;
  display: grid;
}

.center-item {
  position: relative;
  z-index: 1;
  justify-self: center;
  align-self: center;
}
.border-18 {
  border-radius: 18px !important;
}
@media only screen and (max-width: 600px) {
  .grid-container {
    max-height: 150px;
  }
}
</style>
