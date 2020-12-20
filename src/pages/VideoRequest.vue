<template>
  <div class="home">
    <div id="page-name">
      this is <span class="highlight">video-request</span> page!
    </div> 
    <RedirectMessage type="videos"/>
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="videos"/>
  </div>
</template>

<script>
import OngDevTitle from "../components/OngDevTitle";
import RedirectMessage from "../components/RedirectMessage";
import WriteRequestTooltip from "../components/WriteRequestTooltip";
import RequestTabContainer from "../components/RequestTabContainer";
export default {
  name: "VideoRequest",
  components: {
    OngDevTitle,
    RedirectMessage,
    WriteRequestTooltip,
    RequestTabContainer,
  },
};
</script>

<style lang="less">
* {
  font-family: 'Nunito', sans-serif;
}
body {
  background-color: #fbf7f5;
  color: #262626;
  margin: 4.575vw 30vh;
}
.highlight {
  color: #ffb347;
}
.highlight:hover {
  text-decoration: underline;
}
#page-name {
  font-size: 0.915em;
  letter-spacing: 0.025rem;
  font-weight: 600;
  text-align: end;
}
</style>
