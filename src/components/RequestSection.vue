<template>
  <el-row id="request-section" type="flex" justify="space-between">
    <el-col :sm="8" :xs="24" :offset="0" id="video-navigator">
      <RequestNavigator
        imgSrc="video.svg"
        highlightImgSrc="hl-video.svg"
        module="Video"
        redirectUrl="abc.com"
      />
    </el-col>
    <el-col :sm="8" :xs="24" :offset="0" id="qna-navigator">
      <RequestNavigator
        imgSrc="qna.svg"
        highlightImgSrc="hl-qna.svg"
        module="QnA"
        redirectUrl="abc.com"
      />
    </el-col>
    <el-col :sm="8" :xs="24" :offset="0" id="udemy-navigator">
      <RequestNavigator
        imgSrc="udemy.svg"
        highlightImgSrc="hl-udemy.svg"
        module="Udemy"
        redirectUrl="abc.com"
      />
    </el-col>
  </el-row>
</template>

<script>
import RequestNavigator from "./RequestNavigator";
export default {
  name: "RequestSection",
  components: {
    RequestNavigator,
  },
};
</script>

<style lang="less" scoped>
#request-section {
  width: 100%;
  margin-top: 200px;
}
@media screen and (max-width: 768px) {
    #request-section {
        margin-top: 50px;
    }
  #video-navigator {
    margin-bottom: 57px;
  }
  #qna-navigator {
    margin-bottom: 57px;
  }
}
</style>