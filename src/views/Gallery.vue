<template>
  <div>
    <app-Topbar heading="GALLERY"></app-Topbar>
    <section id="gallery" class="purple lighten-5">
      <v-layout row class="px-12">
        <v-flex v-for="(n,i) in gallery" :key="n.uri" md4 xs12 class="px-5 py-3" @click="large(i)">
          <v-hover v-slot:default="{ hover }">
            <v-card class="transparent" flat>
              <v-img
                :src="n.uri"
                aspect-ratio="1.5"
                class="transparent small-image-hover"
                contain
              >
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
    appCommonfooter: Commonfooter
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
    }
  },
  data() {
    return {
      current: 0,
      overlay: false,
      gallery: [
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/18057986_1419083641495174_2531320089680576308_n.jpg?alt=media&token=d91cf5ef-48c1-4bbc-a6f8-d1cd1208d55e",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/19417233_1497079383695599_6088542797195197989_o.jpg?alt=media&token=55689002-b34a-4c34-ad1c-71cb7769544d",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/20786049_1563943603675843_969732879241500690_o.jpg?alt=media&token=a4794a4d-5d7d-4bda-852a-f7ab3503ac43",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/23275507_1666634853406717_3479021680132331532_o.jpg?alt=media&token=0b886113-d887-4979-8bae-eb7ece9adc9f",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/23550364_1671904262879776_8209022697587804688_o.jpg?alt=media&token=7cd55d83-62b5-4c1d-af64-fba5f324762a",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/26170500_1728404793896389_8151788611884625619_o.jpg?alt=media&token=df28f6f4-9e57-4f28-ae4a-f9534c6852cc",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/28336644_1808281982575336_3615144649974908154_o.jpg?alt=media&token=2c215c81-5efa-4335-98b4-2f94803279a7",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/28616868_1822608224476045_2688443179082158944_o.jpg?alt=media&token=f51f75ee-c23f-4b34-91c8-33a801d19886",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/35347214_1975700192500180_1870010034620989440_o.jpg?alt=media&token=fc761dda-5f4d-453e-ba7d-79cb8a2eaabe",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/38851735_2087955944607937_3116949949590274048_o.jpg?alt=media&token=0cfa2958-4bae-48d2-b9d2-e659fe0cce59",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/38885484_2088419007894964_4948027102105436160_n.jpg?alt=media&token=76e07a53-6859-4d16-8199-fb58b82bb17e",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/44464174_2226058070797723_7704365490080055296_o.jpg?alt=media&token=2f25cf09-d5b4-4599-af35-6e88f77852e2",
          cap: "HARMONIUM"
        },

        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/64862776_2761250417278483_3814311153648009216_o.jpg?alt=media&token=598b2da2-f31f-4c27-9a5b-cb865363f51e",
          cap: "HARMONIUM"
        },

        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/75534807_3168958319841022_3837443529676685312_o.jpg?alt=media&token=ae5a9d8c-0b1b-4069-acfe-eddb022ec142",
          cap: "HARMONIUM"
        },

        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/80787197_3299407063462813_3204293667242115072_o.jpg?alt=media&token=65d70c31-72cf-4333-b0e1-e9509b57f25d",
          cap: "HARMONIUM"
        },

        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/81465153_3313711675365685_6824688902901596160_o.jpg?alt=media&token=3059b0e8-8aa1-4237-9056-7d93757f5ce0",
          cap: "HARMONIUM"
        },
        {
          uri:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/83671802_3401108206626031_334679017233842176_o.jpg?alt=media&token=4b8b1c36-9bc2-4a13-9d81-620f9687288a",
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