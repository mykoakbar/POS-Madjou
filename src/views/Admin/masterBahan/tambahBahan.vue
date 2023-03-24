<template>
  <div class="tambahBahan">
    <sidebarAdmin />
    <div style="padding-left: 300px;">
        <headerDashboard />
        <h4 class="outside">Tambah Bahan</h4>
        <div class="mx-4">
            <div class="card-body py-3">
                <div class="inside-body">
                    <form action="">
                        <label class="ms-2" for="nama bahan">Nama Bahan</label> <br>
                        <b-form-input class="mt-2 mb-4" type="text" placeholder="Masukkan Nama Bahan"></b-form-input>
                        <div class="mb-3">
                            <button class="btn bg-madjou"><b-icon icon="file-earmark-arrow-down-fill" variant="light"></b-icon> simpan</button>
                            <router-link to="/Admin/masterBahan/bahanView"><button style="margin-left: 20px;" class="btn btn-secondary"><b-icon icon="arrow-left-circle-fill" variant="light"></b-icon> kembali</button></router-link>
                        </div>
                    </form>
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
    name: "tambahBahan",
    components: {
        sidebarAdmin,
        headerDashboard
    }
}
</script>

<style>
.badan{
  padding: 0 20px 0 20px;
  width: 100%;
}

.outside{
    padding: 0 20px 0 20px;
    width: 100%;
    margin-bottom: 35px;
    margin-top: 80px;
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
</style>