<template>
  <div class="dashboard">
    <div class="container">
      <h1>halaman dashboard ketika sudah berhasil login</h1>
      <div class="btn">
        <button v-on:click="logout" class="btn btn-danger">Logout</button>
      </div>
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
  }
}
}
</script>

<style>

</style>
