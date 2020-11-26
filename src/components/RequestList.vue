<template>
	<div v-bind:key="request.title" v-for="request in requests">
		<RequestItem :request="request"/>
	</div>
</template>

<script>
import RequestItem from "../components/RequestItem"
export default {
	name: "RequestList",
	props: ["requests"],
	components: {
		RequestItem,
	}
};
</script>

<style scoped>

</style>
