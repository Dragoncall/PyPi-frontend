// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import loadJson from './store/configloader'
import json from './config/config.json'
import VueSkycon from 'vue-skycon'

Vue.config.productionTip = false

Vue.use(VueSkycon)

loadJson(json)

Vue.use(Vuetify, {
  theme: {
    primary: '#3e3d3f',
    secondary: '#616161',
    accent: '#90CAF9',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
