<template>
  <div id="login-section" v-if="$store.state.token === undefined">
    <a @click="login()">Log in</a><br v-if="isSmall" />
    to <span>POST</span> your own Requests
  </div>
</template>

<script>
//import * as Keycloak from "keycloak-js";
import { loginKeycloak } from "../keycloak/index";
export default {
  name: "LoginSection",
  data() {
    return {
      isSmall: this.isSmallScreen(),
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.isSmall = this.isSmallScreen();
    });
  },
  methods: {
    isSmallScreen() {
      return window.innerWidth < 768;
    },
    login() {
      loginKeycloak();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../main.less";
#login-section {
  font-family: @od-primary-font;
  font-weight: 400;
  margin-top: 160px;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
}
#login-section a {
  color: @od-primary;
  cursor: pointer;
}

#login-section span {
  font-weight: 600;
}

@media screen and (max-width: 768px) {
  #login-section {
    margin-top: 57px;
  }
}
</style>
