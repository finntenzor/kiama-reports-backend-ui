import Vue from 'vue'
import router from './router'

import '@/vendor/muse'
import '@/vendor/hljs'
import reportErrorMixin from '@/vendor/report'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  mixins: [reportErrorMixin],
  router,
  render: h => h(App)
}).$mount('#app')
