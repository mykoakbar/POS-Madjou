import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/DashboardView',
    name: 'DashboardView',
    component: DashboardView
  }
]

const router = new VueRouter({
  routes
})

export default router
