<template>
  <div class="login mt-5">
    <div class="container">
      <h1>Login</h1>
      <form class="mt-5" @submit="loginUser">

        <div class="form-group">
          <label class="form-label" for="username">Nama Pengguna/Email :</label>
          <input v-model="email" class="form-input" type="text" placeholder="Masukkan nama pengguna atau email">
          <div class="error-validation" v-if="error.email">{{ error.email }}</div>
        </div>

        <div class="form-group">
          <label class="form-label" for="password">Kata sandi :</label>
          <input :type="inputType" placeholder="Masukkan kata sandi" v-model="password">
          <button v-on:click="tampilSandi">
            <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
            <span v-else><b-icon icon="eye-fill"></b-icon></span>
          </button>
          <div class="error-validation" v-if="error.password">{{ error.password }}</div>
        </div>

        <input type="submit" value="Login" class="btn btn-success">

      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data(){
    return{
      email:'',
      password: '',
      inputType: 'password',
      error: {
        email: '',
        password:''
      }
    }
  },
  methods: {
    tampilSandi(){
      this.inputType = this.inputType === "password" ? "text" : "password";
    },

    async loginUser(){
       let result = await axios.get(
          `http://localhost:3000/user?email=${this.email}&password=${this.password}`
          )
          if(result.status==200 && result.data.length>0){
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            this.$router.push({name: 'DashboardView'})
          }else if(result.data.length==0 && this.email != '' && this.password != ''){
            this.$toast.error('Nama pengguna/email dan kata sandi anda salah', { 
                      type: 'error',
                      position: 'bottom-right',
                      duration: 3000,
                      dismissible: true
              })
          }

          this.error.email = '';
          this.error.password = '';

          if(this.email == ''){
            this.error.email = 'Kolom wajib diisi'
          }
          if(this.password == ''){
            this.error.password = 'Kolom wajib diisi'
          }
        }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({name: "DashboardView"})
    }
  }
};
</script>

<style>
.error-validation{
  color: red;
}
</style>
