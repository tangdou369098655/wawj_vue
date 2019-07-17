import Vue from 'vue'
import App from './App.vue'
import router from './router'
//5:引入axios.js文件
import './axios'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
