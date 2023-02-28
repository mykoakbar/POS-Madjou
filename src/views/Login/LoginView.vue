<template>
  <div class="login">
    <div class="row g-0">

      <div class="col g-0">
        <div class="leftside d-flex justify-content-center align-items-center">
            <img src="assets/icon-laptop.svg" alt="">
        </div>
      </div>

      <div class="col g-0">
        <div class="rightside d-inline-flex align-items-center">
          <div class="container px-5">
            <h1><strong><center>Masuk</center></strong></h1>
            <p style="weight: 400; color: rgba(0, 0, 0, 0.3);">Masukkan Username atau Email dan Password <br> yang sudah terdaftar</p>
            <form>
                  <b-col sm="3">
                      <label class="ms-2">Username/Email</label>
                  </b-col>
                  <input class="form-input1 my-2" v-model="email" type="text" :state="error.stateEmail" placeholder="Masukkan Nama Pengguna atau Email">
                  <div class="text-danger" v-if="error.email">{{ error.email }}</div>

                  <b-col sm="3">
                      <label class="ms-2">Password</label>
                  </b-col>
                  <b-form-input class="form-input2 my-2" v-model="password" :type="inputType" :state="error.statePass" placeholder="Masukkan Kata Sandi"></b-form-input>
                  <div class="text-danger" v-if="error.password">{{ error.password }}</div>
                  <a class="btn" v-on:click="tampilSandi">
                      <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                      <span style="color: #9B51E0" v-else><b-icon icon="eye-fill"></b-icon></span>
                  </a>

                  <div class="row container">
                      <div class="col form-check form-switch form-check">
                          <input class="form-check-input" type="checkbox" id="flexSwitchCheck">
                          <label class="form-check-label" for="flexSwitchCheck">Remember Me</label>
                      </div>
                      <div class="col text-end lupa-password">
<<<<<<< HEAD:src/views/LoginView.vue
                        <router-link to="/Login/resetPasswordView"><a>Lupa Kata Sandi?</a></router-link>
=======
                        <router-link to="/Login/resetPassword/resetPasswordView"><a>Lupa Password?</a></router-link>
>>>>>>> 956d75fd9f1383e3ba2d1d1910cbacb7b6b07db8:src/views/Login/LoginView.vue
                      </div>
                  </div>
                  <div class="d-grid mt-4">
                      <button class="button-primary" v-on:click="loginUser">Masuk</button>
                  </div>
            </form>
                  <div class="pembungkus mt-4">
                    <p>atau dengan</p>
                  </div>
                  <div class="d-grid my-2">
                      <button class="btn-outline-primary" type="button">Daftar</button>
                  </div>
                  <div class="d-grid">
                      <button class="btn-outline-primary" type="button">Button</button>
                  </div>
          </div>
        </div>
      </div>
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
.leftside, .rightside {
    height:100vh;
    width: 100%;
}

.leftside{
    background: rgba(155, 81, 224, 0.1);
}
.rightside{
    background: white;
}
.button-primary{
    color: white;
    border: none;
    width: 100%;
    height: 50px;
    background: #9B51E0;
    /* Shadow/1 */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
}
.btn-outline-primary{
    color: #9B51E0 !important;
    border: 1.5px solid #9B51E0 !important;
    background-color: white;
    /* Shadow/1 */
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.03);
    border-radius: 10px;
    width: 100%;
    height: 50px;
}
.form-input1{
    width: 502px;
    height: 60px;
    left: 792px;
}
.form-input2{
    width: 502px;
    height: 60px;
    left: 792px;
}
.lupa-password a{
    color: #9B51E0;
    text-decoration: none;
}
.pembungkus{text-align: center;}
.pembungkus p{position: relative;  display: inline-block;}

.pembungkus p:before{
    content: " ";
    position: absolute;
    border-bottom: 1px solid rgba(155, 81, 224, 0.473);
    width: 100px;
    left: -130px;
    top: 50%;
}
.pembungkus p:after{
    content: " ";
    position: absolute;
    border-bottom: 1px solid rgba(155, 81, 224, 0.473);
    width: 100px;
    right: -130px;	
    top: 50%;
}
</style>
