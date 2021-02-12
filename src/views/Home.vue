<template>
	<div id="home">
		<video-background :src="require('@/assets/videos/home.mp4')" style="max-height: 400px; height: 100vh; z-index: -1">
			<div class="home__tagline">
				<h1><span>Laissez-vous surprendre par le travail de la terre et par vous même !</span></h1>
				<div>Sculpter c'est ouvrir son regard, permettre à l'oeil de voir, à la main de traduire. Apparaissent alors des volumes, des formes, des mouvements... et puis l'émerveillement et la joie immense de Créer.</div>
				<div>Echappez- vous quelques heures du monde et du temps et venez découvrir vos talents en donnant vie à la matière !</div>
			</div>
		</video-background>

		<div class="home__links">
			<router-link to="/cours">
				<discover-more class="hover-target" button-text="Apprendre avec ACOS" />
			</router-link>

			<router-link to="/creations">
				<discover-more class="hover-target" button-text="Les sculptures d'ACOS" />
			</router-link>
		</div>

		<div class="home__sections">
			<div class="home__section">
				<div class="home__section-img-content">
					<div class="home__section-img">
						<img src="@/assets/imgs/hands.jpg" alt="Travail de la terre" />
					</div>
				</div>
				<div class="home__section-content">
					<h2 class="home__subtitle">Le travail de la terre</h2>
					<div class="home__divider"></div>
					<div>Le travail de la terre est d'abord un moment de joie et <span class="home__highlight">d’émerveillement</span>, celui de voir et de sentir la terre se transformer sous vos mains et devenir <span class="home__highlight">création</span> !</div>
					<div>Du simple plaisir de pétrir la terre à l’étonnement de voir naître une forme, un volume, la sculpture favorise un retour aux sources et apporte en cela un plaisir <span class="home__highlight">authentique</span> !</div>
					<div>Sculpter c'est apprivoiser la matière pour lui donner du sens, du mouvement, de la <span class="home__highlight">vie</span>!</div>
				</div>
			</div>

			<div class="home__section--reverse">
				<div class="home__section-img-content">
					<div class="home__section-img">
						<img src="@/assets/imgs/taille.jpg" alt="La taille et l'assemblage" />
					</div>
				</div>
				<div class="home__section-content">
					<h2 class="home__subtitle">La taille et l'assemblage</h2>
					<div class="home__divider"></div>
					<div>On peut classer le travail en sculpture en deux grands groupes : la taille et l'assemblage.</div>
					<div>La technique de la <span class="home__highlight">taille</span> consiste à enlever de la matière pour créer la forme (dans la pierre ou le bois par exemple).</div>
					<div>La technique de l'<span class="home__highlight">assemblage</span> consiste à ajouter de la matière pour créer la forme (avec l'argile ou la cire, par exemple).</div>
				</div>
			</div>

			<div class="home__section">
				<div class="home__section-img-content">
					<div class="home__section-img">
						<img src="@/assets/imgs/modelage.jpg" alt="Le Modelage" />
					</div>
				</div>
				<div class="home__section-content">
					<h2 class="home__subtitle">Le modelage</h2>
					<div class="home__divider"></div>
					<div>De toutes les techniques de la sculpture, la plus simple à mettre en oeuvre, et aussi la plus ancienne, est la technique du modelage à main libre. Elle n’exige pas nécessairement l’utilisation d’outils puisque la main du sculpteur suffit à modeler une matière naturelle et malléable comme l’argile.</div>
					<div>Le sculpteur connaît deux procédés pour modeler cette matière : le modelage par accumulation de matière et le modelage par <span class="home__highlight">suppression de matière</span>. Ce dernier procédé est facilité par l’utilisation d’outils permettant d’enlever de la matière au bloc initial, ces outils s’appellent des <span class="home__highlight">« mirettes »</span>. C'est bien souvent en combinant les deux procédés que le sculpteur façonne son oeuvre.</div>
					<div>Le modelage permet au sculpteur de réaliser rapidement son ébauche dans l’argile, puis de la modifier et de la rectifier à volonté tant que l’argile ne sèche pas. Ainsi les artistes prennent soin de préserver leurs sculptures en l'humidifiant régulièrement et en les conservant sous des plastiques ou linge humide entre chaque séance de travail.</div>
					<div>A l'atelier, nous modelons et le matériau utilisé est l’argile.</div>
					<div>Une fois l'oeuvre réalisée, elle devra être évidée, séchée pendant quelques semaines puis cuite dans un four spécial pouvant monter à de fortes températures (1300°). La terre cuite ainsi obtenue pourra éventuellement être patinée.</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import DiscoverMore from '@/components/DiscoverMore.vue'
