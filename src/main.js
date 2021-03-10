import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Users from './views/Users'
import Navbar from './views/Navbar'

Vue.config.productionTip = false

Vue.component(Users)
Vue.component(Navbar)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
