import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Works from './work.vue'
import Work from './workInd.vue'
import About from './about.vue'
import Contact from './contact.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/work'
	},
	{
		path: '/work',
		component: Works
	},
	{
		path: '/work/:proj_id',
		component: Work
	},
	{
		path: '/about',
		component: About
	},
	{
		path: '/contact',
		component: Contact
	}
];

const router = new VueRouter({
	routes: routes,
	scrollBehavior (to, from, savedPosition) {
  		return { x: 0, y: 0 }
	}
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});

// custom js

var ham = document.querySelector("#hamburger");
var ul = document.querySelector(".mainNav");
var links = document.querySelectorAll(".mainLinks");

function slideIn() {
	ul.classList.toggle('slide');
}

function test() {
		ul.classList.remove('slide');
}

// document.body.addEventListener('click', test, false);

ham.addEventListener('click', slideIn, false);
for(var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', test, false);
}