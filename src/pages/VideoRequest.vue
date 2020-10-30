<template>
  <div id="video-page" class="request-page">
    <div id="page-name">
      this is <span class="highlight">video-request</span> page!
    </div> 
    <RedirectMessage type="videos"/>
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="videos"/>
    <RequestPopup v-bind:pageProps="pageProps" v-on:post-request="postRequest" v-on:close-popup="closePopup"/>
  </div>
</template>

<script>
import RequestPopup from "../components/RequestPopup";
import axios from "axios";

export default {
  name: "VideoRequest",
  components: {
    RequestPopup
  },
  data() {
    return {
      pageProps: {
        title:"Content bạn muốn Ông Dev làm?",
        desc: "*Không liên quan đến lương lậu, hoặc những thứ ở quá xa với lập trình nhé."
      }
    }
  },
  methods: {
    postRequest(title,url,description) {
      axios({
        method: "post",
        headers: {
          "Authorization": "Bearer " + this.$store.state.user.token
        },
        url: "https://od-request-api.herokuapp.com/request/videos",
        data: {title,description}
      })
        .then(res => {
          console.log(res); alert("Success");
          this.closePopup();
        })
        .catch(err => console.error(err))
    },

    closePopup() {
      var popup = document.getElementById("pop-up-form");
      popup.style.display = "none";
    }
  }
};
</script>

<style lang="less" scoped>

</style>