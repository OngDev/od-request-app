<template>
  <div id="write-req-tooltip" @click="openPopup">
    <div id="smol-tip"></div>
    <span id="in-text">
      Write a request
    </span>
    here!
  </div>
</template>

<script>
import { OPEN_CREATION_POPUP } from "../store/actions"
export default {
  name: "WriteRequestTooltip",
  methods: {
    openPopup() {
      this.$store.commit(OPEN_CREATION_POPUP);
    },
  },
};
</script>

<style scoped>
#write-req-tooltip {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 26px;
  line-height: 30px;
  cursor: pointer;
  display: inline-block;
}
#in-text {
  color: #f2f2f2;
  background-color: #3d3d3d;
  border-radius: 20px;
  width: 6.95em;
  padding: 5px 18px;
  margin-right: 5px;
}
#smol-tip {
  border-left: 0.525em solid transparent;
  border-right: 0.535em solid transparent;
  border-bottom: 0.575em solid #3d3d3d;
  margin-top: -0.775em;
  margin-left: 0.525em;
  position: absolute;
}
</style>