<template>
	<div id="header">
		<router-link to="/" class="header__logo">
			<h1>Atelier d'ACOS</h1>
			<h2>Atelier de sculpture à Amiens</h2>
		</router-link>

		<div class="header__nav">
			<router-link to="/" class="header__nav-item">Accueil</router-link>
			<router-link to="/cours" class="header__nav-item">Se Former</router-link>
			<router-link to="/creations" class="header__nav-item">Découvrir</router-link>
			<router-link to="/a-propos" class="header__nav-item">à propos</router-link>
			<router-link to="/contact" class="header__nav-item">Contact</router-link>
		</div>

		<Menu />
	</div>
</template>

<script>
import Menu from '@/components/Menu.vue';

export default {
	name: 'Header',
	components: {
		Menu
	}
}
</script>

<style lang="scss" scoped>
.header__logo {
	text-decoration: none;
	color: #2c3e50;
	line-height: 1px;
	h1 {
		font-size: 30px;
	}
	h2 {
		font-size: 11px;
		color: rgb(53, 53, 53);
		text-transform: uppercase;
	}
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
</style>