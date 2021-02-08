<template>
	<div id="app">
		<Header />

		<transition name="fade">
			<router-view></router-view>
		</transition>

		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
	name: 'App',
	components: {
		Header,
		Footer
	}
}
</script>

<style>
#app {
	font-family: Optima, Segoe, Segoe UI, Candara, Calibri, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

html, body {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
</style>
