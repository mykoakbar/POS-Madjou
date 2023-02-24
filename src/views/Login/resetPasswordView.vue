<template>
  <div class="resetPassword mt-5">
    <div class="container">
      <h1>Lupa Kata Sandi</h1>
      <form @submit="cekEmail">
        <input v-model="email" class="form-control" type="email" placeholder="Masukkan Email anda">
        <div class="error-validation" v-if="error.email">{{ error.email }}</div>
        <div class="mt-2">
          <router-link to="/"><a class="btn btn-danger">kembali</a></router-link>
          <button type="submit" class="btn btn-primary">Kirim</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: "resetPasswordView",
    data(){
      return{
        email: '',
        error: {
          email: ''
        }
      }
    },
    methods: {
      async cekEmail(){
          this.error.email = '';
  
          let result = await axios .get(`http://localhost:3000/user?email=${this.email}`)
          if(result.status==200 && result.data.length>0){
            this.$router.push({name: 'verifikasiEmailView'})
          } else if(result.status==200 && result.data.length==0 && this.email != ''){
            this.error.email = 'Email anda salah, mohon periksa kembali'
          }
          if(this.email == ''){
            this.error.email = 'Kolom wajib diisi'
          }
        }
      }
}
</script>

<style>
.error-validation{
  color: red;
}
</style>