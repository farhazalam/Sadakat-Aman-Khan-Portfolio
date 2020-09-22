<template>
  <div>
    <app-topbar heading="VIDEOS"></app-topbar>
    <section id="videos" class="purple lighten-5 text-center">
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
      </v-layout>
    </section>
    <app-commonfooter></app-commonfooter>
  </div>
</template>
<script>
import Topbar from "../components/Topbar";
import Commonfooter from "../components/CommonFooter";
export default {
    components:{
        appTopbar: Topbar,
        appCommonfooter:  Commonfooter
    },
  data() {
    return {
      videos: [
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2F111894990556133%2Fvideos%2F1960057220796039%2F&show_text=0",
        "https://www.youtube.com/embed/eAvuLfFu4zo",
        "https://www.youtube.com/embed/-RRggfLx6_8",
        "https://www.youtube.com/embed/hJzL_3mjcu4",
        "https://www.youtube.com/embed/uGMexxDvawo",
        "https://www.youtube.com/embed/OVVDjaGNlX4" ,
        // 
        "https://www.youtube.com/embed/6q_75o4BmnU",
        "https://www.youtube.com/embed/OOd4a-vcfI4",
        "https://www.youtube.com/embed/G5YwMt8I6vQ",
        "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/107765344299827/videos/259806198613513/&show_text=0"
      ]
    };
  }
};
</script>

<style scoped>
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
</style>