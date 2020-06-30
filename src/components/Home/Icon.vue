<template>
  <div>
    <div class="mt-2 text-center">
      <span v-for="(item) in icons" :key="item" class="ml-2">
        <v-btn color="purple darken-1" icon :href="item.source" target="_blank">
          <span class="border-circle">
            <v-icon class="icon-size">{{item.url}}</v-icon>
          </span>
        </v-btn>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          url: "fa fa-spotify",
          source: "https://open.spotify.com/artist/1bi2oXy3vJ90R9SoK2WxQV"
        },
        {
          url: "fa fa-apple",
          source:
            "https://music.apple.com/us/artist/sadakat-aman-khan/1516537088"
        },
        {
          url: "fa fa-amazon",
          source:
            "https://music.amazon.com/artists/B089LXJ8J6?tab=CATALOG&ref=dm_wcp_artist_link_pr_s"
        },
        {
          url: "fa fa-facebook",
          source: "https://www.facebook.com/sadakatamankhan"
        },
        {
          url: "fa fa-youtube-play",
          source: "https://www.youtube.com/channel/UCvnoNGthHGqO71gKUSm1acw"
        },
        {
          url: "fa fa-twitter",
          source: "https://twitter.com/sadakatamankhan"
        },
        {
          url: "fa fa-instagram",
          source: "https://www.instagram.com/mr_harmonium/"
        }
      ]
    };
  }
};
</script>

<style scoped>
.icon-size {
  font-size: 16px !important;
}
.border-circle {
  background-color: white;
  padding: 5%;
  border-radius: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
@media screen and (max-width: 700px) {
  .icon-size {
    font-size: 12px !important;
  }
  .border-circle {
    padding: 1%;
  }
  .ml-2 {
    margin-left: 0 !important;
  }
}
</style>