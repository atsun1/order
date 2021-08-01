import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)


// router.beforeEach((to,from,next) => {
//
// })


 const router = new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      component: ()=>import('@/views/home.vue')
    },
    {
      path: '/about',
      redirect:'/contact',
      component: ()=>import('@/views/about.vue'),

      children:[
        {
          path: '/contact',
          component: ()=>import('@/views/aboutson/contact.vue')
        },
        {
          path: '/news',
          component: ()=>import('@/views/aboutson/news.vue')
        },
        {
          path: '/orderlist',
          component: ()=>import('@/views/aboutson/orderlist.vue')
        }
      ]
    },
    {
      path: '/login',
      component: ()=>import('@/views/login.vue')
    },
    {
      path: '/register',
      component: ()=>import('@/views/register.vue')
    },
    {
      path: '/menu',
      component: ()=>import('@/views/menu.vue')
    },
    {
      path: '/admin',
      component: ()=>import('@/views/admin.vue')
    }
  ],
  // 路由滚动
  // scrollBehavior (to, from, savedPosition) {
  //     console.log(savedPosition)
  //     return savedPosition
  //  }
})

// 路由拦截
// router.beforeEach((to, from, next) => {

//   console.log(to,'1111')
//   console.log(from,'2222')
//   console.log(next,'3333')
//   next()
// })

export default router
