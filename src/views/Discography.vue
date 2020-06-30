<template>
  <div>
    <app-topbar heading="DISCOGRAPHY"></app-topbar>
    <section id="gallery" class="white">
      <v-layout row class="px-12">
        <v-flex v-for="(n,i) in discography" :key="n.url" md4 xs12 class="px-5 py-3">
          <div class="new-tag red px-2 font-weight-medium" v-if="i==0">NEW</div>
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" class="image-single">
              <v-img :src="n.url" aspect-ratio="1.5" class="grey lighten-2 small-image-hover">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="purple lighten-2"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-hover>
          <div class="text-center pt-1">{{n.title}}</div>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<script>
import Topbar from "../components/Topbar";
export default {
  components: {
    appTopbar: Topbar
  },
  data() {
    return {
      discography: [
        {
          title: "Ab Na Manoon Tori Batiyan",
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/album-art.jpg?alt=media&token=d66446ff-c775-4e07-a3cb-8a58afead55f"
        },
        {
          title: "Wander Lust",
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/album2.jpg?alt=media&token=81dd56a9-e468-45a6-83d2-0018167e7753"
        },
        {
          title: "Alaap Vol. 1",
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/album1.jpg?alt=media&token=3632fbbc-0004-444f-80b8-e035cdf7a73b"
        }
      ]
    };
  }
};
</script>
<style scoped>
.image-single {
  cursor: pointer;
}

.v-card {
  transition: opacity 0.2s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.9;
}
.new-tag {
  position: absolute;
  z-index: 2;
  font-family: "Montserrat", sans-serif !important;
}
</style>