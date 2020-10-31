<template>
  <div class="home">
    <RedirectMessage />
    <OngDevTitle />
    <WriteRequestTooltip />
    <Tab />
  </div>
</template>

<script>
// import MyLayout from "../components/MyLayout";
// mah import
import OngDevTitle from "../components/OngDevTitle"
import RedirectMessage from "../components/RedirectMessage"
import WriteRequestTooltip from "../components/WriteRequestTooltip"
import Tab from "../components/Tab"
export default {
  name: "Home",
  components: {
    OngDevTitle,
    RedirectMessage,
    WriteRequestTooltip,
    Tab,
  },
};
</script>

<style lang="less">
  body {
    background-color: #FBF7F5;
    color: #262626;
    // margin: 4.575vw 30vh;
  }
</style>
