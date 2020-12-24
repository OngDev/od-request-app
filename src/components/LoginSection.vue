<template>
  <div id="login-section" v-if="$store.state.token === undefined">
    <a @click="login()">Log in</a><br v-if="isSmall" />
    to <span>POST</span> your own Requests
  </div>
</template>

<script>
import * as Keycloak from "keycloak-js";
import {
  ADD_LOGGED_IN_USER_TO_STATE,
  SET_ACCESS_TOKEN_TO_STATE,
} from "../store/actions";
const { VUE_APP_KEYCLOAK_URL, VUE_APP_REALM, VUE_APP_CLIENT_ID } = process.env;
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
      const initOptions = {
        url: VUE_APP_KEYCLOAK_URL,
        realm: VUE_APP_REALM,
        clientId: VUE_APP_CLIENT_ID,
        onload: "check-sso",
      };
      let keycloak = Keycloak(initOptions);
      keycloak
        .init({
          onLoad: "check-sso",
          silentCheckSsoRedirectUri:
            window.location.origin + "/silent-check-sso.html",
        })
        .then((auth) => {
          if (!auth) {
            window.location.reload();
          } else {
            this.$log.info("Authenticated");
          }
          const { token, refreshToken } = keycloak;
          this.$store.commit(SET_ACCESS_TOKEN_TO_STATE, {
            token,
            refreshToken,
          });
          keycloak.loadUserInfo().then((user) => {
            if (user) {
              this.$store.commit(ADD_LOGGED_IN_USER_TO_STATE, { user: user });
            }
          });
        })
        .catch(() => {
          this.$log.error("Authenticated Failed");
        });
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
