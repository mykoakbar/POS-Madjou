<template>
  <div class="login mt-5">
    <div class="container">
      <h1>Login</h1>
      <form>
        <b-container fluid>
        <b-row class="my-1">
            <b-col sm="3">
                <label for="input-invalid">Email:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input v-model="email" type="text" :state="error.stateEmail" placeholder="masukkan email"></b-form-input>
                <div class="text-danger" v-if="error.email">{{ error.email }}</div>
            </b-col>
        </b-row>
        <b-row class="my-1">
            <b-col sm="3">
                <label for="input-invalid">Password:</label>
            </b-col>
            <b-col sm="9">
                <b-form-input v-model="password" :type="inputType" :state="error.statePass" placeholder="masukkan password"></b-form-input>
                <div class="text-danger" v-if="error.password">{{ error.password }}</div>
                <a class="btn" v-on:click="tampilSandi">
                    <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                    <span class="text-success" v-else><b-icon icon="eye-fill"></b-icon></span>
                </a>
            </b-col>
        </b-row>
        </b-container>
        <router-link to="/Login/resetPasswordView">Lupa kata sandi</router-link> <br>
        <button class="btn btn-success" v-on:click="loginUser">Login</button>
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
        password:'',
        stateEmail: null,
        statePass: null
      }
    }
  },
  methods: {
    tampilSandi(){
      this.inputType = this.inputType === "password" ? "text" : "password";
    },

    async loginUser(){
       let result = await axios.get(
          `http://localhost:3000/user?username/email=${this.email}&password=${this.password}`
          )
          if(result.status==200 && result.data.length>0){
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            this.$router.push({path: "/Admin/DashboardView"})
          }else if(result.data.length==0 && this.email != '' && this.password != ''){
            this.$toast.error('Nama pengguna/email dan kata sandi anda salah', { 
                      type: 'error',
                      position: 'bottom-right',
                      duration: 3000,
                      dismissible: true
              })
          }

          if(this.email == ''){
                this.error.stateEmail = false;
                this.error.email = 'kolom wajib diisi'
            } else{
                this.error.email = ''
                this.error.stateEmail = null
            }
            if(this.password == ''){
                this.error.statePass = false;
                this.error.password = 'kolom wajib diisi'
            } else{
                this.error.password = ''
                this.error.statePass = null
            }
        }
  },
  mounted(){
    let user = localStorage.getItem('user-info');
    if(user){
      this.$router.push({path: "/Admin/DashboardView"})
    }
  }
};
</script>

<style>
.error-validation{
  color: red;
}
</style>
