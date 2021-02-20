<template>
	<div id="about">
		<div class="about__description">
			<div class="about__description-img">
				<img src="@/assets/imgs/acos.jpg" alt="ACOS" />
			</div>

			<div class="about__description-content">
				<div class="about_1">
					<div>Depuis que je suis petite, le contact avec l'argile m'attire.</div>
					<div>Mais c'est en 1999, à Rome auprès du sculpteur Andréa Triscuizzi, que je découvre réellement le travail de la terre.</div>
					<div>Je suis alors étudiante en sciences politiques mais cette année d'étude en Italie me pousse à orienter mon cursus vers le domaine culturel.</div>
					<div>Depuis, surtout, le désir de créer à partir de la terre ne m'a plus quitté.</div>
					<div>J'ai étudié, dans différents ateliers, les techniques du modelage en particulier auprès de l'Atelier Terre et Feu à Paris.</div>
					<div>Aujourd'hui, j'ai la chance incroyable de pouvoir partager cette passion en ouvrant mon propre atelier de sculpture et l'envie immense de communiquer ma passion du travail de la terre.</div>
				</div>
				<!-- <div class="about__pictures">
					<div class="about__pictures-row">
						<div class="about__picture"><img src="@/assets/imgs/acos-2.jpg" alt="ACOS" /></div>
						<div class="about__picture"><img src="@/assets/imgs/acos-2.jpg" alt="ACOS" /></div>
					</div>
					<div class="about__pictures-row">
						<div class="about__picture"><img src="@/assets/imgs/acos-2.jpg" alt="ACOS" /></div>
						<div class="about__picture"><img src="@/assets/imgs/acos-2.jpg" alt="ACOS" /></div>
					</div>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'About'
}
</script>

<style lang="scss" scoped>
.about__description {
  padding: 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}

.about__description-content {
	text-align: justify;
  margin-left: 30px;
}

.about__description-img {
	img {
		border-radius: 3px;
		max-width: 400px;
		box-shadow: 10px 16px #2c3e50;
	}
}

.about__pictures {
	display: flex;
	flex-direction: column;
	width: 100%;
}

.about__pictures-row {
	display: flex;
	flex-direction: row;
}

.about__picture {
	margin-right: 10px;
	margin-bottom: 10px;
	img {
		border-radius: 3px;
		width: 200px;
		height: 200px;
	}
}

@media screen and (max-width: 999px) {
  .about__description {
    flex-direction: column;
  }
  .about__description-img {
    margin-top: 20px;
  }
  .about__description-content {
    margin-top: 50px;
    margin-left: 0px;
  }
}
</style>