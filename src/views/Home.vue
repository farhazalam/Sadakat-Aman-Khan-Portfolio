<template>
  <div>
    <app-landing></app-landing>
    <section id="about" class="white text-center">
      <div class="text-h4 mb-6 purple--text font-weight-medium">SHORT BIO</div>
      <div class="text-body-2 mb-4">{{bio}}</div>
      <v-btn color="purple darken-1 white--text" to="/about">KNOW MORE</v-btn>
    </section>
    <short-gallery></short-gallery>
    <section id="latest-album" class="white text-center">
      <div class="text-h4 mb-6 purple--text font-weight-medium">LATEST RELEASE</div>
      <v-layout row class="px-12">
        <v-flex md12 xs12 class="px-5">
          <v-card flat>
            <v-img aspect-ratio="1.5" :src="newRelease.url" contain :alt="newRelease.title">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="purple lighten-2"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-flex>
        <v-flex md12 xs12 class="text-center px-5">
          <h2>
            {{newRelease.title}}
            <v-btn
              color="red white darken-1 white--text text-center youtube-link"
              class="pl-2"
              small
              :href="newRelease.videoUrl"
              target="_blank"
            >
              <v-icon class="pr-2" small>fa fa-youtube-play</v-icon>WATCH NOW
            </v-btn>
          </h2>
        </v-flex>
        <v-flex md12 xs12 class="text-center px-5 pt-6">
          <v-btn color="purple darken-1 white--text" to="/discography">SEE MORE</v-btn>
        </v-flex>
      </v-layout>
    </section>
    <section id="videos" class="purple lighten-5 text-center">
      <div class="text-h4 mb-6 purple--text font-weight-medium">VIDEOS</div>
      <v-layout row class="px-12">
        <v-flex v-for="n in videos" :key="n" md4 xs12 class="px-5 py-3">
          <iframe
            class="iframe-settings"
            width="100%"
            :src="n"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-flex>
        <v-flex md4 xs12 class="px-5 py-3">
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-btn color="purple darken-1 white--text" large to="/videos">
              MORE
              <v-icon class="pl-2" small>fa fa-arrow-right</v-icon>
            </v-btn>
          </v-row>
        </v-flex>
      </v-layout>
    </section>
    <section id="getInTouch" class="purple darken-1 text-center contact white--text">
      <template>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <h4 class="display-1 font-weight-thin">
            Get in Touch with us today!
            <v-btn
              :class="{'mt-5': $vuetify.breakpoint.smAndDown, 'mt-0': $vuetify.breakpoint.mdAndUp}"
              class="ml-2"
              small
              to="/contact"
            >GET IN TOUCH</v-btn>
          </h4>
        </v-row>
      </template>
    </section>
    <v-footer dark padless>
      <v-card flat tile class="purple lighten-5 black--text text-center" width="100vw">
        <v-layout row class="px-12">
          <v-flex v-for="(item,index) in footer" :key="item.title" md4 xs12 class="px-5 py-3">
            <v-card-text class="black--text pt-0 font-weight-medium">{{item.title}}</v-card-text>
            <v-card-text class="black--text pt-0" v-if="index==2">
              <div>
                <a
                  href="tel:+91-738-456-5982"
                  class="links"
                  style="text-decoration: none;"
                >{{item.line1}}</a>
              </div>
              <div>
                <a
                  href="mailto:sadakatamankhan@gmail.com"
                  class="links"
                  style="text-decoration: none;"
                >{{item.line2}}</a>
              </div>
            </v-card-text>
            <v-card-text class="black--text pt-0" v-else>
              <div>{{item.line1}}</div>
              <div>{{item.line2}}</div>
            </v-card-text>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-card-text class="black--text purple lighten-3">
          {{ new Date().getFullYear() }}
          Sahadat Rana Khan. All rights reserved.
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
import Landing from "../components/Home/Landing";
import ShortGallery from "../components/Home/ShortGallery";
export default {
  methods: {},
  data() {
    return {
      bio:
        "Sahadat Rana Khan (born 1965) is an Indian Classical Musician from Maldah, West Bengal. He belongs to a 'Gharana'(heritage) which is the pathfinder of Ustad Bade Ghulam Ali Khan Sahab (Kasur Patiyala). He started learning music from his father, Sangeetacharya Ustad Md Yunus Khan and from his uncle Ustad Abdul Khaleque Khan. After his father's death, he took taalim from the legendary stalwart, Ustad Rashid Khan and lately from Agra Gharana's torch bearer Ustad Waseem Ahmed Khan (Guru ITC Sangeet Research Academy). He holds a Master Degree in Indian Classical Vocal from the prestitgious Bangiya Sangeet Parishad.",
      newRelease: {
        title: "Ab Na Manoon Tori Batiyan",
        url:
          "https://firebasestorage.googleapis.com/v0/b/mr-harmonium.appspot.com/o/album-art.jpg?alt=media&token=d66446ff-c775-4e07-a3cb-8a58afead55f",
        tracks: ["Wild Wanderer", "Cataclysmic  Thunder", "Serenity"],
        isTracks: false,
        videoUrl: "https://www.youtube.com/watch?v=-RRggfLx6_8"
      },
      videos: [
        "https://www.youtube.com/embed/eAvuLfFu4zo",
        "https://www.youtube.com/embed/-RRggfLx6_8",
        "https://www.youtube.com/embed/hJzL_3mjcu4",
        "https://www.youtube.com/embed/uGMexxDvawo",
        "https://www.youtube.com/embed/OVVDjaGNlX4" 
      ],
      footer: [
        {
          title: "ADDRESS",
          line1: "English Bazar, Malda",
          line2: "West Bengal, India"
        },
        {
          title: "OPENING HOURS",
          line1: "Mon-Thurs : 10:00 AM - 11:00 PM",
          line2: "Fri-Sun : 11:00 AM - 02:00 PM"
        },
        {
          title: "CONTACT INFO",
          line1: "Phone : +91 9434166007",
          line2: "Email : contact@sahadatranakhan.com"
        }
      ]
    };
  },
  components: {
    appLanding: Landing,
    shortGallery: ShortGallery
  }
};
</script>

<style scoped>
.links {
  color: black;
}
.links:hover {
  color: purple;
}
.contact {
  height: 18vh;
}
.iframe-settings {
  padding-bottom: 8vh;
}
iframe {
  height: 130%;
}
#videos {
  padding: 10vh 0;
}
.youtube-link {
  font-size: 12px;
}
#latest-album {
  padding: 10vh 0;
}
.text-h4,
.text-body-2 {
  font-family: "Montserrat", sans-serif !important;
  line-height: 1.7rem;
}
#about {
  padding: 10vh 22vw;
}

@media screen and (max-width: 960px) {
  #about {
    padding: 5vh 12vw;
  }
}
@media screen and (max-width: 600px) {
  iframe {
    height: 100%;
  }
  .iframe-settings {
    padding-bottom: 0;
  }
}
</style>
