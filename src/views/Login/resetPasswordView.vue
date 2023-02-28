<template>
  <div class="resetPassword mt-5">
    <div class="container">
      <h1>Lupa Kata Sandi</h1>
      <form @submit="cekEmail">
        <b-form-input :state="error.stateEmail" v-model="email" class="form-control" type="email" placeholder="Masukkan Email anda"></b-form-input>
        <div class="error-validation" v-if="error.email">{{ error.email }}</div>
        <div class="col-lg-5 mt-2">
          <button type="submit" class="btn btn-primary">Kirim</button>
          <router-link to="/"><a class="btn btn-danger">Kembali</a></router-link>
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
          stateEmail: null,
          email: ''
        }
      }
    },
    methods: {
      async cekEmail(){
          this.error.email = '';
  
          let result = await axios .get(`http://localhost:3000/user?email=${this.email}`)
          if(result.status==200 && result.data.length>0){
            this.$router.push({path: '/Login/verifikasiEmail/verifikasiEmailView'})
          } else if(result.status==200 && result.data.length==0 && this.email != ''){
            this.error.stateEmail = false;
            this.error.email = 'Email anda salah, mohon periksa kembali'
          }
          if(this.email == ''){
            this.error.email = 'Kolom wajib diisi'
            this.error.stateEmail = false;
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