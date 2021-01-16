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

    creationPopup: state => {
        return state.creationPopup;
    }
};

export default getters;