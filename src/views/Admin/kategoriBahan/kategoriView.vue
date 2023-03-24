<template>
  <div class="kategoriView">
    <sidebarAdmin />
    <div style="padding-left: 300px;">
        <headerDashboard />
        <h4 class="outside">Kategori Bahan</h4>
        <div class="body">
            <div class="card-body py-3">
                <div class="inside-body">
                    <div class="header-inside-body">
                        <div class="header-inside-body">
                        </div>
                        <div class="header-inside-body">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search Kategori Bahan" aria-label="Search">
                            </form>
                            <router-link to="/Admin/kategoriBahan/tambahKategori"><button class="btn bg-madjou"> <b-icon icon="plus"></b-icon> Tambah Kategori Bahan</button></router-link> 
                        </div>
                    </div>
                    <table class="table text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Kategori Bahan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cat Besi</td>
                            <td><b-icon icon="trash2"></b-icon> <b-icon icon="pencil-fill"></b-icon></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Cat Besi</td>
                            <td><b-icon icon="trash2"></b-icon> <b-icon icon="pencil-fill"></b-icon></td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import sidebarAdmin from '@/components/sidebarAdmin.vue'
import headerDashboard from '@/components/headerDashboard.vue'

export default {
    name: "kategoriView",
    components: {
        sidebarAdmin,
        headerDashboard
    }
}
</script>

<style>
.body{
  padding: 0 20px 0 20px;
  width: 100%;
}
.card-body{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 15px !important;
  --bs-card-border-color: none !important;
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 2px rgba(0, 0, 0, 0.15);
}
.inside-body{
    padding: 0 20px 0 20px;
    width: 100%;
}

.outside{
    padding: 0 20px 0 20px;
    width: 100%;
    margin-bottom: 35px;
    margin-top: 80px;
}

th{
   height: 70px;
}
.header-inside-body{
    display: flex;
    justify-content: space-between;
    align-self: center;
}
</style>