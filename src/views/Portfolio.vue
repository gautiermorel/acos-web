<template>
	<div id="portfolio">
		Les sculputres d'ACOS:

		<div>Chaque oeuvre est unique...</div>

		<FacebookFeed />
	</div>
</template>

<script>
import FacebookFeed from '@/components/FacebookFeed.vue';

export default {
	name: 'Portfolio',
	components: {
		FacebookFeed
	}
}
</script>

<style lang="scss" scoped>
</style>