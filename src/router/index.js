import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/Admin/DashboardView.vue'
import cobaView from '../views/Login/cobaView.vue'
import resetPasswordView from '../views/Login/resetPasswordView.vue'
import sandiBaruView from '../views/Login/sandiBaru/sandiBaruView.vue'
import verifikasiEmailView from '../views/Login/verifikasiEmail/verifikasiEmailView.vue'

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
  },
  {
    path: '/cobaView',
    name: 'cobaView',
    component: cobaView
  },
  {
    path: '/resetPasswordView',
    name: 'resetPasswordView',
    component: resetPasswordView
  },
  {
    path: '/sandiBaruView',
    name: 'sandiBaruView',
    component: sandiBaruView
  },
  {
    path: '/verifikasiEmailView',
    name: 'verifikasiEmailView',
    component: verifikasiEmailView
  }
]

const router = new VueRouter({
  routes
})

export default router
