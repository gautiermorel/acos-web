<template>
	<div id="footer">
		<div class="footer__sections">
			<div class="footer__section">
				<div class="footer__section-title">ADRESSE</div>
				<div class="footer__divider"></div>
				<div>Rue Saint Fuscien, 80000 Amiens</div>
			</div>
			<div class="footer__section">
				<div class="footer__section-title">HORAIRES</div>
				<div class="footer__divider"></div>
				<div class="footer__section-details">
					<div><span>Mardi:</span> 9h00-12h00 <span>ou</span> 13h00-16h00</div>
					<div><span>Jeudi:</span> 14h00-17h00</div>
				</div>
			</div>
			<div class="footer__section">
				<div class="footer__section-title">CONTACT</div>
				<div class="footer__divider"></div>
				<div>
					<div>acos@free.fr</div>
					<div>06 63 XX 33 10</div>
				</div>
			</div>
		</div>

		<div class="footer__copyright">© Constance Flambard - 2021</div>
	</div>
</template>

<script>
export default {
	name: 'Footer'
}
</script>

<style lang="scss" scoped>
#footer {
	font-size: 16px;
	background-color: #2c3e50;
	color: white;
	padding: 20px;
	margin-top: 20px;
}

.footer__sections {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: flex-start;

	.footer__section {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: center;
		justify-items: center;
		text-align: center;
		max-width: 300px;
		min-width: 300px;

		.footer__section-title {
			font-weight: bold;
		}

		span {
			color: #fcba57;
		}
	}

	.footer__divider {
		font-size: 0;
		line-height: 0;
		margin-bottom: 20px;
		margin-top: 10px;
		&::after {
			content: "";
			display: inline-block;
			width: 30px;
			height: 3px;
			background-color: #fcba57;
		}
	}
}

@media screen and (max-width: 990px) {
	.footer__sections {
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-items: center;
		justify-content: center;
		align-items: center;

		.footer__section {
      margin-top: 15px;
			min-width: unset;
			max-width: unset;
			text-align: center;
		}
	}
}

.footer__copyright {
	display: flex;
	flex-direction: row;
	padding-top: 20px;
	padding-bottom: 20px;
	justify-items: center;
	justify-content: center;
	align-content: center;
	align-items: center;
	text-align: center;
}
</style>