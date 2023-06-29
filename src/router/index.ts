import { createRouter, createWebHistory } from 'vue-router'
import PageFirstView from '../views/PageFirstView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'firstpage',
      component: PageFirstView
    },
    {
      path: '/secondpage',
      name: 'secondpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PageSecondView.vue')
    },
    {
      path: '/thirdpage',
      name: 'thirdpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PageThirdView.vue')
    }
  ]
})

export default router
