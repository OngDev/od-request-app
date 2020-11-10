<template>
  <router-view />
</template>

<script>
import { REMOVE_USER_OUT_OF_STATE } from "./store/actions"
export default {
  mounted() {
    this.$store.commit(REMOVE_USER_OUT_OF_STATE);
  },
};
</script>

<style lang="less" />
