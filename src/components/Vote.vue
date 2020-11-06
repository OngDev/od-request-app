<template>
	<div class="vote-section">
		<i v-on:click="UpVote" class="el-icon-arrow-up active"></i>
		<span v-if="voutecount==null" class="vote-point active">{{votecount=0}}</span>
		<span v-else class="vote-point active">{{votecount}}</span>
		<i v-on:click="DownVote" class="el-icon-arrow-down"></i>
	</div>
</template>

<script>
import axios from "axios"
export default {
  name: "Vote",
  props: ["i"],
  methods: {
		UpVote: function() {
			var data = "";
      var config = {
        url: "https://od-request-api.herokuapp.com/request/videos" + this.i.id + "/upvote",
        headers: { 
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhYzEyNDAwYS03NTkyLTE2ZjAtODE3NS05MjdkNjBjYTAwMDAiLCJpYXQiOjE2MDQ0ODA0OTEsImV4cCI6MTYwNTM0NDQ5MX0.dguhTrTw5Y2c7YQ0BPTwO53hiDJmugRU4Be74mPUwK4CJxrYI1nz-2XQYPs5ObMPh9nJZytCUUkz9XnO6N-UuA"
        },
        data : data
      };
			axios.get(config)
			return this.votecount++
		},
		DownVote: function() {
			axios.get("https://od-request-api.herokuapp.com/request/videos" + this.i.id + "/downvote")
			return this.votecount++
		},
	},
	data() {
		return {
			votecount: this.i.vote
		}
	}
};
</script>

<style scoped>
	.vote-section {
		margin-left: auto;
		font-weight: 300;
	}
	.vote-point {
		padding: 0 0.65em;
	}
</style>
