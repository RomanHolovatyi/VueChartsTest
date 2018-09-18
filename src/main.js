import Vue from 'vue'
import App from './App.vue'
import '@/plugins/axios'
import '@/plugins/scale-loader'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
