<template>
  <div id="social-section">
    <div id="od-name">Ông <span>Dev</span></div>
    <div id="social-buttons">
      <img src="../assets/icons/fb.svg" />
      <img src="../assets/icons/yt.svg" />
      <img src="../assets/icons/gh.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SocialSection",
};
</script>

<style lang="less" scoped>
@import "../main.less";
#social-section {
  margin-top:80px;
  margin-bottom: 110px;
}
#od-name {
  margin-bottom: 25px;
  text-align: center;
  font-weight: 800;
  font-size: 25px;
  line-height: 30px;
}
#od-name span {
  color: @od-primary;
}
#social-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
}
#social-buttons img {
  width: 35px;
  height: 35px;
  padding: 0 25px;
}

@media only screen and (max-width: 768px){
  #social-section {
      margin-top: 32px;
      margin-bottom: 32px;
  }
}
</style>