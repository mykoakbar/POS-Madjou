<template>
  <div class="resetPassword">
    <div class="row g-0">
        <div class="col g-0">
            <div class="leftside d-flex justify-content-center align-items-center">
                <img src="assets/Reset Password-1.svg">
            </div>
        </div>
        <div class="col g-0">
            <div class="rightside d-inline-flex align-items-center">
                <div class="container px-5">
                    <h1>Lupa Kata Sandi?</h1>
                    <p style="weight: 400; color: rgba(0, 0, 0, 0.3);">Jangan khawatir, kami akan mengirimkan instruksi reset</p>
                    <form @submit="cekEmail">
                        <div class="my-4">
                            <div v-if="error.email" class="iconpengguna-resetPassword"><img src="assets/icon-pengguna.svg"></div>
                            <div v-else class="iconpengguna-resetPassword"><img src="assets/icon-profile.svg"></div>
                            <label class="ms-2">Nama Pengguna/Email</label>
                            <b-form-input :state="error.stateEmail" v-model="email" class="form-input1" type="email" placeholder="Masukkan email anda"></b-form-input>
                            <div class="error-validation mt-1" v-if="error.email">{{ error.email }}</div>
                            <div class="text-success mt-1" v-if="success.email"><b-icon icon="arrow-clockwise" animation="spin" font-scale="1"></b-icon> {{ success.email }}</div>
                        </div>
                        <div class="d-grid mt-5">
                            <button type="submit" class="button-primary">Kirim</button>
                        </div>
                    </form>
                    <kembaliLogin />
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import kembaliLogin from '@/components/kembaliLogin.vue'

export default {
    name: "resetPasswordView",
    components: {
      kembaliLogin
    },
    data(){
      return{
        email: '',
        error: {
          stateEmail: null,
          email: ''
        },
        success: {
          email: ''
        }
      }
    },
    methods: {
      async cekEmail(){
          this.error.email = '';
  
          let result = await axios .get(`http://localhost:3000/user?email=${this.email}`)
          if(result.status==200 && result.data.length>0){
            setTimeout(() => { this.$router.push({ path: '/Login/resetPassword/verifikasiEmail/verifikasiEmailView'}) }, 2000)
            this.success.email = 'Email anda benar'
            this.error.stateEmail = true;
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
.form-input1{
    width: 502px;
    height: 50px;
    left: 792px;
    padding: 0.375rem 2.75rem !important;
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
.iconpengguna-resetPassword{
  position: relative;
  top: 60px;
  left: 15px;
  width: 5%;
  color: rgba(0, 0, 0, 0.3);
}
</style>