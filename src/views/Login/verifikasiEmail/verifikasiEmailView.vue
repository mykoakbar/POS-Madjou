<template>
  <div class="verifikasiEmail mt-5">
    <div class="container">
        <div class="otp-email" v-for="otp in OTP" :key="otp.id">Kode OTP telah dikirim ke email : {{ otp }}</div>
        <form @submit="cekOTP">
            <label for="kode otp">Kode OTP</label>
            <input v-model="otp" type="text" placeholder="Masukkan kode OTP anda">
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
                otp: ''
            }
        }
    },
    methods: {
        async cekOTP(){
            this.error.otp = '';

            let result = await axios .get(`http://localhost:3000/user?q=`, this.otp)
            if(result.status == 200 && result.data.length>0){
                this.$router.push("/sandiBaruView")
            } else if(result.status == 200 && result.data.length==0 && this.otp != ''){
                this.error.otp = 'Anda memasukkan kode verifikasi tidak sah'
            }

            if(this.otp == ''){
                this.error.otp = 'kolom wajib diisi'
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