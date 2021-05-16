<template>
  <div>
    <div class="top-corner"></div>
    <div class="side-card-1"><v-img contain :src="weatherIcon"></v-img></div>
    <div class="side-card-2">
      <div class="center-item mt-4 font-weight-bold">
        {{ temp | temp }}<sup>°c</sup>
      </div>
    </div>
  </div>
</template>

<script>
import weatherComputed from "@/mixins/weatherComputed";
export default {
  mixins: [weatherComputed],
  props: {
    temp: {
      type: Number,
      default: 18,
    },

    weather: {
      type: Array,
      default: () => [
        { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
      ],
    },
  },
};
</script>

<style lang="scss">
.side-card-1 {
  position: absolute;
  top: 10%;
  left: 0;
  width: 100px;
  height: 80px;
  z-index: 10;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px !important;
  background-color: #5948ba;
  &:before {
    content: "";
    position: absolute;
    background-color: transparent;
    top: calc(10% - 88px);
    z-index: 11;
    left: 0;
    height: 80px;
    width: 25px;
    border-bottom-left-radius: 50px;
    box-shadow: 0 25px 0 0 #5948ba;
  }
}

@media only screen and (max-width: 600px) {
  .side-card-1 {
    top: 3%;
    height: 80px;
  }
}
.side-card-2 {
  position: absolute;
  font-size: xx-large;
  color: white;
  display: grid;
  top: calc(10% + 45px);
  left: 0;
  width: 100px;
  height: 100px;
  z-index: 9;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px !important;
  background-color: var(--v-primary-base);
  &:before {
    content: "";
    position: absolute;
    background-color: transparent;
    top: calc(10% + 90px);
    z-index: 11;
    left: 0;
    height: 80px;
    width: 25px;
    border-top-left-radius: 50px;
    box-shadow: 0 -25px 0 0 var(--v-primary-base);
  }
}
@media only screen and (max-width: 600px) {
  .side-card-2 {
    top: calc(3% + 45px);
    height: 100px;
  }
}
</style>
