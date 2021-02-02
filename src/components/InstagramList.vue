<template>
	<div id="instragram-list">
		INSTAGRAM LIST:

		<div class="instragram-list">
			<div>OEUVRE #1</div>
			<div>OEUVRE #2</div>
			<div>OEUVRE #3</div>
			<div>OEUVRE #4</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InstragramList'
}
</script>

<style lang="scss" scoped>
.instragram-list {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
}
</style>