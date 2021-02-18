<template>
	<div v-bind:key="request.title" v-for="request in requests" class="request-tab-panel">
		<RequestItem :request="request" :type="type"/>
	</div>
</template>

<script>
import RequestItem from "../components/RequestItem"
export default {
	name: "RequestList",
	props: ["requests","type"],
	components: {
		RequestItem,
	}
};
</script>

<style scoped>
.request-tab-panel {
  background-color: #fffdfa;
  box-shadow: 0px 0px 50px rgba(255, 179, 71, 0.05);
  padding: 0 40px 20px;
  border-radius: 5px;
  border: 1px #ffb34733 solid;
}
</style>
