// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'

//定义路由组件
//此处不使用相对路径而直接使用components是因为components这个别名已经在webpack.base.conf.js里面有配置好路径
import goods from 'components/goods/goods'
import ratings from 'components/ratings/ratings'
import seller from 'components/seller/seller'

Vue.use(vueRouter);

//定义路由
const routes = [
  {path:'/goods',component: goods},
  {path:'/ratings',component: ratings},
  {path:'/seller',component: seller}
];

//实例化路由并配置
const router = new vueRouter({
  routes: routes
});

//创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个#app应用都有路由功能
//render used to create element or template(usually we can use template)
//es6: render:h => h(App) 相当于 es5中render:function(h){return App}
//h作为createElement的别名
const app = new Vue({
  el:'#app',
  router,
  render: h =>h(App)
});
//引导页为godds页面（初始为第一页面）
router.push('/goods');
