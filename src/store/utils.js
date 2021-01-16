import _ from "lodash";
export function mapRequests(state, requests) {
    return _.map(requests, (request) => {
        const mappedRequest = {
            ...request,
            voteCount: 0,
            upVoteCount: 0,
            downVoteCount: 0,
            myVote: "none", // myVote can be up, down, none
        };
        const upVotes = _.filter(request.votes, (vote) => vote.isUp);
        const downVotes = _.filter(request.votes, (vote) => !vote.isUp);

        mappedRequest.voteCount = upVotes.length - downVotes.length;

        const myVote = _.find(request.votes, {
            email: _.get(state, "user.email"),
        });

        if (myVote) {
            mappedRequest.myVote = myVote.isUp ? "up" : "down";
        }

        return mappedRequest;
    });
}