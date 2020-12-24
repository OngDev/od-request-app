const mutations = {
    addLoggedInUserToState(state, payload) {
      if (payload && payload.user) {
        state.user = payload.user
      }
    },
  
    removeUserOutOfState(state) {
      state.user = {};
      state.token = undefined;
      state.refreshToken = undefined;
    },

    setAccessTokenToState(state, payload) {
      const {token, refreshToken} = payload;
      if(token, refreshToken) {
        state.token = token;
        state.refreshToken = refreshToken;
      }
    }
  }

export default mutations;