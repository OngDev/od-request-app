<template>
<el-row type="flex" justify="space-around" id="header">
  <el-col :span="6"></el-col>
  <el-col :span="6" id="logo-container">
    <img id="logo" src="../assets/logo.png"/>
  </el-col>
  <el-col :span="6"></el-col>
</el-row>
</template>

<script>
export default {
    name: "HomeHeader"
};
</script>

<style lang="less" scoped>
@import "../main.less";

#header {
  height: 200px;
  border-bottom: solid 1px @od-primary;
}
#logo-container {
  display: flex !important;
  justify-content: center;
  align-items: center;
}
#logo {
  height: 130px;
}
</style>