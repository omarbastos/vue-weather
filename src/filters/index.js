import Vue from "vue";

Vue.filter("temp", (temp) => {
  if (!temp) {
    return "Invalid";
  }
  return parseFloat(temp).toFixed(0);
});
