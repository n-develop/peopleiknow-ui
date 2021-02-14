import { createRouter, createWebHashHistory } from 'vue-router'
import TheLogin from '../views/TheLogin.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: TheLogin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
