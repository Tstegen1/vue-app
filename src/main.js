import Vue from 'vue'
import App from './App.vue'
import router from './router'
import About from './views/About'
import Home from './views/Home'
import vuetify from './plugins/vuetify'
import store from './store.js'
import firebase from './plugins/firebase';

firebase.init();

Vue.config.productionTip = false

Vue.component(About)
Vue.component(Home)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
