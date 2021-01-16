<template>
  <div
    id="popup-container"
    :style="{
      display: creationPopup.isVisible ? 'flex' : 'none',
    }"
  >
    <div id="pop-up-form">
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="20"
          ><h2 id="title">{{ popupTitle }}</h2></el-col
        >
        <el-col :span="2" id="close-btn"
          ><i @click="closePopup" class="el-icon-close"></i
        ></el-col>
      </el-row>
      <el-col :span="14"
        ><div id="title-desc">{{ popupDesc }}</div></el-col
      >

      <div
        class="input-container"
        v-if="popupType === 'videos' || popupType === 'qna'"
      >
        <el-input placeholder="Your request here" v-model="title"></el-input>
        <el-input
          type="textarea"
          :rows="10"
          placeholder="Your Description here"
          v-model="description"
        ></el-input>
      </div>

      <div class="input-container" v-else-if="popupType === 'udemy'">
        <el-input placeholder="Your request here" v-model="title"></el-input>
        <el-input placeholder="Your URL here" v-model="url"></el-input>
        <el-input
          type="textarea"
          :rows="10"
          placeholder="Your Description here"
          v-model="description"
        ></el-input>
      </div>
      <h5 v-if="creationPopup.errorMessage !== undefined">
        {{ creationPopup.errorMessage }}
      </h5>
      <el-button @click="postRequest" type="primary" round>Submit</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { CLOSE_CREATION_POPUP, CREATE_REQUEST } from "../store/actions";
export default {
  name: "RequestPopup",
  data() {
    return {
      title: "",
      url: "",
      description: "",
    };
  },
  props: {
    popupType: String,
    popupTitle: String,
    popupDesc: String,
  },
  computed: {
    ...mapGetters(["creationPopup"]),
  },
  methods: {
    postRequest() {
      this.$store.dispatch(CREATE_REQUEST, {
        title: this.title,
        description: this.description,
        url: this.url,
        popupType: this.popupType,
      });
    },
    closePopup() {
      this.$store.commit(CLOSE_CREATION_POPUP);
    },
  },
};
</script>

<style lang="less" scoped>
#popup-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #0000004d;
  display: flex;
  justify-content: center;
  align-items: center;
}
#pop-up-form {
  font-family: "Roboto";
  background-color: #fbf7f5;
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

#pop-up-form .el-icon-close {
  font-size: 1.5em;
  cursor: pointer;
}

#pop-up-form .el-icon-close:hover {
  color: #f05d20;
}

#pop-up-form #title-desc {
  font-size: 0.8em;
  color: #696969;
  padding: 1em 0 3em 0;
}

#pop-up-form i {
  width: 10px;
}

#pop-up-form .el-input {
  margin: 0 auto 0.3em auto;
  border: none;
  border-bottom: none;
}

#pop-up-form .el-input :focus,
#pop-up-form .el-textarea :focus {
  border: solid 1px #f05d20;
}

#pop-up-form .el-textarea {
  margin: auto;
}

#pop-up-form .el-button {
  margin: 1em auto 0 auto;
  border-radius: 2em;
  padding: 1em 2em;
  background-color: #f05d20;
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