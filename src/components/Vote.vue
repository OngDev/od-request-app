<template>
	<div class="vote-section">
		<i class="el-icon-arrow-up active"></i>
		<span class="vote-point active">10</span>
		<i class="el-icon-arrow-down"></i>
	</div>
</template>

<script>
export default {
  name: "Vote",
};
</script>

<style scoped>
	.vote-section {
		margin-left: auto;
		font-weight: 300;
	}
	.vote-point {
		padding: 0 0.65em;
	}
</style>
