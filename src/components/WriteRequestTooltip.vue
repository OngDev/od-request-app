<template>
	<div id="write-req-tooltip">
		<div id="smol-tip"></div>
		<span id="in-text">
				Write a request 
				<i class="el-icon-edit"></i>
		</span>
	</div>
</template>

<script>
export default {
  name: "WriteRequestTooltip",
}
</script>

<style scoped>
	#write-req-tooltip {
		font-family: 'Roboto', sans-serif;
		font-weight: 100;
		font-size: 1.175em;
		margin-bottom: 2.125em;
	}
	#in-text {
		color: #f2f2f2;
		background-color: #3d3d3d;
		border-radius: 20px;
		width: 6.95em;
		padding: 0.415em 0.65em;
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