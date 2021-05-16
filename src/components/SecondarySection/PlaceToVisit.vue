<template>
  <div class="fill-height">
    <section-header strong="Place to" thin="Visit"></section-header>
    <v-img
      class="rounded-xl"
      max-height="300px"
      gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.6)"
      src="../../assets/san-andres.jpg"
    >
      <div class="ml-12 mt-12 white--text title font-weight-bold">
        <v-icon x-small color="white">fas fa-map-marker-alt</v-icon> San Andres
        <br />
        Colombia
      </div>

      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-row> </template
    ></v-img>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
export default {
  name: "PlaceToVisit",
  components: { SectionHeader },
};
</script>

<style></style>
