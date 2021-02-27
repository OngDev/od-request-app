<template>
  <div class="vote-section">
    <i @click.prevent="$emit('upVote')" class="el-icon-arrow-up vote-icon" :class="{upVote: myVote && myVote === 'up'}"></i>
    <span class="vote-point-up">{{ upVoteCount || 0 }}</span>|
    <span class="vote-point">{{ voteCount || 0 }}</span>|
    <span class="vote-point-down">{{ downVoteCount || 0 }}</span>
    <i @click.prevent="$emit('downVote')" class="el-icon-arrow-down vote-icon" :class="{downVote: !myVote || myVote==='down'}"></i>
  </div>
</template>

<script>
//import axios from "axios";
export default {
  name: "Vote",
  props: {
    voteCount: Number,
    upVoteCount: Number,
    downVoteCount: Number,
    myVote: String,
  },
};
</script>

<style scoped>
.vote-section {
  margin-left: auto;
  font-weight: 300;
  display: flex;
  align-items: center;
  cursor: default;
}
.vote-point {
  font-size: 24px;
  line-height: 28px;
}

.vote-point-up {
  font-size: 16px;
  line-height: 28px;
  color: #baed91;
}

.vote-point-down {
  font-size: 16px;
  line-height: 28px;
  color: #fea3aa;

}

.upVote {
  color: #baed91;
}

.downVote {
  color: #fea3aa;
}

.vote-icon {
  font-size: 32px;
  cursor: pointer;
}
</style>
