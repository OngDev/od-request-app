<template>
  <div id="qna-page" class="request-page">
    <div id="page-name">this is <span class="highlight">Q&A</span> page!</div>
    <RedirectMessage type="qna" />
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="qna" />
    <RequestPopup
        style="z-index:2"
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
  name: "QARequest",
  components: {
    OngDevTitle,
    RedirectMessage,
    WriteRequestTooltip,
    RequestTabContainer,
    RequestPopup
  },
};
</script>

<style lang="less" scoped>
  #page-name {
    font-family: 'Nunito', sans-serif;
  }
</style>