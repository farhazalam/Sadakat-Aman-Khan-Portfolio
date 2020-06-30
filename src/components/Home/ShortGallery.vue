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
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/80787197_3299407063462813_3204293667242115072_o.jpg?alt=media&token=65d70c31-72cf-4333-b0e1-e9509b57f25d",
          cap: "WALID SAHAB"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/64862776_2761250417278483_3814311153648009216_o.jpg?alt=media&token=598b2da2-f31f-4c27-9a5b-cb865363f51e",
          cap: "PIANO IN TAIWAN"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/38885484_2088419007894964_4948027102105436160_n.jpg?alt=media&token=76e07a53-6859-4d16-8199-fb58b82bb17e",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/23275507_1666634853406717_3479021680132331532_o.jpg?alt=media&token=0b886113-d887-4979-8bae-eb7ece9adc9f",
          cap: "MELODICA IN FRESHERS"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/18057986_1419083641495174_2531320089680576308_n.jpg?alt=media&token=d91cf5ef-48c1-4bbc-a6f8-d1cd1208d55e",
          cap: "HARMONIUM"
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