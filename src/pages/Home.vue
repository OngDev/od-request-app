<template>
  <div class="page-container">
    <div class="content-container">
      <HomeHeader />
      <div id="home-section">
        <RequestSection/>
        <LoginSection/>
        <SocialSection/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";
import RequestSection from "../components/RequestSection.vue";
import LoginSection from "../components/LoginSection.vue";
import SocialSection from "../components/SocialSection.vue";
export default {
  name: "Home",
  components: {
    HomeHeader,
    RequestSection,
    LoginSection,
    SocialSection
  },
};
</script>

<style lang="less" scoped>
@import "../main.less";
#home-section {
  font-family: @od-primary-font;
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
</style>
