import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/helloWorld'
    },
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      meta: {
        title: 'HelloWorld'
      },
      component: resolve => require(['@/components/HelloWorld'], resolve)
    }
  ]
})

// 路由拦截
router.beforeEach((to, from, next) => {

  next()
})
export default router
