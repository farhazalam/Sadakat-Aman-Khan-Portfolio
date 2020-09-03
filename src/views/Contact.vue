<template>
  <div>
    <app-topbar heading="CONTACT"></app-topbar>
    <section id="contact">
      <v-layout row class="px-8" align-center justify-center>
        <v-flex md6 xs12 class="px-5 pt-10">
          <h3 class="purple--text">Lets Talk</h3>
          <h4
            class="font-weight-light"
          >Call us or mail us now and lets talk buisness. Fill in the right side form for any issues and suggestions and we will get back to you asap.</h4>
          <br />
          <br />

          <div class="pb-2 icon-con">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <a
              href="tel:+919434166007"
              style="text-decoration: none;"
              class="link pl-3"
            >+91 9434166007</a>
          </div>

          <div class="icon-con">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <a
              href="mailto:contact@sahadatranakhan.com"
              style="text-decoration: none;"
              class="link pl-2"
            >contact@sahadatranakhan.com</a>
          </div>
          <br />
          <br />
          <h5>FOLLOW US</h5>

          <div class="follow">
            <span v-for="(item) in icons" :key="item.url" class="mr-3">
              <v-btn color="purple darken-1" icon :href="item.source" target="_blank">
                <span class="border-circle">
                  <v-icon class="icon-size">{{item.url}}</v-icon>
                </span>
              </v-btn>
            </span>
          </div>
        </v-flex>
        <v-flex md6 xs12 class="px-5 pt-10">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-layout row>
              <v-flex md6 xs12 class="pr-2">
                <v-text-field label="NAME" outlined dense color="purple lighten-2" required></v-text-field>
              </v-flex>
              <v-flex md6 xs12 class="pr-2">
                <v-text-field
                  label="EMAIL"
                  outlined
                  dense
                  color="purple lighten-2"
                  type="email"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex md12 xs12 class="pr-2">
                <v-textarea outlined dense label="MESSAGE" color="purple lighten-2" required></v-textarea>
              </v-flex>
              <v-flex md12 xs12 class="pr-2">
                <v-btn color="purple" width="100%" large class="white--text" type="submit">SUBMIT</v-btn>
              </v-flex>
            </v-layout>
          </v-form>
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
  components: {
    appTopbar: Topbar,
    appCommonfooter: Commonfooter
  },
  data() {
    return {
      icons: [
        {
          url: "fa fa-facebook",
          source: "https://www.facebook.com/sahadatranakhanofficial"
        },

        {
          url: "fa fa-twitter",
          source: "https://www.twitter.com/sahadatranakhan"
        },
        {
          url: "fa fa-instagram",
          source: "https://www.instagram.com/sahadatranakhan"
        }
      ]
      // valid: true,
      // name: "",
      // nameRules: [v => !!v || "Name is required"],
      // email: "",
      // emailRules: [
      //   v => !!v || "E-mail is required",
      //   v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      // ],
      // message: "",
      // messageRules: [v => !!v || "Message is required"],
    };
  },
  methods: {
    //   validate() {
    //     this.$refs.form.validate();
    //     if(this.$refs.form.validate()){
    //       console.log("SUCCEED");
    //       =
    //     }
    //     else{
    //       console.log("FAILED");
    //     }
    //   }
  }
};
</script>

<style scoped>
#contact {
  padding-bottom: 8vh !important;
}
.follow {
  margin-left: -2%;
}
.fa-phone,
.fa-envelope {
  color: black;
}
.icon-con .fa-phone:hover,
.icon-con .fa-envelope:hover,
.icon-con .link:hover {
  color: purple !important;
}
.link {
  color: black;
}
</style>