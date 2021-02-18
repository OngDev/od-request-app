// MUTATIONS
export const ADD_LOGGED_IN_USER_TO_STATE = "addLoggedInUserToState";
export const SET_ACCESS_TOKEN_TO_STATE = "setAccessTokenToState"
export const REMOVE_USER_OUT_OF_STATE = "removeUserOutOfState";
export const ADD_REQUEST_LIST_TO_STATE = "addRequestListToState";
export const ADD_MY_REQUEST_LIST_TO_STATE = "addMyRequestListToState";

export const FETCH_REQUEST = "fetchRequests";
export const FETCH_MY_REQUEST = "fetchMyRequests";
export const CREATE_REQUEST = "createRequest";
export const DELETE_REQUEST = "deleteRequest";

// Popup handing
export const CLOSE_CREATION_POPUP = "closeCreationPopup";
export const OPEN_CREATION_POPUP = "openCreationPopup";
export const TOGGLE_CREATION_POPUP_LOADING = "togglePopupLoading";
export const ADD_ERROR_MESSAGE_TO_CREATION_POPUP = "addErrorMessageToCreationPopup";

export const TO_MY_REQUESTS_TAB = "toMyRequestsTab";

import _ from "lodash";
import axios from "axios";
import EnvProvider from "jvjr-docker-env";
import { mapRequests } from "./utils";
const RESOURCE_SERVER_URL = EnvProvider.value("RESOURCE_SERVER_URL");


import logger from "../logger/index";
import { loginKeycloak } from "../keycloak/index";

const actions = {
    async fetchRequests({state, commit}, {page, type}) {
        try {
            if (!page) page = 0;
            const res = await axios.get(
              `${RESOURCE_SERVER_URL}/request/${type}?page=${page}`
            );
            const requests = mapRequests(state, _.get(res, "data.content", []));
            commit(ADD_REQUEST_LIST_TO_STATE, {requests});
          } catch (error) {
            logger.error(error);
          }
    },

    async fetchMyRequests({state, commit}, {page, type}) {
        try {
            if(!state.token) {
                localStorage.setItem("last-url", window.location.pathname);
                loginKeycloak();
            }
            if (!page) page = 0;
            const res = await axios.get(
              `${RESOURCE_SERVER_URL}/request/${type}/mine?page=${page}`,
              {
                headers: {
                  Authorization: `Bearer ${state.token}`,
                },
              }
            );
            const requests = mapRequests(state, _.get(res, "data.content", []));
            commit(ADD_MY_REQUEST_LIST_TO_STATE, {requests});
          } catch (error) {
            logger.error(error);
          }
    },

    async createRequest({state, dispatch, commit}, {title, description, url, popupType}) {
        try {
            if(!state.token) {
                localStorage.setItem("last-url", window.location.pathname);
                loginKeycloak();
            }
            const option = {
                method: "post",
                headers: {
                  Authorization: "Bearer " + state.token,
                },
                url: `${RESOURCE_SERVER_URL}/request/${popupType}`,
                data: { title,description},
              };
        
              if (this.popupType === "udemy") {
                option.data = {
                  ...option.data,
                  url,
                };
              }
        
              const response = await axios(option);
              if(response.status === 200) {
                commit(CLOSE_CREATION_POPUP);
                dispatch(FETCH_MY_REQUEST, {page: 0, type: popupType});
                commit(TO_MY_REQUESTS_TAB);
              } else {
                  commit(ADD_ERROR_MESSAGE_TO_CREATION_POPUP, {message: response.data.message});
              }
        } catch (error) {
            logger.error(error);
        }
    },

    async deleteRequest({state, dispatch}, {type, id}) {
        const options = {
            method: "delete",
            url: `${RESOURCE_SERVER_URL}/request/${type}/${id}`,
            headers: {
                Authorization:
                    `Bearer ${state.token}`,
            },
        };

        const response = await axios(options);
        if(_.get(response, "status") === 200){
            if(state.requestTab === "my-requests") {
                dispatch(FETCH_MY_REQUEST, {page: 0, type})
            }else {
                dispatch(FETCH_REQUEST, {page: 0, type})
            }
        }
    },

    toMyRequestsTab({ commit}) {
        commit(TO_MY_REQUESTS_TAB);
    }
}

export default actions;