<template>
  <div id="udemy-page" class="request-page">
    <div id="page-name">
      this is <span class="highlight">udemy-request</span> page!
    </div>
    <RedirectMessage type="udemy" />
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="udemy " />
    <RequestPopup
      popupType="udemy"
      popupTitle="Khóa học bạn muốn học là?"
      popupDesc="*Nhớ giải thích về khóa học, và tại sao bạn recommend nó nhá."
    />
  </div>
</template>

<script>
import OngDevTitle from "../components/OngDevTitle";
import RedirectMessage from "../components/RedirectMessage";
import WriteRequestTooltip from "../components/WriteRequestTooltip";
import RequestTabContainer from "../components/RequestTabContainer";
import RequestPopup from "../components/RequestPopup";
export default {
  name: "UdemyRequest",
  components: {
    OngDevTitle,
    RedirectMessage,
    WriteRequestTooltip,
    RequestTabContainer,
    RequestPopup,
  }
};
</script>