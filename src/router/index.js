import { createRouter, createWebHashHistory } from 'vue-router'
import TheLogin from '../views/TheLogin.vue'
import MainPage from '../views/MainPage.vue'

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/login',
    name: 'Login',
    component: TheLogin
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
