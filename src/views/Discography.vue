<template>
  <div>
    <app-topbar heading="DISCOGRAPHY"></app-topbar>
    <section id="gallery" class="white">
      <v-layout row class="px-12">
        <v-flex v-for="(n,i) in discography" :key="n.url" md4 xs12 class="px-5 py-3">
          <div class="new-tag red px-2 font-weight-medium" v-if="i==0">NEW</div>
          <v-hover v-slot:default="{ hover }">
            <v-card
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
              class="image-single"
              :href="n.source"
              target="_blank"
            >
              <v-img :src="n.url" aspect-ratio="1.5" class="grey lighten-2 small-image-hover" contain>
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
    <app-commonfooter></app-commonfooter>
  </div>
</template>
<script>
import Topbar from "../components/Topbar";
import Commonfooter from "../components/CommonFooter";
export default {
  components: {
    appTopbar: Topbar,
    appCommonfooter: Commonfooter
  },
  data() {
    return {
      discography: [
        {
          title: "Vocal Classical Music",
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FFinal%20Cover.jpg?alt=media&token=38573819-ac47-4af1-93f7-72ecdcb33956",
          source: ""
        },
        {
          title: "Ab Na Manoon Tori Batiyan",
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/album-art.jpg?alt=media&token=d66446ff-c775-4e07-a3cb-8a58afead55f",
          source: "https://www.youtube.com/watch?v=-RRggfLx6_8"
        },
        
      ]
    };
  }
};
</script>
<style scoped>
#gallery{
  padding-bottom: 8vh !important;
}
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