<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="all-requests" name="first">All requests</el-tab-pane>
    <el-tab-pane label="my-requests" name="second">My request</el-tab-pane>
  </el-tabs>
</template>

<script>
  export default {
    data() {
      return {
        activeName: "first"
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>
    * {
        font-family: 'Nunito', sans-serif;
    }
</style>