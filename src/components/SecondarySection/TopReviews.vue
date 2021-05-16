<template>
  <div class="fill-height">
    <div class="mb-2">
      <v-btn text class="text-capitalize">
        <v-icon size="x-small" color="secondary" class="mr-2"
          >fas fa-plus</v-icon
        >
        Top Reviews</v-btn
      >
      <v-avatar
        v-for="avatar in avatars"
        :key="avatar"
        size="20"
        tile
        class="rounded-lg mr-1"
      >
        <v-img :src="avatar"></v-img> </v-avatar
      ><v-avatar
        size="20"
        tile
        class="rounded-lg font-weight-bold white--text"
        color="primary"
      >
        8+
      </v-avatar>
    </div>

    <v-img
      max-height="70px"
      class="rounded-xl mb-6"
      gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.6)"
      src="../../assets/art-science.jpg"
    >
      <div class="mt-4 ml-4 white--text font-weight-bold">
        <v-icon x-small color="white">fas fa-map-marker-alt</v-icon> Art
        Sciencie
        <br />
        Museum
      </div>

      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-row> </template
    ></v-img>

    <v-img
      class="rounded-xl"
      max-height="200px"
      gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.6)"
      src="../../assets/fountain.jpg"
    >
      <div class="ml-4 mt-4 white--text font-weight-bold">
        <v-icon x-small color="white">fas fa-map-marker-alt</v-icon> Fountain
        <br />
        of Wealth
      </div>
      <v-btn
        height="200px"
        class="mb-n4 mr-n4 rounded-xl"
        absolute
        bottom
        right
        color="primary"
      >
        <v-icon x-small color="white">fas fa-plus</v-icon></v-btn
      >
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
export default {
  name: "TopReviews",
  data() {
    return {
      avatars: [
        "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
