<template>
  <div>
    <v-img src="@/assets/harmonium.jpg">
      <div class="white--text heading text-center">
        <h2 class="text-h3">{{heading}}</h2>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {
  props: ["heading"]
};
</script>

<style scoped>
.heading {
  position: relative;
  top: 25%;
}
.v-application .text-h3 {
  letter-spacing: 0.3rem !important;
  font-family: "Montserrat", sans-serif !important;
}

@media screen and (max-width: 960px) {
  .v-application .text-h3 {
    font-size: 2rem !important;
  }
}
</style>