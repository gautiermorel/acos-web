<template>
	<div id="portfolio">
		Les sculputres d'ACOS:

		<div>Chaque oeuvre est unique...</div>

		<InstagramList />
	</div>
</template>

<script>
import InstagramList from '@/components/InstagramList.vue';

export default {
	name: 'Portfolio',
	components: {
		InstagramList
	}
}
</script>

<style lang="scss" scoped>
</style>