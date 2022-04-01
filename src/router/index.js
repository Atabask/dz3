import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import MyPage404  from '../views/MyPage404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: 'Dashboard',
      // track: false
    }
  },
  {
    path: '/dashboard/:page',
    name: 'dashboard',
    component: DashboardView,
  },
  {
    path: '/mypage404',
    name: '404',
    component: MyPage404
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const userAuthExists = true

// router.beforeEach((to, from, next) =>{
//   if(to.name != 'dashboard' & !userAuthExists) {
//     next({
//       name: "dashboard"
//     })
//   }else {
//     next()
//   }
//   console.log(to, from)
  
// })

const getTitleByRouteName = routeName => {
  return {
    'home': 'Your home',
    'dashboard': 'Take a look on your payments and add more!',
    'about': 'Anything about our awesome application!',
    'Notfound': 'Ooops! seems like we lost this page'
  }[routeName]
}
router.afterEach((to) => {
  document.title = getTitleByRouteName(to.name)
})


export default router
