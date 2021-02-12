<template>
	<div id="app">
		<Menu v-responsive="['hidden-all', 'xs', 'sm']" />

		<router-link to="/" class="header__logo">
			<h1>Atelier d'ACOS</h1>
			<h2>Atelier de sculpture à Amiens</h2>
		</router-link>

		<Header v-responsive.lg.xl />

		<transition name="fade">
			<router-view></router-view>
		</transition>

		<Footer />
	</div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
	name: 'App',
	components: {
		Menu,
		Header,
		Footer
	}
}
</script>

<style lang="scss">
#app {
	font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	font-size: 20px;
}

html,
body {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

.header__logo {
	text-decoration: none;
	color: #2c3e50;
	line-height: 1px;
  padding: 50px;
	h1 {
		font-size: 30px;
	}
	h2 {
		font-size: 11px;
		color: rgb(53, 53, 53);
		text-transform: uppercase;
	}
}
</style>

