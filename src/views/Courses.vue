<template>
	<div id="courses">
		<div class="courses__banner">
			<div class="courses__banner-text">
				<h1>Apprendre avec ACOS</h1>
			</div>
		</div>

		<div class="home__sections">
			<div class="home__section">
				<div class="home__section-img-content">
					<div class="home__section-img">
						<img src="@/assets/imgs/atelier-2.jpg" alt="L'Atelier" />
					</div>
				</div>
				<div class="home__section-content">
					<h2 class="home__subtitle">L'Atlelier</h2>
					<div class="home__divider"></div>
					<div>Au coeur d'Amiens mais niché dans son écrin de verdure, l'atelier est un havre de paix et de création. Ce n'est pas une école d'art mais un lieu de Vie créative.</div>
					<div>L'atelier est un espace privilégié pour découvrir le plaisir de la création mais aussi les exigences du modelage. Les moments passés à l'atelier seront un moment de détente pour vous tout en étant instructif.</div>
					<div>L'atelier n'est pas une école d'art. Son objectif est que vous puissiez vous exprimer à travers le modelage de l'argile, que vos mains façonnent la terre et que vous découvriez les clefs pour lui donner vie. Si vous êtes débutant, je vous propose de commencer à apprivoiser la terre à partir d'un exercice qui vous permettra d'en appréhender les bases pour maîtriser les volumes.</div>
					<div>L'atelier dispose d'un four de haute température (1300) de 150 LT pour la cuisson des pièces.</div>
				</div>
			</div>

			<div class="home__section--reverse">
				<div class="home__section-img-content">
					<div class="home__section-img">
						<img src="@/assets/imgs/groupe.jpg" alt="Travail de groupe" />
					</div>
				</div>
				<div class="home__section-content">
					<h2 class="home__subtitle">Travail de groupe</h2>
					<div class="home__divider"></div>
					<div>Au sein d'un petit groupe, chacun travaille sur son sujet librement et est accompagné selon ses besoins au fil de la réalisation de son projet. ​ Travailler en groupe permet l'échange d'idées, d'expériences, de techniques et mène à un enrichissement mutuel. Chacun se nourrit du travail de l’autre dans un climat de partage. Aussi, nous sommes tous confrontés, à un moment ou à un autre, aux mêmes obstacles et chercher à les dépasser ensemble est une vraie source de plaisir et bien sûr d'apprentissage. L'atelier sera cependant limité à 7 personnes.</div>
					<div>La sculpture permet à chacun, quelque soit son niveau, de créer des silhouettes figuratives ou bien de laisser aller son imaginaire à des formes plus abstraites. Avec le temps, vous allez vous étonner et laisser agir votre sens de l'observation et votre créativité !</div>
					<div>Dans cet espace de partage, je suis présente pour vous assister dans votre démarche et pour vous initier si vous êtes débutant. Je vous donne les bases techniques et mon avis.</div>
				</div>
			</div>

			<div class="courses__divider"></div>

			<div>Sont abordés pendant les séances à l'atelier :</div>
			<ul>
				<li>la compréhension des volumes, l’étude des proportions et la maîtrise de l’argile</li>
				<li>les techniques de construction et de finition : accumulation et suppression de matière</li>
				<li>évidage, lissage, cuisson, patine…</li>
			</ul>

			<div class="courses__conditions">Pour le moment, il ne vous sera pas proposé de séance avec "modèle vivant" mais cette possibilité pourrait être envisagée à l'avenir.</div>

			<div class="courses__divider"></div>

			<div>L'atelier vous propose une inscription sur la base de 150 €/trimestre (soit 10 séances de 3H)</div>
			​
			<div>La cuisson est incluse dans les forfaits ainsi que la terre, le matériel et les pigments si vous désirez patiner votre création.</div>

			<div>Il comprend aussi l'émaillage de vos pièces si vous le souhaitez.</div>

			<div class="courses__divider"></div>

			<div>Mardi :2 créneaux de 3 heures</div>
			<div>- soit 9H00-12H00</div>
			<div>- soit 13H00-16H00</div>
			​

			<div>Jeudi :1 créneau de 3 heures</div>
			<div>14H00 - 17H00</div>

			​
			<div class="courses__conditions">L'atelier suit les vacances scolaires. Il est donc fermé en juillet et en aout.</div>

			<div class="courses__conditions">Les ateliers hebdomadaires ne s'adressent pour le moment qu'aux adultes. Des stages à destination des enfants pourraient être envisageables à l'avenir.</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Courses'
}
</script>

<style lang="scss" scoped>
.courses__banner {
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("~@/assets/imgs/atelier.jpg");
	height: 400px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;

	.courses__banner-text {
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
	}
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

.courses__divider {
	margin-top: 50px;
	margin-bottom: 50px;

	font-size: 0;
	line-height: 0;
	&::after {
		content: "";
		display: inline-block;
		width: 200px;
		height: 5px;
		background-color: #f6ecdd;
	}
}

.courses__conditions {
	font-size: 12px;
	&::before {
		content: "*";
		font-size: 10px;
	}
}

.courses__section-img--reverted {
	position: relative;

	&::after {
		position: absolute;
		top: -40px;
		left: -40px;
		content: "";
		width: 40px;
		height: 40px;
		border-width: 3px 0 0 3px;
		border-style: solid;
	}
}

.courses__section-content {
	text-align: justify;
	padding: 20px;
	line-height: 2.5rem;
}

.divider {
	font-size: 0;
	line-height: 0;
	&::after {
		content: "";
		display: inline-block;
		width: 60px;
		height: 3px;
		background-color: #f6ecdd;
	}
}
</style>