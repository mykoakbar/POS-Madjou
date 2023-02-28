<template>
  <div class="verifikasiEmail mt-5">
    <div class="container">
        <div class="otp-email" v-for="otp in OTP" :key="otp.id">Kode OTP telah dikirim ke email : {{ otp }}</div>
        <form @submit="cekOTP">
            <label for="kode otp">Kode OTP</label>
            <b-form-input :state="error.stateOTP" v-model="otp" type="text" placeholder="Masukkan kode OTP anda"></b-form-input>
            <div class="error-validation" v-if="error.otp">{{ error.otp }}</div> <br>

            <button type="submit" class="btn btn-success">Kirim</button> 
        </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    nama: "verifikasiEmailView",
    data(){
        return{
            otp: '',
            OTP:  [],
            error: {
                otp: '',
                stateOTP: null
            }
        }
    },
    methods: {
        async cekOTP(){
            this.error.otp = '';

            let result = await axios .get(`http://localhost:3000/user?otp=${this.otp}`)
            if(result.status == 200 && result.data.length>0){
                this.$router.push("/Login/sandiBaru/sandiBaruView")
            } else if(result.status == 200 && result.data.length==0 && this.otp != ''){
                this.error.otp = 'Anda memasukkan kode verifikasi tidak sah'
                this.error.stateOTP = false;
            }

            if(this.otp == ''){
                this.error.otp = 'kolom wajib diisi'
                this.error.stateOTP = false;
            }
        },
        ambilEmail(data){
            this.OTP = data;
        }
    },
    mounted(){
        axios
        .get('http://localhost:3000/user?otp')
        .then((response) => this.ambilEmail(response.data))
        .catch((error) => console.log(error))
    }
}
</script>

<style>
.error-validation{
  color: red;
}
</style>