<template>
  <div class="card-item">
    <div class="item-title">
      {{ request.title }}
      <div v-if="request.isActive == false" class="status-container">
        <button class="item-status active">ACTIVE</button>
        <button v-on:click="ChangeState" class="item-status click-meh">
          ARCHIVED
        </button>
      </div>
      <button v-else class="item-status archived">ARCHIVED</button>
      <Vote
        :voteCount="request.voteCount"
        :upVoteCount="request.upVoteCount"
        :downVoteCount="request.downVoteCount"
        :myVote="request.myVote"
      />
    </div>
    <div class="item-description">
      {{ request.description }}
      <a v-if="request.url">{{ request.url }}</a>
    </div>
    <div class="manage-request">
      <div class="edit-request">Edit request</div>
      <div v-on:click="deleteRequest" class="delete-request">
        <el-tooltip content="Delete" placement="top">
          <i style="cursor: pointer;" class="el-icon-delete"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash"
import EnvProvider from "jvjr-docker-env";
const RESOURCE_SERVER_URL = EnvProvider.value("RESOURCE_SERVER_URL");
import Vote from "../components/Vote";
export default {
  name: "RequestItem",
  props: ["request", "type"],
  components: {
    Vote,
  },
  methods: {
    deleteRequest: async function () {
      var options = {
        method: "delete",
        url: `${RESOURCE_SERVER_URL}/request/${this.type}/${this.request.id}`,
        headers: {
          Authorization:
            `Bearer ${this.$store.state.token}`,
        },
      };

      const response = await axios(options);
      if(_.get(response, "status") === 200){
        this.$store.commit()
      }
    },
    ChangeState: function () {},
  },
};
</script>

<style scoped>
* {
  font-family: "Nunito", sans-serif;
}
.card-item {
  padding: 1em;
  border-bottom: 1px solid rgb(38, 38, 38, 0.15);
}
.item-title {
  display: flex;
  font-size: 1.315em;
  font-weight: 600;
}
.item-description {
  padding: 0.75em 5.75em 0.75em 0;
}
.manage-request {
  display: flex;
}
.edit-request {
  font-size: 0.815em;
}
.delete-request {
  margin-left: auto;
  font-size: 1.125em;
}
.item-status {
  border-style: none;
  margin-left: 0.55em;
  padding: 0.35em 0.55em;
  font-size: 0.515em;
  color: #f2f2f2;
  border-radius: 20px;
}
.active {
  background-color: #f05d20;
}
.click-meh {
  opacity: 0.65;
  border: 1px solid rgb(38, 38, 38, 0.575);
  color: #262626;
  transition: 0.15s ease;
}
.click-meh:hover {
  opacity: 1;
  background-color: #262626;
  color: #f2f2f2;
}
.archived {
  background-color: #262626;
}
</style>
