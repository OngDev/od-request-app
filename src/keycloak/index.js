import * as Keycloak from "keycloak-js";
import EnvProvider from "jvjr-docker-env";
import store from "../store/index";
import {
  ADD_LOGGED_IN_USER_TO_STATE,
  SET_ACCESS_TOKEN_TO_STATE,
} from "../store/actions";
import logger from "../logger/index";
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
        saveTokenToStore(store, keycloak);
        setInterval(() => {
          keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
              saveTokenToStore(store, keycloak);
              logger.info("Token refreshed ");
            } else {
              logger.warn("Token not refreshed, valid for "
                + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + " seconds");
            }
          }).catch(() => {
            logger.error("Failed to refresh token");
          })
        }, 30000)
      }
    })
    .catch(() => {
      logger.error("Authenticated Failed");
    });
}

export function loginKeycloak() {
  keycloak.login();
}

function saveTokenToStore(store, keycloak) {
  const { token, refreshToken } = keycloak;
  store.commit(SET_ACCESS_TOKEN_TO_STATE, {
    token,
    refreshToken,
  });
  keycloak.loadUserInfo().then((user) => {
    if (user) {
      user.roles = keycloak.tokenParsed.realm_access.roles;
      store.commit(ADD_LOGGED_IN_USER_TO_STATE, { user });
    }
  });
}