import VideoBackground from 'vue-responsive-video-background-player'

export default {
	name: 'Home',
	components: {
		VideoBackground,
		DiscoverMore
	}
}
</script>

<style lang="scss" scoped>
.home__links {
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-around;
	padding: 50px;
}

.home__sections {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-content: center;
	align-items: center;
}

.home__section {
	padding: 30px;
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: center;
	margin-bottom: 50px;

	.home__subtitle {
		font-size: 20px;
	}

	.home__section-img-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-direction: row-reverse;
		min-width: 40%;
		margin-top: 60px;

		.home__section-img {
			position: relative;

			&::after {
				position: absolute;
				top: -40px;
				right: -40px;
				content: "";
				width: 40px;
				height: 40px;
				border-width: 3px 3px 0 0;
				border-style: solid;
			}

			img {
				max-height: 300px;
				border-radius: 3px;
				max-width: 75vw;
			}
		}
	}

	.home__section-content {
		text-align: justify;
		line-height: 2.5rem;
		padding-left: 50px;
		padding-right: 50px;
	}
}

.home__section--reverse {
	padding: 30px;
	display: flex;
	flex-direction: row-reverse;
	align-content: center;
	justify-content: center;
	margin-bottom: 50px;

	.home__subtitle {
		font-size: 20px;
	}

	.home__section-img-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-direction: row;
		min-width: 40%;
		margin-top: 60px;

		.home__section-img {
			position: relative;

			&::after {
				position: absolute;
				top: -40px;
				right: -40px;
				content: "";
				width: 40px;
				height: 40px;
				border-width: 3px 3px 0 0;
				border-style: solid;
			}

			img {
				max-height: 300px;
				border-radius: 3px;
				max-width: 75vw;
			}
		}
	}

	.home__section-content {
		text-align: justify;
		line-height: 2.5rem;
		padding-left: 50px;
		padding-right: 50px;
	}
}

@media screen and (max-width: 1200px) {
	.home__section,
	.home__section--reverse {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-items: space-around;
	}
}

.home__divider {
	font-size: 0;
	line-height: 0;
	margin-bottom: 20px;
	&::after {
		content: "";
		display: inline-block;
		width: 60px;
		height: 3px;
		background-color: rgb(246, 236, 221);
	}
}

.home__tagline {
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	align-content: center;
	height: 100%;
	padding-left: 50px;
	padding-right: 50px;

	h1 {
		font-size: 30px;
	}
}

@media screen and (max-width: 1200px) {
	.home__tagline {
		font-size: 12px;
	}
}

.home__highlight {
	background-image: linear-gradient(113.1deg, rgba(246, 236, 221, 0.5) 14%, rgba(245, 229, 206, 0.5) 80.5%, rgba(236, 217, 189, 0.5) 100.6%);
	background-repeat: no-repeat;
	background-size: 100% 0.07em;
	background-position: 0 84%;
	padding: 7px 0;
	-webkit-transition: background-size 0.25s cubic-bezier(0.475, 0.425, 0, 0.995);
	transition: background-size 0.25s cubic-bezier(0.475, 0.425, 0, 0.995);

	&:hover {
		background-size: 100% 88%;
	}
}
</style>