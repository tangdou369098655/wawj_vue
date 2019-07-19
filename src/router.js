import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainRouter from './views/MainRouter.vue'
import Pro from './views/Pro.vue'
import Detail from './views/Detail.vue'
import About from './views/About.vue'
import News from './views/News.vue'
import Contactu from './views/Contactu.vue'
// import PortalRouter from './views/PortalRouter.vue'
// import proMyadd from './views/protal-all/Pro-myadd'
// import proMydetails from './views/protal-all/Pro-mydetails'
// import proMyOrder from './views/protal-all/Pro-myorder'
// import proPersonal from './views/protal-all/Pro-personal'
// import proPwd from './views/protal-all/Pro-pwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainRouter,
      children:[
        {
          path: '',
          redirect:'home'// 假如访问根路径跳转HOME
        },
        {
          path: 'home',
          component:Home
        },
        {
          path: 'pro',
          component:Pro
        },
        {
          path: 'detail',
          component:Detail
        },
        {
          path: 'about',
          component:About
        },
        {
          path: 'news',
          component:News
        },
        {
          path: 'contactu',
          component:Contactu
        },
       
            
          ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
