<template>
  <div>
    <section id="gallery" class="purple lighten-5">
      <div class="text-h4 mb-6 purple--text font-weight-medium text-center">GALLERY</div>
      <v-layout row class="px-12">
        <v-flex v-for="(n,i) in gallery" :key="n.uri" md4 xs12 class="px-5 py-3" @click="large(i)">
          <v-hover v-slot:default="{ hover }">
            <v-card>
              <v-img :src="n.uri" aspect-ratio="1.5" class="grey lighten-2 small-image-hover">
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
        <v-flex md4 xs12 class="px-5 py-3">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-btn color="purple darken-1 white--text" large to="/gallery">
              MORE
              <v-icon class="pl-2" small>fa fa-arrow-right</v-icon>
            </v-btn>
          </v-row>
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
  </div>
</template>

<script>
export default {
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
    }
  },
  data() {
    return {
      current: 0,
      overlay: false,
      gallery: [
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2F118193170_101904778314745_7026871538778672925_n.jpg?alt=media&token=6eead52a-f5f0-4c32-b5a9-3610f77f1de8",
          cap: ""
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN0574.jpg?alt=media&token=75794f50-f09d-4cbe-817d-73a490208dfc",
          cap: ""
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1249.jpg?alt=media&token=73cc88ae-2049-4fef-9ff5-72dc567b4ff7",
          cap: ""
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1253.jpg?alt=media&token=5baab200-9d03-41fa-88a0-744ef240ff08",
          cap: ""
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FDSCN1255.jpg?alt=media&token=84664b37-24df-4e76-919d-8316046aef97",
          cap: ""
        }
      ]
    };
  }
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