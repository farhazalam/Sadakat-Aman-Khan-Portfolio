<template>
  <nav>
    <v-app-bar-nav-icon @click="changeDrawer" absolute class="nav-icon-index ml-5 mt-2 white--text"></v-app-bar-nav-icon>
    <v-navigation-drawer app v-model="drawer" temporary class="purple darken-2" dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mr. Harmonium</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", icon: "mdi-home", path: "/" },
         { title: "About", icon: "mdi-information", path: "/about" },
        { title: "Gallery", icon: "mdi-image", path: "/gallery" },
        { title: "Discography", icon: "mdi-music", path: "/discography" },
         { title: "Videos", icon: "mdi-video", path: "/videos" },
      ]
    };
  },
  methods: {
    changeDrawer() {
      this.drawer = !this.drawer;
    }
  }
};
</script>
<style>
.nav-icon-index {
  z-index: 2 !important;
}
</style>