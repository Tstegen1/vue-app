import Vue from 'vue';
import Router from 'vue-router';
import User from './views/User';
import Home from './views/Home.vue';
import Navbar from './layouts/Navbar.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Navbar,
      children: [
        { path: 'home', component: Home },
        { path: 'users', component: User },
      ]
    }
  ]
})