<template>
  <div id="udemy-page" class="request-page">
    <div id="page-name">
      this is <span class="highlight">udemy-request</span> page!
    </div> 
    <RedirectMessage type="udemy" />
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="udemy "/>
  </div>
</template>

<script>
import OngDevTitle from "../components/OngDevTitle";
import RedirectMessage from "../components/RedirectMessage";
import WriteRequestTooltip from "../components/WriteRequestTooltip";
import RequestTabContainer from "../components/RequestTabContainer";
export default {
  name: "UdemyRequest",
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
