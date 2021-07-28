import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
	{
	  path: '/about',
	  component: ()=>import('@/views/about.vue')
	},
	{
	  path: '/home',
	  component: ()=>import('@/views/home.vue')
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
  ]
})
