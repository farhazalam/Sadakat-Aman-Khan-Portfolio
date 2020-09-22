<template>
  <div>
    <v-img src="@/assets/2.jpg" max-height="100vh" alt="Sadakat Aman Khan" position="top top">
      <app-icon class="hidden-sm-and-down"></app-icon>
      <div class="center-heading text-center text-no-wrap">
        <app-icon class="hidden-md-and-up"></app-icon>
        <div
          class="white--text main-heading"
          :class="{'text-h7': $vuetify.breakpoint.smAndDown, 'text-h4': $vuetify.breakpoint.mdAndUp}"
        >
          <h1>{{title}}</h1>
        </div>
        <div
          class="white--text sub-heading"
          :class="{'text-caption': $vuetify.breakpoint.smAndDown, 'text-subtitle-2': $vuetify.breakpoint.mdAndUp}"
        >
          <!-- <h4>{{subtitle}}</h4> -->
        </div>
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
      title: "SAHADAT RANA KHAN",
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
.sub-heading {
  letter-spacing: 3px !important;
  font-family: "Montserrat", sans-serif !important;
  padding-top: 10px;
}
.main-heading {
  font-family: "samarkan", sans-serif !important;
}
@media screen and (max-width: 960px) {
  .sub-heading {
    padding-top: 0px;
  }
}
</style>