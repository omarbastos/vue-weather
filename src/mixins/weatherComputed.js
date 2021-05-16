export default {
  computed: {
    weatherIcon() {
      const { weather } = this;
      if (Array.isArray(weather)) {
        const icon = weather[0]?.icon;
        return `http://openweathermap.org/img/wn/${icon}@2x.png`;
      } else {
        return "http://openweathermap.org/img/wn/10d@2x.png";
      }
    },
    description() {
      const { weather } = this;
      if (Array.isArray(weather)) {
        const description = weather[0]?.description;
        return description;
      } else {
        return "broken clouds";
      }
    },
  },
};
