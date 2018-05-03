import Vue from 'vue'
import App from './App'
import router from './router'

import {post, get} from '@/api/axios'

Vue.config.productionTip = false

Vue.prototype.$post = post
Vue.prototype.$get = get

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
