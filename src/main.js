import Vue from 'vue'
import App from './App.vue'
import Breeds from './components/Breeds.vue'
import Router from 'vue-router'

Vue.config.productionTip = false
Vue.use(Router);

const routes = [
  { path: '/', component: Breeds },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new Router({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
