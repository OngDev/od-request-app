<template>
	<div v-bind:key="item.title" v-for="item in todos">
		<CardItem v-bind:item="item"/>
	</div>
</template>

<script>
import CardItem from "../components/CardItem"
export default {
	name: "Card",
	props: ["todos"],
	components: {
			CardItem,
	}
};
</script>

<style scoped>

</style>
