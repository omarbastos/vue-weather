<template>
  <h3 class="font-weight-bold mb-4">
    {{ strong }}
    <span class="font-weight-light">{{ thin }}</span>
  </h3>
</template>

<script>
export default {
  props: {
    strong: {
      type: String,
      default: "Place",
    },
    thin: {
      type: String,
      default: "to Visit",
    },
  },
};
</script>

<style></style>
