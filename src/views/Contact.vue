<template>
	<div id="about">
		<div class="about__description">
			<div class="about__description-content">
				<div>Un formulaire de contact est en cours de création, merci de me contacter directement par email ou par téléphone pour plus d'information :)</div>
			</div>

			<div class="about__description-img">
				<img src="@/assets/imgs/king.jpg" alt="ACOS" />
			</div>
		</div>
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

@media screen and (max-width: 999px) {
  .about__description {
    flex-direction: column;
  }
  .about__description-img {
    margin-top: 20px;
  }
}
</style>