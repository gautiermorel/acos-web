<template>
	<div id="about">
		<div class="about__description">
			<div class="about__description-content">
				<div>Nom:</div>
				<div>Prénom:</div>
				<div>Tel:</div>
				<div>Message:</div>
			</div>

			<div class="about__description-img">
				<img src="@/assets/imgs/king.jpg" alt="ACOS" />
			</div>
		</div>

		<div>------</div>

		<div>En savoir plus sur Andréa Triscuzzi</div>
		<div>http://www.artonweb.it/arteartonweb/articolo35bis.html</div>
	</div>
</template>

<script>
export default {
	name: 'Contact'
}
</script>

<style lang="scss" scoped>
.about__description {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
  padding: 50px;

  .about__description-content {
    text-align: justify;
    padding-right: 50px;
  }

	.about__description-img {
		img {
      border-radius: 3px;
			max-width: 400px;
			box-shadow: 10px 16px #2c3e50;
		}
	}
}
</style>