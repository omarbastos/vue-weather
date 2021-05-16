<template>
  <v-row class="secondary-section">
    <v-col cols="12" md="6" lg="3">
      <three-days-forecast></three-days-forecast
    ></v-col>
    <v-col cols="12" md="6" lg="3"> <place-to-visit></place-to-visit></v-col>
    <v-col cols="12" md="6" lg="3"> <top-reviews></top-reviews></v-col>
    <v-col cols="12" md="6" lg="3">
      <secondary-location></secondary-location
    ></v-col>
  </v-row>
</template>

<script>
import PlaceToVisit from "./PlaceToVisit.vue";
import SecondaryLocation from "./SecondaryLocation.vue";
import ThreeDaysForecast from "./ThreeDaysForecast.vue";
import TopReviews from "./TopReviews.vue";
export default {
  name: "SecondarySection",
  components: {
    ThreeDaysForecast,
    PlaceToVisit,
    TopReviews,
    SecondaryLocation,
  },
};
</script>

<style lang="scss">
.secondary-section {
  min-height: 40%;
}
</style>
