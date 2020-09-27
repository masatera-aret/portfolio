import Vue from 'vue'
import App from './App.vue'
import router from './router/route'
import store from './store/store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

require('@/assets/sass/main.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')