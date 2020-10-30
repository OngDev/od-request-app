<template>
  <div>
      <div id="pop-up-form">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="20"><h2 id="title">{{pageProps.title}}</h2></el-col>
          <el-col :span="2" id="close-btn"><i @click="$emit('close-popup')" class="el-icon-close"></i></el-col>
        </el-row>
        <el-col :span="14"><div id="title-desc">{{pageProps.desc}}</div></el-col>
        
        <el-input placeholder="Your request here" v-model="title"></el-input>
        <el-input placeholder="Your URL here" v-model="url"></el-input>
        <el-input type="textarea" :rows="10" placeholder="Your Description here" v-model="description"></el-input>
        
        <el-button @click="$emit('post-request', title,url,description)" type="primary" round>Submit</el-button>
      </div>
  </div>
</template>

<script>
export default {
  name: "RequestPopup",
  data() {
    return {
      title: "",
      url: "",
      description: ""
    }
  },
  props:["pageProps"]
};
</script>

<style lang="less" scoped>
  #pop-up-form {
    font-family: 'Roboto';
    color: #262626;
    width: 69%;
    height: auto;
    padding: 2em;
    display: flex;
    flex-direction: column;
    margin: auto;
    border-radius: 1em;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  #pop-up-form #title {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 0;
  }

  #pop-up-form .el-icon-close  {
    font-size: 1.5em;
    cursor: pointer;
  }

  #pop-up-form .el-icon-close:hover  {
    color: #F05D20;
  }

  #pop-up-form #title-desc {
    font-size: 0.8em;
    color: #696969;
    padding: 1em 0 3em 0;
  }

  #pop-up-form i {
    width: 10px;
  }

  #pop-up-form .el-input{
    margin: 0 auto 0.3em auto;
    border: none;
    border-bottom: none;
  }

  #pop-up-form .el-input :focus, #pop-up-form .el-textarea :focus{
    border: solid 1px #F05D20;
  }

  #pop-up-form .el-textarea {
    margin: auto;
  }

  #pop-up-form .el-button {
    margin: 1em auto 0 auto;
    border-radius: 2em;
    padding: 1em 2em;
    background-color: #F05D20;
    border: none;
  }

  #pop-up-form .el-button:hover {
    background-color: #eb6f39;
    border: none;
  }

  @media screen and (min-width: 768px) {
    #pop-up-form {
      width: 50%;
    }

    #pop-up-form #title {
      font-size: 1.9em;
      margin-top: 0;
      margin-bottom: 0;
    }

    #pop-up-form #title-desc {
      font-size: 1em;
    }

    #pop-up-form .el-button {
      padding: 1em 4em;
    }
  }

  @media screen and (min-width: 992px) {
    #pop-up-form {
      width: 40%;
    }
  }
</style>