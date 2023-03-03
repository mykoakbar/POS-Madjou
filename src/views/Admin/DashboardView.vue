<template>
  <div class="dashboard">
    <div class="container">
      <h1>halaman dashboard ketika sudah berhasil login</h1>
        <button v-on:click="logout" class="btn btn-danger">Logout</button>
        <br>
      <router-link to="/Admin/cobaView">coba</router-link>
    </div>
  </div>
</template>

<script>
export default {
name: "DashboardView",
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

</style>
