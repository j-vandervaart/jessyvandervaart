import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Works from './work.vue'
import Work from './workInd.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		component: Works
	},
	{
		path: '/:redirect',
		redirect: '/'
	},
	{
		path: '/work/:proj_id',
		component: Work
	}
];

const router = new VueRouter({
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
  		return { x: 0, y: 0 }
	},
	mode: 'history'
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});