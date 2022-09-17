import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Header from '../components/Header'
import Details from '../components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        'Header': Header,
        'Details': Details
      }
    }
  ]
})
