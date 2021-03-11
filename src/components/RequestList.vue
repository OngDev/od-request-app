<template>
  <div class="request-list">
    <RequestItem v-bind:key="request.title" v-for="request in requests.items" :request="request" :type="type"/>
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
.request-list{
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1 1 auto;
  width: 100%;
}
.request-list .request-item:not(:last-child){
  margin-bottom: 20px;
}
</style>
