import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Card from '../views/Card.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Card
    },
   
  ]
})

export default router
