<template>
  <div>
    <app-topbar heading="ABOUT ME"></app-topbar>
    <section id="about-me" class="white text-center"></section>
    <v-layout row align-center justify-center>
      <v-flex md6 xs12 pa-8>
        <v-img :src="coverUrl" aspect-ratio="1.5" class="grey lighten-2" contain>
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="purple lighten-2"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-flex>
      <v-flex md6 xs12 px-8>
        <div class="text-h5 mb-2 purple--text font-weight-medium">SAHADAT RANA KHAN</div>
        <div>{{desc1}}</div>
        <br />
        <div>{{desc2}}</div>
      </v-flex>
    </v-layout>
    <section id="gurus" class="purple lighten-5 pt-8 mt-5 pb-10">
      <div class="text-h4 mb-4 purple--text font-weight-medium text-center">MY GURUS</div>
      <v-layout row align-center justify-center v-for="item in gurus" :key="item.url">
        <v-flex md6 xs12 pa-8>
          <v-img :src="item.url" aspect-ratio="1.5" contain>
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="purple lighten-2"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-flex>
        <v-flex md6 xs12 px-8>
          <div class="text-h5 mb-2 purple--text font-weight-medium">{{item.name}}</div>
         
          <v-btn color="purple darken-1 white--text" :href="item.desc" target="_blank">KNOW MORE</v-btn>
        </v-flex>
      </v-layout>
    </section>
    <app-commonfooter></app-commonfooter>
  </div>
</template>

<script>
import Topbar from "../components/Topbar.vue";
import Commonfooter from "../components/CommonFooter";
export default {
  components: {
    appTopbar: Topbar
    ,
    appCommonfooter: Commonfooter,
  },
  data() {
    return {
      coverUrl:
        "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FIMG20200213235104.jpg?alt=media&token=2515abad-f607-42aa-9fb7-11f507fba941",
      desc1:
        "Sahadat Rana Khan (born 1965) is an Indian Classical Musician from Maldah, West Bengal. He belongs to a 'Gharana'(heritage) which is the pathfinder of Ustad Bade Ghulam Ali Khan Sahab (Kasur Patiyala). He started learning music from his father, Sangeetacharya Ustad Md Yunus Khan and from his uncle Ustad Abdul Khaleque Khan. After his father's death, he took taalim from the legendary stalwart, Ustad Rashid Khan and lately from Agra Gharana's torch bearer Ustad Waseem Ahmed Khan (Guru ITC Sangeet Research Academy). He holds a Master Degree in Indian Classical Vocal from the prestitgious Bangiya Sangeet Parishad. ",
      desc2:
        " ",
      gurus: [
        {
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FSangeet%20Acharya%20Md.%20Yunus%20Khan.jpg?alt=media&token=1a5ad6a2-1230-4bea-ab6d-ab8f574eac44",
          name: "Sangeet Acharya Md. Yunus Khan",
          desc:
            "https://www.swarganga.org/artist_details.php?id=917"
        },
        {
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FUstad%20Abdul%20Khaleque%20Khan.jpg?alt=media&token=4c63f94e-e4c2-42af-ab1d-0f69b3da0b28",
          name: "Ustad Abdul Khaleque Khan",
          desc:
            ""
        },
        {
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FUstad%20Rashid%20Khan.JPG?alt=media&token=17766b77-a62e-4b5e-af42-997d7f96b74b",
          name: "Ustad Rashid Khan",
          desc:
            "https://en.wikipedia.org/wiki/Rashid_Khan_(musician)#:~:text=Ustad%20Rashid%20Khan%20(born%201,is%20married%20to%20Soma%20Khan"
        },
        {
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/sahadat%20rana%20khan%2FUstad%20Waseem%20Ahmed%20Khan.jpg?alt=media&token=ba3481ba-0801-41b4-9279-7df29684dd27",
          name: "Ustad Waseem Ahmed Khan",
          desc:
            "https://www.itcsra.org/OurScholarsPerform.aspx?ShishyasId=48"
        },
        
      ]
    };
  }
};
</script>

<style scoped>
#gurus{
  padding-bottom: 8vh !important;
}
</style>