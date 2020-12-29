import * as Keycloak from "keycloak-js";
import EnvProvider from "jvjr-docker-env";
import store from "../store/index";
import {
  ADD_LOGGED_IN_USER_TO_STATE,
  SET_ACCESS_TOKEN_TO_STATE,
} from "../store/actions";
const KEYCLOAK_URL = EnvProvider.value("KEYCLOAK_URL");
const REALM = EnvProvider.value("REALM");
const CLIENT_ID = EnvProvider.value("CLIENT_ID");

const initOptions = {
  url: KEYCLOAK_URL,
  realm: REALM,
  clientId: CLIENT_ID,
  onload: "check-sso",
};
const keycloak = Keycloak(initOptions);

export function initKeycloak() {
  keycloak
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
    })
    .then((authenticated) => {
      if (authenticated) {
        const { token, refreshToken } = keycloak;
        store.commit(SET_ACCESS_TOKEN_TO_STATE, {
          token,
          refreshToken,
        });
        keycloak.loadUserInfo().then((user) => {
          if (user) {
            console.log(user);
            store.commit(ADD_LOGGED_IN_USER_TO_STATE, { user: user });
          }
        });
      }
    })
    .catch(() => {
      // Ignore
      //TODO: handle error.
    });
}

export function loginKeycloak() {
  keycloak.login();
}
