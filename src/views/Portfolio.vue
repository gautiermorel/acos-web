<template>
	<div id="portfolio">
		<div class="courses__banner">
			<div class="courses__banner-text">
				<h1>Les sculptures d'ACOS</h1>
			</div>
		</div>

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
.courses__banner {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/imgs/portfolio.jpg");
	height: 400px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
  margin-bottom: 100px;

	.courses__banner-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
}
</style>