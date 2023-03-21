<template>
  <div class="dashboard">
    <div class="sidebar">
      <div class="row align-items-center mt-4 mb-5">
        <div class="col-5 text-end">
          <div class="circle-avatar">
            <img style="width: 80%" src="POS.png" alt="">
          </div>
        </div>
        <div class="col align-items-center">
          <div class="name-app text-start align-items-center">
            <h6>POS</h6>
            <h6>(Point Of Sale)</h6>
          </div>
        </div>
      </div>

            <ul>
              <li>
                <a><router-link to="/Admin/DashboardView">
                  <div class="row1 p-2 mt-4 px-3">
                    <div class="row2">
                      <img style="width: 22px;" src="assets/icon-home.svg">
                      <p>Dashboard</p>
                    </div>
                  </div>
                </router-link></a>
              </li>

              <li>
                <a v-on:click="posModuleMenu">
                  <div class="row1 p-2 mt-3 px-3" v-bind:class="{ barActive : isActive, 'text-light' : isActive}">
                    <div class="row2">
                      <img v-if="isActive" style="width: 22px;" src="assets/icon-work-light.svg">
                      <img v-else style="width: 22px;" src="assets/icon-work.svg">
                      <p>POS Module</p>
                    </div>
                    <div class="col text-end">
                      <b-icon icon="chevron-right"></b-icon>
                    </div>
                  </div>
                </a>

                <div v-if="posModule">
                  <div class="row1 px-3 mt-4">
                    <div class="row2">
                      <b-icon icon="circle"></b-icon>
                      <p>Master Bahan</p>
                    </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Master Product</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Master Inventory</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Manajemen Order</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Manajemen Transaksi</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Manajemen Pembayaran</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Master Pelanggan</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Master Suplier</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Akuntansi</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                        <b-icon icon="arrow-right-short"></b-icon>
                        <p>Manajemen Laporan</p>
                      </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="row1 p-2 mt-3 px-3">
                    <div class="row2">
                      <img style="width: 22px;" src="assets/icon-3User.svg">
                      <p>Manajemen Karyawan</p>
                    </div>
                  <div class="col text-end">
                    <b-icon icon="chevron-right"></b-icon>
                  </div>
                </div>
              </li>
              <li>
                <div class="row1 p-2 mt-3 px-3">
                    <div class="row2">
                      <img style="width: 22px;" src="assets/icon-chart.svg">
                      <p>CRM</p>
                    </div>
                  <div class="col text-end">
                    <b-icon icon="chevron-right"></b-icon>
                  </div>
                </div>
              </li>
              <li>
                <div class="row1 p-2 mt-3 px-3">
                    <div class="row2">
                      <img style="width: 22px;" src="assets/icon-ticket.svg">
                      <p>Ticketing Manajemen System</p>
                    </div>
                </div>
              </li>
              <li>
                <div class="row1 p-2 mt-3 px-3">
                    <div class="row2">
                      <img style="width: 22px;" src="assets/icon-setting.svg">
                      <p>Setting</p>
                    </div>
                </div>
              </li>
            </ul>
            <button v-on:click="logout" class="btn btn-danger">Logout</button>
    </div>
    <div style="padding-left: 300px;">
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
  data(){
    return{
      isActive : null,
      posModule : null
    }
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
    },
    posModuleMenu(){
      if(this.posModule == null){
        this.posModule = true;
        this.isActive = true;
      } else if(this.posModule == true){
        this.posModule = null;
        this.isActive = null;
      } else{
        return this.posModule;
      }
    }
  }
}
</script>

<style>
.row1{
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  cursor: pointer;
}
.row2{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 22px;
  cursor: pointer;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #ffffff;
  border-radius: 0 15px 15px 0;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.15);
  overflow:auto;
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
p{
  margin: 0 !important;
}
.barActive{
  background-color: #9B51E0; 
  border-radius: 0px 20px 20px 0px;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}
a{
  text-decoration: none !important;
  color: #7C7C7C !important;
}

::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
 
::-webkit-scrollbar-track {      
    background: #ffffff;
  }
  
::-webkit-scrollbar-thumb {
    background: #9B51E0;
    border-radius: 30px;
}
</style>
