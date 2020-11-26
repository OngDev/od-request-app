import { createStore } from "vuex"
import mutations from "./mutations"

const store = createStore({
  state() {
    return {
      user: undefined,
    }
  },
  mutations
})

export default store;