import _ from "lodash";
import {mapRequests} from "./utils";

const mutations = {
    addLoggedInUserToState(state, {user}) {
        if (user) {
            state.user = user
            state.requests = mapRequests(state, state.requests);
            state.myRequests = mapRequests(state, state.myRequests);
        }
    },

    removeUserOutOfState(state) {
        state.user = {};
        state.token = undefined;
        state.refreshToken = undefined;
    },

    setAccessTokenToState(state, {token, refreshToken}) {
        if (token, refreshToken) {
            state.token = token;
            state.refreshToken = refreshToken;
        }
    },

    addRequestListToState(state, {requests}) {
        if (requests) {
            state.requests = requests;
        }
    },

    addMyRequestListToState(state, {requests}) {
        if (requests) {
            state.myRequests = requests;
        }
    },

    openCreationPopup(state, {
        popupTitle,
        popupDesc,
        popupType,
        id,
        inputTitle,
        inputDesc,
        inputUrl,
        isCreation,
    }) {
        state.popup = {
            ...state.popup,
            isVisible: true,
            errorMessage: undefined,
            popupTitle,
            popupDesc,
            popupType,
            id,
            inputTitle,
            inputDesc,
            inputUrl,
            isCreation
        }
    },

    closeCreationPopup(state) {
        state.popup = {
            ...state.popup,
            isVisible: false,
            errorMessage: undefined,
            popupTitle: undefined,
            popupDesc: undefined,
            popupType: undefined,
            id: undefined,
            inputTitle: undefined,
            inputDesc: undefined,
            inputUrl: undefined,
        }
    },

    togglePopupLoading(state, {isLoading}) {
        state.popup = {
            ...state.popup,
            isLoading: isLoading
        }
    },

    addErrorMessageToCreationPopup(state, {message}) {
        state.popup = {
            ...state.popup,
            errorMessage: message
        }
    },

    toMyRequestsTab(state) {
        state.requestTab = "my-requests"
    },
    updateRequest(state, {updatedRequest}) {
        state.requests = _.map(state.requests, (request) => {
            if (request.id === updatedRequest.id) return updatedRequest;
            return request;
        });
        state.myRequests = _.map(state.myRequests, (request) => {
            if (request.id === updatedRequest.id) return updatedRequest;
            return request;
        });
    },

    updateMessageBox(state, {type, message}) {
        state.messageBox = {
            type,
            message
        };
    }
}

export default mutations;