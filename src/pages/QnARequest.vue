<template>
  <div class="home">
    <div id="page-name">
      this is <span class="highlight">Q&A</span> page!
    </div> 
    <RedirectMessageQnA />
    <OngDevTitle />
    <WriteRequestTooltip />
    <RequestTabContainer type="qna"/>
  </div>
</template>

<script>
import OngDevTitle from "../components/OngDevTitle";
import RedirectMessageQnA from "../components/RedirectMessageQnA";
import WriteRequestTooltip from "../components/WriteRequestTooltip";
import RequestTabContainer from "../components/RequestTabContainer";
export default {
  name: "QARequest",
  components: {
    OngDevTitle,
    RedirectMessageQnA,
    WriteRequestTooltip,
    RequestTabContainer,
  },
};
</script>

<style lang="less">
* {
  font-family: 'Nunito', sans-serif;
}
body {
  background-color: #fbf7f5;
  color: #262626;
  margin: 4.575vw 30vh;
}
.highlight {
  color: #ffb347;
}
.highlight:hover {
  text-decoration: underline;
}
#page-name {
  font-size: 0.915em;
  letter-spacing: 0.025rem;
  font-weight: 600;
  text-align: end;
}
</style>
