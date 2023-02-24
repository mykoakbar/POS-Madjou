<template>
  <div class="login mt-5">
    <div class="container">
      <h1>Login</h1>
      <form class="mt-5" @submit="loginUser">

        <div class="form-group">
          <p v-for="e in error" :key="e.id">{{ e }}</p>
          <label class="form-label" for="username">Username :</label>
          <input v-model="email" class="form-input" type="text" placeholder="masukkan username">
        </div>

        <div class="form-group">
          <label class="form-label" for="password">Password :</label>
          <input :type="inputType" placeholder="masukkan password" v-model="password">
          <button v-on:click="tampilSandi">
            <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
            <span v-else><b-icon icon="eye-fill"></b-icon></span>
          </button>
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
      error: []
    }
  },
  methods: {
    tampilSandi(){
      this.inputType = this.inputType === "password" ? "text" : "password";
    },

    async loginUser(e){
       let result = await axios.get(
          `http://localhost:3000/user?email=${this.email}&password=${this.password}`
          )
          if(result.status==200 && result.data.length>0){
            localStorage.setItem("user-info", JSON.stringify(result.data[0]))
            this.$router.push({name: 'DashboardView'})
          }else if(result.data.length==0 && this.email != '' && this.password != ''){
            this.$toast.error('email dan kata sandi salah', {
                      type: 'error',
                      position: 'bottom-right',
                      duration: 3000,
                      dismissible: true
              })
          }
          this.error = [];
          if(this.email && this.password){
            return true;
          } if (this.email === "") {
            this.error.push('username harus diisi');
          }
           if (this.password === "") {
            this.error.push('password harus diisi');
          }

          e.preventDefault();
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

</style>
