<template>
  <v-app>
    <app-appbar></app-appbar>
    <v-content>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
import Appbar from "../src/components/Appbar";

export default {
  components: {
    appAppbar: Appbar
  }
};
</script>

<style>
@font-face {
  font-family: "samarkan";
  src: url("./assets/samarkan-webfont.woff2") format("woff2"),
    url("./assets/samarkan-webfont.woff") format("woff"),
    url("./assets/samarkan-webfont.ttf") format("truetype");
}

html,
body {
  overflow-x: hidden;
}
.slide-leave-active {
  transition: opacity 0.5s ease;
  opacity: 0;
  animation: slide-out 0.5s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 0.5s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>