import Vue from 'vue'
import App from './App.vue'
import feather from 'vue-icon'
import router from '@/router/router.js';
import responsive from 'vue-responsive'

Vue.use(responsive)

Vue.config.productionTip = false

Vue.use(feather, 'v-icon');

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
