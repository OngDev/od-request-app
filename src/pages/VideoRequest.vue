<template>
  <div id="video-page" class="request-page">
    <div id="page-name">
      this is <span class="highlight">video-request</span> page!
    </div>
    <RedirectMessage type="videos"/>
    <OngDevTitle/>
    <WriteRequestTooltip/>
    <RequestTabContainer type="videos"/>
    <RequestPopup style="z-index:2"/>
  </div>
</template>

<script>
import OngDevTitle from "../components/OngDevTitle";
import RedirectMessage from "../components/RedirectMessage";
import WriteRequestTooltip from "../components/WriteRequestTooltip";
import RequestTabContainer from "../components/RequestTabContainer";
import RequestPopup from "../components/RequestPopup";

export default {
  name: "VideoRequest",
  components: {
    OngDevTitle,
    RedirectMessage,
    WriteRequestTooltip,
    RequestTabContainer,
    RequestPopup
  }
};
</script>