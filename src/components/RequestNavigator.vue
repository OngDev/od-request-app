<template>
  <div id="container" @click="navigateToRequestPage()" @mouseover="onHover()" @mouseleave="onMouseLeave()">
    <img
      v-bind:src="require(`@/assets/icons/${highlightImgSrc}`)"
      v-if="hover"
    />
    <img v-bind:src="require(`@/assets/icons/${imgSrc}`)" v-else />

    <div>
      <span id="module-name">{{ module }}</span>
      <span id="request-text"> Request</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RequestNavigator",
  data() {
    return {
      hover: false,
    };
  },
  props: {
    imgSrc: String,
    module: String,
    highlightImgSrc: String,
  },
  methods: {
    onHover() {
      this.hover = true;
    },
    onMouseLeave() {
      this.hover = false;
    },
    navigateToRequestPage() {
        this.$router.push(this.module.toLowerCase())
    }
  },
};
</script> 

<style lang="less" scoped>
@import "../main.less";
#container {
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

#container:hover {
  #module-name {
    font-weight: 600;
  }
  #request-text {
    font-weight: 500;
    color: @od-primary;
  }
}

#container div {
  font-size: 30px;
  line-height: 36px;
  font-weight: 400;
}
</style>