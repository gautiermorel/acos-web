<template>
	<div id="about">
		<div class="about__description">

			<div class="about__description-content">
				<div>Depuis que je suis petite, le contact avec l'argile m'attire.</div>
				<div>Mais c'est en 1999, à Rome auprès du sculpteur Andréa Triscuizzi, que je découvre réellement le travail de la terre.</div>
				<div>Je suis alors étudiante en sciences politiques mais cette année d'étude en Italie me pousse à orienter mon cursus vers le domaine culturel.</div>
				<div>Depuis, surtout, le désir de créer à partir de la terre ne m'a plus quitté.</div>
				<div>J'ai étudié, dans différents ateliers, les techniques du modelage en particulier auprès de l'Atelier Terre et Feu à Paris.</div>
				<div>Aujourd'hui, j'ai la chance incroyable de pouvoir partager cette passion en ouvrant mon propre atelier de sculpture et l'envie immense de communiquer ma passion du travail de la terre.</div>
			</div>
		</div>

		<div>------</div>

		<div>En savoir plus sur Andréa Triscuzzi</div>
		<div>http://www.artonweb.it/arteartonweb/articolo35bis.html</div>
	</div>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style lang="scss" scoped>
.about__description {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-content: center;
	padding: 50px;
	height: 100%;

  background-image: url("~@/assets/imgs/acos.jpg");
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-color: red;

	.about__description-content {
		text-align: justify;
		padding-right: 50px;
		width: 50%;
	}

	.about__description-img {
		width: 50%;
		
	}
}
</style>