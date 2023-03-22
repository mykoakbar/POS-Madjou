import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/Login/LoginView.vue'
import DashboardView from '../views/Admin/DashboardView.vue'
import cobaView from '../views/Admin/cobaView.vue'
import resetPasswordView from '../views/Login/resetPassword/resetPasswordView.vue'
import sandiBaruView from '../views/Login/resetPassword/sandiBaru/sandiBaruView.vue'
import verifikasiEmailView from '../views/Login/resetPassword/verifikasiEmail/verifikasiEmailView.vue'
import bahanView from '../views/Admin/masterBahan/bahanView.vue'
import kategoriBahan from '../views/Admin/masterBahan/kategoriBahan.vue'
import tambahBahan from '../views/Admin/masterBahan/tambahBahan.vue'

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
    path: '/Login/resetPassword/resetPasswordView',
    name: 'resetPasswordView',
    component: resetPasswordView
  },
  {
    path: '/Login/resetPassword/sandiBaru/sandiBaruView',
    name: 'sandiBaruView',
    component: sandiBaruView
  },
  {
    path: '/Login/resetPassword/verifikasiEmail/verifikasiEmailView',
    name: 'verifikasiEmailView',
    component: verifikasiEmailView
  },
  {
    path: '/Admin/masterBahan/bahanView',
    name: 'bahanView',
    component: bahanView
  },
  {
    path: '/Admin/masterBahan/kategoriBahan',
    name: 'kategoriBahan',
    component: kategoriBahan
  },
  {
    path: '/Admin/masterBahan/tambahBahan',
    name: 'tambahBahan',
    component: tambahBahan
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isAutentikasi = JSON.parse(localStorage.getItem('user-info'))

  if(to.path === "/Admin/dashboardView" && !isAutentikasi) next({path: "/"}); 
  if(to.path === "/" && isAutentikasi) next({path: "/Admin/dashboardView"});
  if(to.name === "resetPasswordView" && isAutentikasi) next({path: "/Admin/dashboardView"});
  if(to.name === "sandiBaruView" && isAutentikasi) next({path: "/Admin/dashboardView"});
  if(to.name === "verifikasiEmailView" && isAutentikasi) next({path: "/Admin/dashboardView"});
  else next();
})

export default router
