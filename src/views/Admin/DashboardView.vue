<template>
  <div class="dashboard">
          <div class="sidebar">
            <div class="row mt-1 mb-5">
              <div class="col-5">
                <div class="circle-avatar">
                  <img style="width: 80%" src="POS.png" alt="">
                </div>
              </div>
              <div class="col align-items-center">
                <div class="name-app align-items-center">
                  <h6>POS</h6>
                  <h6>(Point Of Sale)</h6>
                </div>
              </div>
            </div>

            <ul>
              <li>
                <div class="row">
                  <div class="col-2">
                    <img style="width: 27px;" src="assets/icon-profile.svg">
                  </div>
                  <div class="col">
                    <p>Dashboard</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-2">
                    <img style="width: 27px;" src="assets/icon-profile.svg">
                  </div>
                  <div class="col">
                   <router-link to="/Admin/cobaView"><p>POS Module</p></router-link>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-2">
                    <img style="width: 27px;" src="assets/icon-profile.svg">
                  </div>
                  <div class="col">
                    <p>Manajemen Karyawan</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-2">
                    <img style="width: 27px;" src="assets/icon-profile.svg">
                  </div>
                  <div class="col">
                    <p>CRM</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-2">
                    <img style="width: 27px;" src="assets/icon-profile.svg">
                  </div>
                  <div class="col">
                    <p>Ticketing Manajemen System</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="row">
                  <div class="col-2">
                    <img style="width: 27px;" src="assets/icon-profile.svg">
                  </div>
                  <div class="col">
                    <p>Setting</p>
                  </div>
                </div>
              </li>
              
            </ul>
            <button v-on:click="logout" class="btn btn-danger">Logout</button>
          </div>
          <div style="padding-left: 300px;" class="body">
            <headerDashboard />
          </div>
  </div>
</template>

<script>
import headerDashboard from '@/components/headerDashboard.vue'

export default {
name: "DashboardView",
components: {
  headerDashboard
},
methods: {
  logout(){
    localStorage.clear();
    this.$router.push({name:"LoginView"})
    this.$toast.error('Anda Berhasil Keluar', {
                        type: 'success',
                        position: 'top-right',
                        duration: 3000,
                        dismissible: true
          })
  }
}
}
</script>

<style>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0 15px 15px 0;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.15);
  padding: 20px;
}
.sidebar h2 {
  margin-top: 0;
}
.sidebar ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sidebar li {
  margin-bottom: 10px;
}
</style>
