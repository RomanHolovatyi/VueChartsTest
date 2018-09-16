import Vue from 'vue'
import App from './App.vue'
import '@/plugins/vue-axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
