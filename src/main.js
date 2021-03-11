import Vue from 'vue'
import App from './App.vue'
import router from './router'
import User from './views/User'
import Navbar from './layouts/Navbar.vue'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.component(User)
Vue.component(Navbar)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
