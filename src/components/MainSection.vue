<template>
  <div class="main-section mb-12">
    <div class="position-bogota white--text title font-weight-bold">
      <v-icon x-small color="white">fas fa-map-marker-alt</v-icon> Bogotá
      <br />
      Colombia
    </div>
    <div class="corner-left-bottom">
      <weather-card
        :temp="collaboratorsLocation.temp"
        :name="collaboratorsLocation.name"
        :main="collaboratorsLocation.main"
        :sys="collaboratorsLocation.sys"
        :weather="collaboratorsLocation.weather"
        :wind="collaboratorsLocation.wind"
      ></weather-card>
    </div>
  </div>
</template>

<script>
import WeatherCard from "./WeatherCard.vue";
export default {
  components: { WeatherCard },
  props: {
    collaboratorsLocation: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss">
.main-section {
  height: 40%;
  width: 100%;
  border-radius: 25px;
  position: relative;
  background-image: url("../assets/bogota.png");
  background-size: cover;
}
.position-bogota {
  position: absolute !important;
  top: 50px !important;
  left: 100px !important;
  margin-right: 20px;
  min-width: 200px;
}

.corner-left-bottom {
  position: absolute !important;
  bottom: -20px !important;
  right: 0 !important;
  margin-right: 20px;
  min-width: 200px;
}

@media only screen and (max-width: 600px) {
  .corner-left-bottom {
    margin-right: 0px;
  }
  .main-section {
    height: 30%;
  }
}
</style>
