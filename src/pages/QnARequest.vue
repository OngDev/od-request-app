<template>
  <div class="home">
    <div id="page-name">
      this is <span class="highlight">Q&A</span> page!
    </div> 
    <RedirectMessage type="qna" />
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="qna" />
  </div>
</template>

<script>
import OngDevTitle from "../components/OngDevTitle";
import RedirectMessage from "../components/RedirectMessage";
import WriteRequestTooltip from "../components/WriteRequestTooltip";
import RequestTabContainer from "../components/RequestTabContainer";
export default {
  name: "QARequest",
  components: {
    OngDevTitle,
    RedirectMessage,
    WriteRequestTooltip,
    RequestTabContainer,
  },
};
</script>

<style lang="less" scoped>

</style>
