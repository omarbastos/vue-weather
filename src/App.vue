<template>
  <v-app>
    <side-card :weather="bogotaLocation.weather" :temp="bogotaTemp"></side-card>
    <v-main class="px-md-12 pa-2">
      <main-section :collaborators-location="collaboratorsLocation" />
      <secondary-section />
    </v-main>
  </v-app>
</template>

<script>
import MainSection from "./components/MainSection.vue";
import SideCard from "./components/SideCard.vue";
import SecondarySection from "./components/SecondarySection/Index.vue";
export default {
  name: "App",

  components: {
    MainSection,
    SideCard,
    SecondarySection,
  },

  data: () => ({
    collaboratorsLocation: {},
    bogotaLocation: {},
  }),
  computed: {
    bogotaTemp() {
      return this.bogotaLocation?.main?.temp;
    },
  },
  async created() {
    const apiRequest = new this.$apiService();
    try {
      this.bogotaLocation = await apiRequest.getLocation({
        city: "Bogotá",
        countryCode: "co",
      });
      this.collaboratorsLocation = await apiRequest.getLocation({
        city: "Paris",
        countryCode: "fr",
      });
    } catch (error) {
      alert(error);
    }
  },
};
</script>

<style lang="scss">
// Import the Vuetify styles somewhere global
@import "~vuetify/src/styles/styles.sass";
.inspector {
  border: 1px solid red;
}
.wrapper {
  height: 100vh;
}
html,
body {
  overflow-x: hidden !important;
}
</style>
