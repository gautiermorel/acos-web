<template>
	<div id="home">
		<video-background :src="require('@/assets/videos/home.mp4')" style="max-height: 400px; height: 100vh">
			<div class="home__tagline">
				<h1><span>Laissez-vous surprendre par le travail de la terre et par vous même !</span></h1>
				<div><span>Sculpter c'est ouvrir son regard, permettre à l'oeil de voir, à la main de traduire. Apparaissent alors des volumes, des formes, des mouvements ... et puis l'émerveillement et la joie immense de Créer.</span></div>
				<div><span>Echappez- vous quelques heures du monde et du temps et venez découvrir vos talents en donnant vie à la matière !</span></div>
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

		<div>----</div>


    <h2 class="home__subtitle">Le travail de la terre</h2>

		<div class="home__landwork">

			<div>Le travail de la terre</div>

			<div>Le travail de la terre est d'abord un moment de joie et d’émerveillement, celui de voir et de sentir la terre se transformer sous vos mains et devenir création !</div>

			<div>Du simple plaisir de pétrir la terre à l’étonnement de voir naître une forme, un volume, la sculpture favorise un retour aux sources et apporte en cela un plaisir authentique !</div>

			<div>Sculpter c'est apprivoiser la matière pour lui donner du sens, du mouvement , de la vie !</div>

			<div>On peut classer le travail en sculpture en deux grands groupes : la taille et l'assemblage.</div>

			<div>La technique de la taille consiste à enlever de la matière pour créer la forme (dans la pierre ou le bois par exemple).</div>
			​
			<div>La technique de l'assemblage consiste à ajouter de la matière pour créer la forme (avec l'argile ou la cire, par exemple).</div>

			<div>De toutes les techniques de la sculpture, la plus simple à mettre en oeuvre, et aussi la plus ancienne , est la technique du modelage à main libre. Elle n’exige pas nécessairement l’utilisation d’outils puisque la main du sculpteur suffit à modeler une matière naturelle et malléable comme l’argile.</div>
			​
			<div>Le sculpteur connaît deux procédés pour modeler cette matière : le modelage par accumulation de matière et le modelage par suppression de matière. Ce dernier procédé est facilité par l’utilisation d’outils permettant d’enlever de la matière au bloc initial, ces outils s’appellent des « mirettes ». C'est bien souvent en combinant les deux procédés que le sculpteur façonne son oeuvre.</div>

			​
			<div>Le modelage permet au sculpteur de réaliser rapidement son ébauche dans l’argile, puis de la modifier et de la rectifier à volonté tant que l’argile ne sèche pas. Ainsi les artistes prennent soin de préserver leurs sculptures en l'humidifiant régulièrement et en les conservant sous des plastiques ou linge humide entre chaque séance de travail.</div>

			<div>A l'atelier, nous modelons et le matériau utilisé est l’argile.</div>

			<div>Une fois l'oeuvre réalisée, elle devra être évidée, séchée pendant quelques semaines puis cuite dans un four spécial pouvant monter à de fortes températures (1300°). La terre cuite ainsi obtenue pourra éventuellement être patinée.</div>
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

<style lang="scss">

.videobg-content {
  // opacity: 0.3;
}

</style>

<style lang="scss" scoped>
.home__links {
	display: flex;
	flex-direction: row;
	align-content: center;
	justify-content: space-around;
  padding: 50px;
}

.home__tagline {
	color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
  height: 100%;

  h1 {
    font-size: 30px;
  }

  span {
    // background-color: rgba(0, 0, 0, 1);
  }
}

.home__landwork {
	&:after {
		content: "";
    width: 100px;
    height: 100px;
		position: absolute;
		background-image: url("~@/assets/svg/tool.svg");
		background-repeat: no-repeat;
	}
}

.home__subtitle {
  font-size: 20px;
}
</style>