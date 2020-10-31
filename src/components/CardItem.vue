<template>
  <div class="card-item">
    <div class="item-title">
      {{item.title}}
      <button class="item-status">
        {{item.status}}
      </button>
      <Vote />
    </div>
    <div class="item-description">
      {{item.description}}
    </div>
    <div class="manage-request">
      <div class="edit-request">
        Edit request
      </div>
      <div class="delete-request">
        <el-tooltip content="Delete" placement="top">
          <i class="el-icon-delete-solid"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import Vote from "../components/Vote"
export default {
  name: "CardItem",
  props: ["item"],
  components: {
    Vote, 
  },
};
</script>

<style scoped>
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
    margin-left: 0.45em;
    padding: 0 0.55em;
    background-color: #f05d20;
    font-size: 0.5em;
    color: #f2f2f2;
    border-radius: 7px;
    text-transform: uppercase;
  }
</style>
