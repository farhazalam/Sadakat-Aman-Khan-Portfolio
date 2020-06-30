<template>
  <div>
    <v-img src="@/assets/1.jpg" max-height="100vh" alt="Sadakat Aman Khan">
      <app-icon class="hidden-sm-and-down"></app-icon>
      <div class="center-heading text-center text-no-wrap">
        <app-icon class="hidden-md-and-up"></app-icon>
        <div
          class="text-lg-h2 text-md-h2 text-h5 font-weight-medium white--text main-heading"
        >{{title}}</div>
        <div
          class="text-lg-subtitle-1 text-md-subtitle-1 text-caption white--text sub-heading"
        >{{subtitle}}</div>
      </div>
    </v-img>
  </div>
</template>

<script>
import Icon from "./Icon";
export default {
  components: {
    appIcon: Icon
  },
  data() {
    return {
      title: "MR. HARMONIUM",
      subtitle: "SADAKAT AMAN KHAN "
    };
  }
};
</script>

<style scoped>

.center-heading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-heading,
.sub-heading {
  letter-spacing: 3px !important;
  font-family: "Montserrat", sans-serif !important;
  
}
</style>