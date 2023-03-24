<template>
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
            
              <!-- Start Script POS Module -->
              <li>
                <a v-on:click="posModuleMenu">
                  <div class="row1 p-2 mt-3 px-3" v-bind:class="{ barActive : isActive, 'text-light' : isActive}">
                    <div class="row2">
                      <img v-if="isActive" style="width: 22px;" src="assets/icon-work-light.svg">
                      <img v-else style="width: 22px;" src="assets/icon-work.svg">
                      <p>POS Module</p>
                    </div>
                    <div class="col text-end">
                      <b-icon v-if="isActive" icon="chevron-down"></b-icon>
                      <b-icon v-else icon="chevron-right"></b-icon>
                    </div>
                  </div>
                </a>
                
                <!-- Start Master Bahan Module-->
            <div v-if="posModule">
              <li>
                <a v-on:click="posMasterBahanMenu">
                  <div class="row1 px-3 mt-2">
                    <div class="row2">
                        <img v-if="isActiveMB" style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar-active.svg">
                        <img v-else style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                      <p style="color:black">Master Bahan</p>
                    </div>
                  </div>
                </a>
                <div v-if="posMasterBahan">
                  <div class="sidebar-kotak"></div>
                  <div class="sidebar-grid"></div>
                    <router-link to="/Admin/kategoriBahan/kategoriView">
                    <div class="submenu1">
                      <div class="row2">
                        <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-pilihanmenu.svg">
                      <p style="font-size: 16px;font-weight: 450; font-style: normal;">Kategori Bahan</p>
                      </div>
                    </div>
                    </router-link>
                    <router-link to="/Admin/masterBahan/bahanView">
                    <div class="submenu2">
                        <div class="row2">
                        <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-pilihanmenu.svg">
                        <p style="font-size: 16px;font-weight: 450; font-style: normal;">Bahan</p>
                        </div>
                    </div>
                    </router-link>
                </div>
              </li>
                <!-- End Master Bahan Module-->


























                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Master Product</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Master Inventory</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Manajemen Order</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Manajemen Transaksi</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Manajemen Pembayaran</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Master Pelanggan</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Master Suplier</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Akuntansi</p>
                      </div>
                  </div>
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                        <p>Manajemen Laporan</p>
                      </div>
                  </div>
                </div>
                <!-- End Category Module-->
              </li>
              <!-- End Script POS Module -->

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
              <li>
                <a v-on:click="posSettingMenu">
                  <div class="row1 p-2 mt-3 px-3" v-bind:class="{ barActive : isActiveSetting, 'text-light' : isActiveSetting}">
                    <div class="row2">
                      <img v-if="isActiveSetting" style="width: 22px;" src="assets/icon-setting-light.svg">
                      <img v-else style="width: 22px;" src="assets/icon-setting.svg">
                      <p>Setting</p>
                    </div>
                    <div class="col text-end">
                      <b-icon v-if="isActiveSetting" icon="chevron-down"></b-icon>
                      <b-icon v-else icon="chevron-right"></b-icon>
                    </div>
                  </div>
                </a>
                <div v-if="posSetting">
                  <div class="row1 px-3 mt-2">
                      <div class="row2">
                      <img style="width: 14px;left: 4px;position: relative;" src="assets/icon-menubar.svg">
                      <button v-on:click="logout" class="btn btn-danger"><b-icon icon="box-arrow-in-left"></b-icon> Logout</button>
                      </div>
                  </div>
                </div>
                <!-- End Category Module-->
              </li>
            </ul>
  </div>
</template>

<script>
export default {
  name: "sidebarAdmin",
  data(){
    return{
      isActive : null,
      isActiveMB : null,
      isActiveMP : null,
      isActiveMI : null,
      isActiveMO : null,
      isActiveSetting : null,
      posModule : null,
      posMasterBahan : null,
      posSetting : null
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
    },
    posMasterBahanMenu(){
      if(this.posMasterBahan == null){
        this.posMasterBahan = true;
        this.isActiveMB = true;
      } else if(this.posMasterBahan == true){
        this.posMasterBahan = null;
        this.isActiveMB = null;
      } else{
        return this.posMasterBahan;
      }
    },
    posSettingMenu(){
      if(this.posSetting == null){
        this.posSetting = true;
        this.isActiveSetting = true;
      } else if(this.posSetting == true){
        this.posSetting = null;
        this.isActiveSetting = null;
      } else{
        return this.posSetting;
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

.submenu1{
  position: fixed;
  left: 265px;
  top: 264px;
}

.submenu2{
  position: fixed;
  left: 265px;
  top: 295px;
}

.sidebar-kotak{
  position: fixed;
  width: 141px;
  height: 61px;
  left: 292px;
  top: 261px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 2px;
}

.sidebar-grid{
  position: fixed;
  width: 141px;
  height: 1px;
  left: 292px;
  top: 291px;
  background: rgba(217, 217, 217, 0.6);
}

p{
  margin: 0 !important;
}
.barActive{
  background-color: #9B51E0; 
  border-radius: 0px 20px 20px 0px;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}
.barMasterBahan{
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