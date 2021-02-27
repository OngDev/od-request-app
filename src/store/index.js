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
      myRequests: [],
      popup: {
        isVisible: false,
        isLoading: false,
        errorMessage: undefined,
        popupTitle: "",
        popupDesc: "",
        popupType: "",
        id: "",
        inputTitle: "",
        inputDesc: "",
        inputUrl:"",
        isCreation: false,
      },
      messageBox: {
        type: "",
        message: ""
      },
      requestTab: "all-requests",
    }
  },
  mutations,
  actions,
  getters
})

export default store;