<template>
  <div class="dashboard">
    <div class="container">
      <h1>halaman dashboard ketika sudah berhasil login</h1>
      <div class="btn">
        <button v-on:click="logout" class="btn btn-danger">Logout</button>
      </div>
      <router-link to="/cobaView">coba</router-link>
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
    this.$toast.error('berhasil logout', {
                        type: 'success',
                        position: 'bottom-right',
                        duration: 3000,
                        dismissible: true
          })
  }
}
}
</script>

<style>

</style>
