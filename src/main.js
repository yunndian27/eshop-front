import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'

import mixin from './mixin.js' // mixin 全域引用，就不用個別引用

import VueGtag from 'vue-gtag'
Vue.use(VueGtag, {
  config: { id: 'G-D1XMNZKG7R' }
})

axios.defaults.baseURL = process.env.VUE_APP_API
Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.component('ImgInputer', ImgInputer)

Vue.mixin(mixin) // mixin 全域引用，就不用個別引用

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
