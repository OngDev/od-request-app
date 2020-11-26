<template>
  <div class="home">
    <RedirectMessage />
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
body {
  background-color: #fbf7f5;
  color: #262626;
  // margin: 4.575vw 30vh;
}
</style>
