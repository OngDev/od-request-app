<template>
  <router-view />
</template>

<script>
import store from "./store/index";
export default {
  data: () => ({
    shareState: store.state,
  }),
  mounted() {
    store.removeUserOutOfState();
  },
};
</script>
<style lang="less"/>
