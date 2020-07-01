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
        "https://www.youtube.com/embed/u845sFTxR9I",
        "https://www.youtube.com/embed/gdF9GStzDng",
        "https://www.youtube.com/embed/94F4keYnaTY",
        "https://www.youtube.com/embed/QYbHURzuPCE",
        "https://www.youtube.com/embed/RqTBbXS-eHo",
        "https://www.youtube.com/embed/ob7R40gks_I",
        "https://www.youtube.com/embed/9-KmAJV8ClM",
        "https://www.youtube.com/embed/vN42s8dbE0Y",
        "https://www.youtube.com/embed/7Su-1ze-hcE"
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