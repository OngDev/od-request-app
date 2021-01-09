 <template>
  <el-tabs v-model="activeTab" @tab-click="handleClick">
    <el-tab-pane label="All requests" name="all-requests">
      <RequestList :requests="requests" />
    </el-tab-pane>
    <el-tab-pane label="My requests" name="my-requests">
      <RequestList :requests="myRequests" />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import _ from "lodash";
import axios from "axios";
import EnvProvider from "jvjr-docker-env";
import RequestList from "../components/RequestList";
const RESOURCE_SERVER_URL = EnvProvider.value("RESOURCE_SERVER_URL");
export default {
  props: ["type"],
  data() {
    return {
      activeTab: "all-requests",
      requests: [],
      myRequests: [],
    };
  },
  components: {
    RequestList,
  },
  name: "RequestTabContainer",
  async mounted() {
    await this.fetchRequests(0);
  },
  methods: {
    async fetchRequests(page) {
      try {
        if (!page) page = 0;
        const res = await axios.get(
          `${RESOURCE_SERVER_URL}/request/${this.type}?page=${page}`
        );
        this.requests = this.mapRequests(_.get(res, "data.content", []));
      } catch (error) {
        console.log(error);
      }
    },
    async fetchMyRequests(page) {
      try {
        if (!page) page = 0;
        const res = await axios.get(
          `${RESOURCE_SERVER_URL}/request/${this.type}/mine?page=${page}`,
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.token}`,
            },
          }
        );
        this.myRequests, this.mapRequests(_.get(res, "data.content", []));
      } catch (error) {
        console.log(error);
      }
    },
    async handleClick(tab) {
      if (tab.props.name === "all-requests") {
        await this.fetchRequests();
      } else {
        await this.fetchMyRequests();
      }
    },

    mapRequests(requests) {
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
          email: _.get(this.$state, "user.email"),
        });

        if (myVote) {
          mappedRequest.myVote = myVote.isUp ? "up" : "down";
        }

        return mappedRequest;
      });
    },
  },
};
</script>

<style scoped>
* {
  font-family: "Nunito", sans-serif;
}
</style>