<template>
  <div class="verifikasiEmail">
    <div class="row">
        <div class="col g-0">
            <div class="leftside d-flex justify-content-center align-items-center">
                <img src="assets/cekEmail.svg">
            </div>
        </div>
        <div class="col g-0">
            <div class="rightside d-flex justify-content-center align-items-center">
                <div class="container text-center px-5">
                    <h1>Cek email anda</h1>
                    <p style="weight: 400; color: #9F9F9F;">Kami mengirim tautan setel ulang kata sandi ke</p>
                    <b><p style="weight: 400; color: rgb(126 124 124);" v-for="email in wadah" :key="email.id">{{ email.email }}</p></b>
                    <div class="d-grid mt-5">
                        <router-link to="/Login/resetPassword/sandiBaru/sandiBaruView">
                            <button type="submit" class="button-primary">Kirim</button>
                        </router-link>
                    </div> 
                    <kembaliLogin/>
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
    name: 'cobaView',
    components: {
        kembaliLogin
    },
    data(){
        return{
            wadah: {}
        }
    },
    methods: {
        ambilEmail(data){
            this.wadah = data;
        }
    },
    async mounted(){
        axios
        .get('http://localhost:3000/user')
        .then((response) => this.ambilEmail(response.data))
        .catch((error) => console.log(error))
    }

}
</script>

<style>
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
</style>