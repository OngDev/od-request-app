const getters = {
    requests: state => {
        return state.requests;
    },

    myRequests: state => {
        return state.myRequests;
    },

    user: state => {
        return state.user;
    },

    token: state => {
        return state.token;
    },

    popup: state => {
        return state.popup;
    },

    requestTab: state => {
        return state.requestTab;
    }
};

export default getters;