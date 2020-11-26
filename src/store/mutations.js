const mutations = {
    addLoggedInUserToState(state, payload) {
      if (payload && payload.user) {
        state.user = payload.user
      }
    },
  
    removeUserOutOfState(state) {
      state.user = {};
    },
  }

export default mutations;