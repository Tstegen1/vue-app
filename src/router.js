import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/Users';
import Home from './views/Home.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/users', component: Users }
  ]
})