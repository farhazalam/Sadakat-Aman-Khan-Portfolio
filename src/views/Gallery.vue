<template>
  <div>
    <app-Topbar heading="GALLERY"></app-Topbar>
    <section id="gallery" class="purple lighten-5">
      <v-layout row class="px-12">
        <v-flex v-for="(n,i) in gallery" :key="n.uri" md4 xs12 class="px-5 py-3" @click="large(i)">
          <v-hover v-slot:default="{ hover }">
            <v-card class="transparent" flat>
              <v-img :src="n.uri" aspect-ratio="1.5" class="transparent small-image-hover" contain>
                <v-expand-transition>
                  <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out black v-card--reveal display-1 white--text"
                    style="height: 100%;"
                  >{{n.cap}}</div>
                </v-expand-transition>
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="purple lighten-2"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </v-card>
          </v-hover>
        </v-flex>
      </v-layout>
      <v-overlay :value="overlay">
        <v-layout row>
          <v-flex>
            <v-row class="fill-height pr-10" align="center" justify="center">
              <v-btn @click="changePrev" icon color="white">
                <v-icon>fa fa-arrow-left</v-icon>
              </v-btn>
            </v-row>
          </v-flex>
          <v-flex>
            <v-img :src="`${gallery[current].uri}`" class="ful" contain></v-img>
          </v-flex>
          <v-flex>
            <v-row class="fill-height pl-10" align="center" justify="center">
              <v-btn @click="changeNext" icon color="white">
                <v-icon>fa fa-arrow-right</v-icon>
              </v-btn>
            </v-row>
          </v-flex>
        </v-layout>

        <v-btn icon @click="overlay = false" class="close-button">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-overlay>
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
    appCommonfooter: Commonfooter,
  },
  methods: {
    large(i) {
      this.current = i;
      this.overlay = true;
    },
    changePrev() {
      let a = this.current - 1;
      if (a < 0) {
        this.current = this.gallery.length - 1;
      } else {
        this.current -= 1;
      }
    },
    changeNext() {
      let a = this.current + 1;
      if (a > this.gallery.length - 1) {
        this.current = 0;
      } else {
        this.current += 1;
      }
      console.log(this.current);
    },
  },
  data() {
    return {
      current: 0,
      overlay: false,
      gallery: [
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2F118193170_101904778314745_7026871538778672925_n.jpg?alt=media&token=6eead52a-f5f0-4c32-b5a9-3610f77f1de8",
          cap: "",
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN0574.jpg?alt=media&token=75794f50-f09d-4cbe-817d-73a490208dfc",
          cap: "",
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1249.jpg?alt=media&token=73cc88ae-2049-4fef-9ff5-72dc567b4ff7",
          cap: "",
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1253.jpg?alt=media&token=5baab200-9d03-41fa-88a0-744ef240ff08",
          cap: "",
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1255.jpg?alt=media&token=84664b37-24df-4e76-919d-8316046aef97",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1259.jpg?alt=media&token=ba2698e6-c8a5-4d91-a62d-3ba6f60faaf4",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FFinal%20Cover.jpg?alt=media&token=38573819-ac47-4af1-93f7-72ecdcb33956",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FGandha%20Bandhan.jpg?alt=media&token=cb4b0a2f-5ca0-4563-a502-1ac56ccc9ea6",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG20200213235104.jpg?alt=media&token=2515abad-f607-42aa-9fb7-11f507fba941",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_0363.jpg?alt=media&token=8bace883-564f-4f68-855a-c63e81b5d48c",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_0375.jpg?alt=media&token=61cb6350-3f49-48fb-9d30-72ad38ab2a1e",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_0785.jpg?alt=media&token=fe75ce39-8f49-4957-8534-4960f450cced",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_1379.jpg?alt=media&token=d0d6ffa0-bd49-4db1-9efa-6452e76d52ca",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_4283.jpg?alt=media&token=a8e1e527-a344-43af-9ed9-c86c73a68d04",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_4295.jpg?alt=media&token=7ad67a2a-6faf-4ade-9a28-442eb9505eea",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_4386.jpg?alt=media&token=413e89b2-91f5-4eff-b3b2-c3c484afe63a",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_4395.jpg?alt=media&token=376588a8-a82b-4c27-bc94-d6f57b616a16",
          cap: "",
        },
        {
          uri: "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG_4411.jpg?alt=media&token=87d67475-3d97-4c93-b4dd-cdb0026f8f6e",
          cap: "",
        },
        
        
      ],
    };
  },
};
</script>


<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}

.text-h4,
.text-body-2 {
  font-family: "Montserrat", sans-serif !important;
  line-height: 1.7rem;
}
.ful {
  width: 75vw;
  height: 70vh;
}
.close-button {
  position: fixed;
  top: 20px;
  right: 20px;
}
.small-image-hover:hover {
  cursor: pointer !important;
}
#gallery {
  padding: 9vh 0;
}
@media screen and (max-width: 960px) {
  .pl-10 {
    padding-left: 18px !important;
  }
  .pr-10 {
    padding-right: 18px !important;
  }
  #gallery {
    padding: 10vh 0;
  }
}
</style>