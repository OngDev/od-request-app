import { reactive } from "vue"

const store = {
  state: reactive({
    user: undefined,
  }),

  addLoggedInUserToState(payload) {
    if (payload && payload.user) {
      this.state.user = payload.user
    }
  },

  removeUserOutOfState() {
    this.state.user = {};
  }
}

export default store;