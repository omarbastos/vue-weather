<template>
  <div class="secondary-location">
    <weather-card
      class="mx-auto"
      :temp="collaboratorsLocation.temp"
      :name="collaboratorsLocation.name"
      :main="collaboratorsLocation.main"
      :sys="collaboratorsLocation.sys"
      :weather="collaboratorsLocation.weather"
      :wind="collaboratorsLocation.wind"
    ></weather-card
    ><weather-card
      v-if="enableNewLocation && location"
      class="mt-12 mx-auto"
      :temp="location.temp"
      :name="location.name"
      :main="location.main"
      :sys="location.sys"
      :weather="location.weather"
      :wind="location.wind"
    >
      <template v-slot:button>
        <v-btn fab @click="deleteLocation()" bottom fixed right color="error"
          ><v-icon>fas fa-trash-alt</v-icon>
        </v-btn>
      </template>
    </weather-card>

    <div v-else class="mt-8 rounded-xl add-location">
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <div class="d-flex justify-center my-4">
            <v-btn
              v-bind="attrs"
              v-on="on"
              rounded
              depressed
              x-large
              color="secondary"
              class="primary--text text-capitalize"
            >
              Add Location</v-btn
            >
          </div>
        </template>

        <v-card>
          <v-card-title class="headline primary white--text">
            New Location
          </v-card-title>

          <v-card-text>
            <v-autocomplete
              @change="setNewLocation"
              v-model="newLocation"
              :items="locations"
              item-text="city"
              return
              return-object
            ></v-autocomplete>
          </v-card-text>

          <v-divider></v-divider>
        </v-card>
      </v-dialog>

      <v-img class="mt-2" max-height="100" contain src="../../assets/59910.jpg">
      </v-img>
    </div>
  </div>
</template>

<script>
import WeatherCard from "../WeatherCard.vue";

export default {
  name: "PlaceToVisit",
  components: { WeatherCard },
  data() {
    return {
      dialog: false,
      collaboratorsLocation: {},
      location: false,
      newLocation: {},
      locations: [
        { city: "Caracas", countryCode: "ve" },
        { city: "Medellin", countryCode: "co" },
        { city: "New York", countryCode: "us" },
        { city: "Marsella", countryCode: "fr" },
      ],
    };
  },
  computed: {
    enableNewLocation() {
      const isEnable = "city" in this.newLocation;
      return isEnable;
    },
  },
  methods: {
    deleteLocation() {
      this.newLocation = {};
      this.dialog = false;
    },
    async setNewLocation() {
      const apiRequest = new this.$apiService();
      this.dialog = false;
      try {
        this.location = await apiRequest.getLocation(this.newLocation);
      } catch (error) {
        alert(error);
      }
    },
  },
  async created() {
    const apiRequest = new this.$apiService();
    try {
      this.collaboratorsLocation = await apiRequest.getLocation({
        city: "San Cristobal",
        countryCode: "ve",
      });
    } catch (error) {
      alert(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.add-location {
  border-style: dotted;
  border-color: grey;
}
</style>
