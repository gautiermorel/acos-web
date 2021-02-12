<template>
	<div id="header">

		<div class="header__nav">
			<router-link to="/" class="header__nav-item">Accueil</router-link>
			<router-link to="/cours" class="header__nav-item">Apprendre</router-link>
			<router-link to="/creations" class="header__nav-item">Découvrir</router-link>
			<router-link to="/a-propos" class="header__nav-item">à propos</router-link>
			<router-link to="/contact" class="header__nav-item">Contact</router-link>
			<div class="header__social">
				<v-icon name="instagram" base-class="instagram-icon"></v-icon>
				<v-icon name="facebook" base-class="facebook-icon"></v-icon>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Header',
}
</script>

<style lang="scss" scoped>
.instagram-icon {
  color: #2c3e50;
  width: 25px;
  padding-right: 20px;
}
.facebook-icon {
  color: #2c3e50;
  width: 20px;
  fill: #2c3e50;
}

.header__nav {
	padding: 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-items: center;
	align-content: center;
	justify-content: center;
	text-transform: uppercase;

	.header__nav-item {
		text-decoration: none;
		font-size: 16px;
		padding: 20px;
		color: #2c3e50;
	}

	.router-link-exact-active {
		font-weight: bold;
		color: rgb(53, 53, 53);
	}
}

.header__social {
	display: flex;
	width: 120px;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	.header__social-icon {
		cursor: pointer;
		padding-left: 10px;
		padding-right: 10px;
	}
}
</style>