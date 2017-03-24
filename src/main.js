// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'

Vue.use(vueRouter);
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   vueRouter,
//   template: '<App></App>>',
//   components: { App }
// })

const goods = {template:'<div>goods</div>'};
const ratings = {template:'<div>ratings</div>'};
const seller = {template:'<div>seller</div>'};

const routes = [
  {path:'/goods',component: goods},
  {path:'/ratings',component: ratings},
  {path:'/seller',component: seller}
];
const router = new vueRouter({
  routes: routes
});
const app = new Vue({
  router
}).$mount('#app');
