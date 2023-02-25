import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/Admin/DashboardView.vue'
import cobaView from '../views/Admin/cobaView.vue'
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
    path: '/Admin/DashboardView',
    name: 'DashboardView',
    component: DashboardView
  },
  {
    path: '/Admin/cobaView',
    name: 'cobaView',
    component: cobaView
  },
  {
    path: '/Login/resetPasswordView',
    name: 'resetPasswordView',
    component: resetPasswordView
  },
  {
    path: '/Login/sandiBaru/sandiBaruView',
    name: 'sandiBaruView',
    component: sandiBaruView
  },
  {
    path: '/Login/verifikasiEmail/verifikasiEmailView',
    name: 'verifikasiEmailView',
    component: verifikasiEmailView
  }
]

const router = new VueRouter({
  routes
})

export default router
