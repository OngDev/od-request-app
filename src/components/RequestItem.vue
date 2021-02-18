<template>
  <div class="card-item">
    <div>
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
import Vote from "../components/Vote";
import { DELETE_REQUEST } from "../store/actions";
export default {
  name: "RequestItem",
  props: ["request", "type"],
  components: {
    Vote,
  },
  methods: {
    deleteRequest: async function () {
      this.$store.dispatch(DELETE_REQUEST, {type: this.type, id: this.request.id})
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
  min-height: 128px;
  padding: 20px 0 10px;
  border-bottom: 1px solid rgba(38, 38, 38, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title {
  display: flex;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 29px;
  color: #303030;
}
.item-description {
  padding: 0.75em 5.75em 0.75em 0;
  font-family: 'Roboto',sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #262626;
}
.manage-request {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.edit-request {
  font-size: 0.815em;
}
.delete-request {
  /*margin-left: auto;*/
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
  border: 1px solid rgba(38, 38, 38, 0.575);
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
