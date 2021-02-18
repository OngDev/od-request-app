const mutations = {
  addLoggedInUserToState(state, { user }) {
    if (user) {
      state.user = user
    }
  },

  removeUserOutOfState(state) {
    state.user = {};
    state.token = undefined;
    state.refreshToken = undefined;
  },

  setAccessTokenToState(state, { token, refreshToken }) {
    if (token, refreshToken) {
      state.token = token;
      state.refreshToken = refreshToken;
    }
  },

  addRequestListToState(state, { requests }) {
    if (requests) {
      state.requests = requests;
    }
  },

  addMyRequestListToState(state, { requests }) {
    if (requests) {
      state.myRequests = requests;
    }
  },

  openCreationPopup(state) {
    state.creationPopup = {
      ...state.creationPopup,
      isVisible: true,
      errorMessage: undefined
    }
  },

  closeCreationPopup(state) {
    state.creationPopup = {
      ...state.creationPopup,
      isVisible: false,
      errorMessage: undefined
    }
  },

  togglePopupLoading(state, { isLoading }) {
    state.creationPopup = {
      ...state.creationPopup,
      isLoading: isLoading
    }
  },

  addErrorMessageToCreationPopup(state, { message }) {
    state.creationPopup = {
      ...state.creationPopup,
      errorMessage: message
    }
  },

  toMyRequestsTab(state) {
    state.requestTab = "my-requests"
  }
}

export default mutations;