<template>
  <div id="video-page" class="request-page">
    <div id="page-name" style="z-index:1">
      this is <span class="highlight">video-request</span> page!
    </div> 
    <RedirectMessage style="z-index:1" type="videos"/>
    <OngDevTitle style="z-index:1" />
    <WriteRequestTooltip style="z-index:1" />
    <RequestTabContainer type="videos" style="z-index:1"/>
    <RequestPopup style="z-index:2" popupType="videos" popupTitle="Content bạn muốn Ông Dev làm?" popupDesc="*Không liên quan đến lương lậu, hoặc những thứ ở quá xa với lập trình nhé."/>
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