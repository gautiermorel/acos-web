import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Courses  from '@/views/Courses.vue';
import Portfolio  from '@/views/Portfolio.vue';

import 'nprogress/nprogress.css';

Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'Home',
	component: Home,
	meta: {
		breadcrumb: [
			{ name: 'Accueil' }
		]
	}
}, {
	path: '/a-propos',
	name: 'About',
	component: About,
	meta: {
		breadcrumb: [
			{ name: 'Accueil', path: '/' },
			{ name: 'A propos' }
		]
	}
}, {
	path: '/creations',
	name: 'Portfolio',
	component: Portfolio,
	meta: {
		breadcrumb: [
			{ name: 'Accueil', path: '/' },
			{ name: 'Nos créations' }
		]
	}
}, {
	path: '/cours',
	name: 'Courses',
	component: Courses,
	meta: {
		breadcrumb: [
			{ name: 'Acceuil', path: '/' },
			{ name: 'Nos cours' }
		]
	}
}]

const router = new VueRouter({
	mode: 'history',
	routes: routes
})

router.beforeResolve((to, from, next) => {
	if (to.name) NProgress.start()
	next()
})

router.afterEach(() => {
	NProgress.done()
})

export default router
