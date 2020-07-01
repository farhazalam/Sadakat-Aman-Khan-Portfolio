<template>
  <div>
    <app-topbar heading="ABOUT US"></app-topbar>
    <section id="about-me" class="white text-center"></section>
    <v-layout row align-center justify-center>
      <v-flex md6 xs12 pa-8>
        <v-img :src="coverUrl" aspect-ratio="1.5" class="grey lighten-2">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="purple lighten-2"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-flex>
      <v-flex md6 xs12 px-8>
        <div class="text-h5 mb-2 purple--text font-weight-medium">SADAKAT AMAN KHAN</div>
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
          <div>{{item.desc}}</div>
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
        "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/26170500_1728404793896389_8151788611884625619_o.jpg?alt=media&token=df28f6f4-9e57-4f28-ae4a-f9534c6852cc",
      desc1:
        "Sadakat Aman Khan (born 11th August 1997), is an Indian Classical Musician from Maldah, West Bengal. He is a solo harmonium player and a harmonium accompanist. He belongs to a 'Gharana'(heritage) which is the pathfinder of Ustad Bade Ghulam Ali Khan Sahab (Kasur Patiyala). He started learning music from his grandfather, Sangeetacharya Ustad Md Yunush Khan. Then, now from his father Ustad Sahadat Rana Khan. ",
      desc2:
        "He also got a chance to take taalim from Shri Suvendu Banerjee (Harmonium Maestro). He also got a chance to accompany maestroes such as Ustad Waseem Ahmed Khan, Ustad Arshad Ali Khan and Ustad Raza Ali Khan to name some. He has also worked in fusion music in different Bands and Musical Societies. One of such is “COTTON MOUTH”. He is the founder of 'Harmonium Metal'. ",
      gurus: [
        {
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/guru1.jpg?alt=media&token=e30b8e70-2cc7-4da9-bd47-0fa6892e3b69",
          name: "Ustad Md. Yunus Khan",
          desc:
            "'SABRANG' was Opened by Late Md. Yunush Khan Sahab. He was an Excellent classical Singer who gave a beautiful layer to Classical Music in the Distict. He was not only known for his Vocal but was also a lyricist. He wrote many Patriotic songs and many more 'Bandishes' , 'Bhajans' , 'Taranas' , etc. He took taalim from the legendary vocalist Ustad Munawar Ali Khan Sahab of Patiala Gharana. After his death, in the year 2001, his son Sahadat Rana Khan suceeded him and took his seat.However, Smt. Paromia Ghosh Dastidar (student of Late Md. Yunush Khan) also supported the Instituion and also trying to Make 'Classical Music' to reach every house. Leaving Maldah, 'SABRANG' also teach young talents in Gazole."
        },
        {
          url:
            "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/guru2.jpg?alt=media&token=4e023f11-16f3-4e85-8102-35f55484afea",
          name: "Ustad Sahadat Rana Khan",
          desc:
            "He belongs to 'Kasur Patiala Gharana'(heritage). He is an Excellent classical Singer who gives a beautiful layer to Classical Music in the Distict. He is well known for his 'aankari's' & 'Taranas'. He has been learning music from his father Sangeetacharya Ustad Md. Yunus Khan Sahab since childhood. At an early age, he gave his first solo concert on Solo Harmonium, which adds an extra flavour to his personality. He also took Taalim from Padmashree Ustad Rashid Khan Sahab. He is currently learning from Ustad Wasim Ahmed Khan Sahab (Guru ITC Sangeet Research Academy)."
        }
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