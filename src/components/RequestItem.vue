<template>
  <div class="card-item">
    <div class="item-title">
      {{request.title}}
      <div v-if="request.isActive==false" class="status-container">
        <button class="item-status active">
          ACTIVE
        </button>
        <button v-on:click="ChangeState" class="item-status click-meh">
          ARCHIVED
        </button>
      </div>
      <button v-else class="item-status archived">
        ARCHIVED
      </button>
      <Vote v-bind:i="i" />
    </div>
    <div class="item-description">
      {{request.description}}
      <a v-if="request.url">{{request.url}}</a>
    </div>
    <div class="manage-request">
      <div class="edit-request">
        Edit request
      </div>
      <div v-on:click="DeleteRequest" class="delete-request">
        <el-tooltip content="Delete" placement="top">
          <i class="el-icon-delete-solid"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Vote from "../components/Vote"
export default {
  name: "RequestItem",
  props: ["request"],
  components: {
    Vote, 
  },
  methods: {
    DeleteRequest: function() {
      var config = {
        method: "delete",
        url: "https://od-request-api.herokuapp.com/request/videos/" + this.request.id,
        headers: { 
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzEyNDAwYS03NTkyLTE2ZjAtODE3NS05MjdkNjBjYTAwMDAiLCJpYXQiOjE2MDQ0ODA0OTEsImV4cCI6MTYwNTM0NDQ5MX0.dguhTrTw5Y2c7YQ0BPTwO53hiDJmugRU4Be74mPUwK4CJxrYI1nz-2XQYPs5ObMPh9nJZytCUUkz9XnO6N-UuA"
        }
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    ChangeState: function() {
      
    }
  }
};
</script>

<style scoped>
  * {
    font-family: 'Nunito', sans-serif;
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
