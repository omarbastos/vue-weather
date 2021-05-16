<template>
  <div class="fill-height">
    <section-header strong="3 Days " thin="Forecast"></section-header>
    <div v-if="loading">
      <v-skeleton-loader
        v-for="item in 3"
        :key="item"
        type="list-item-avatar-three-line"
      ></v-skeleton-loader>
    </div>
    <div v-else>
      <div class="mb-8" v-for="(day, index) in daily.slice(0, 3)" :key="index">
        <div class="day-forecast elevation-4">
          <div class="grid-icon">
            <v-img
              max-width="75px"
              class="border-18"
              contain
              :src="getWeatherIcon(day.weather)"
            ></v-img>
          </div>
          <div class="grid-day caption text-capitalize">
            {{ getWeakDay(day.dt) }} <br />
            <span class="text--secondary">{{
              getWeatherDescription(day.weather)
            }}</span>
          </div>
          <div
            :class="
              index === 0
                ? 'grid-temp primary white--text'
                : 'grid-temp secondary black--text'
            "
          >
            <div class="centered">
              {{ day.temp.min | temp }}<sup>°c</sup> / {{ day.temp.max | temp
              }}<sup>°c</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeader from "../SectionHeader.vue";
export default {
  components: { SectionHeader },
  name: "ThreeDaysForecast",
  data() {
    return {
      daily: [],
      loading: true,
    };
  },
  computed: {},
  async created() {
    const apiRequest = new this.$apiService();
    try {
      const { daily } = await apiRequest.getForecast({
        city: "Bogotá",
        countryCode: "co",
      });
      this.daily = daily;
      this.loading = false;
    } catch (error) {
      alert(error);
    }
  },
  methods: {
    getWeatherIcon(weather) {
      if (Array.isArray(weather)) {
        const icon = weather[0]?.icon;
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
      } else {
        return "http://openweathermap.org/img/wn/10d@2x.png";
      }
    },
    getWeatherDescription(weather) {
      if (Array.isArray(weather)) {
        const description = weather[0]?.description;
        return description;
      } else {
        return "broken clouds";
      }
    },
    getWeakDay(day) {
      return new Date(day * 1000).toLocaleDateString("es-CO", {
        weekday: "long",
      });
    },
  },
};
</script>

<style lang="scss" scope="">
.day-forecast {
  display: grid;
  grid-template-columns: 0.5fr 1fr 1.5fr;
  grid-template-rows: 1fr;
  gap: 10px 10px;
  border-radius: 18px;
  grid-template-areas: "grid-icon grid-day grid-temp";
}

.grid-icon {
  grid-area: grid-icon;
  align-self: center;
}

.grid-day {
  grid-area: grid-day;
  align-self: center;
}
.centered {
  align-self: center;
}

.grid-temp {
  grid-area: grid-temp;
  display: grid;
  padding: 10px;
  letter-spacing: -1px;
  font-weight: bold;
  text-align: center;
  font-size: large;
  border-radius: 18px;
}
</style>
