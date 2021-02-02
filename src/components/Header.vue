<template>
	<div id="header">
		HEADER

    <div class="header__nav">
      <router-link to="/">Accueil</router-link>
      <router-link to="/cours">Se Former</router-link>
      <router-link to="/creations">Découvrir</router-link>
      <router-link to="/a-propos">A propos</router-link>
      <router-link to="/contact">Contact</router-link>
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
#header {
  background-color: lightblue;
}

.header__nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}
</style>