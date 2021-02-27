<template>
  <div class="request-list">
    <RequestItem v-bind:key="request.title" v-for="request in requests" :request="request" :type="type"/>
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

<style>

.request-list .request-item:not(:last-child){
  margin-bottom: 20px;
}
</style>
