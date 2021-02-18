import { createStore } from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"

const store = createStore({
  state() {
    return {
      user: undefined,
      token: undefined,
      refreshToken: undefined,
      requests: [],
      myRequest: [],
      creationPopup: {
        isVisible: false,
        isLoading: false,
        errorMessage: undefined
      },
      requestTab: "all-requests",
    }
  },
  mutations,
  actions,
  getters
})

export default store;