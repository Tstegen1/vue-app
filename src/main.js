import Vue from 'vue'
import App from './App.vue'
import router from './router'
import About from './views/About'
import vuetify from './plugins/vuetify'
import store from './store.js'

Vue.config.productionTip = false

Vue.component(About)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
