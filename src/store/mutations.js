import _ from "lodash";
import {mapRequests} from "./utils";

const mutations = {
    addLoggedInUserToState(state, {user}) {
        if (user) {
            state.user = user
            state.requests = {
                items: state.requests.items && mapRequests(state, state.requests.items),
                total: state.requests.total
            };
            state.myRequests = {
                items: state.myRequests.items && mapRequests(state, state.myRequests.items),
                total: state.myRequests.total
            };
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

    addRequestListToState(state, {requests, total}) {
        if (requests) {
            state.requests = {
                items: requests,
                total
            };
        }
    },

    addMyRequestListToState(state, {requests, total}) {
        if (requests) {
            state.myRequests = {
                items: requests,
                total
            };
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

    changeRequestTab(state, {tab}) {
        state.requestTab = tab
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