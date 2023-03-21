<template>
  <div class="verifikasiEmail">
    <div class="row g-0">
        <div class="col g-0">
            <div class="leftside d-flex justify-content-center align-items-center">
                <img style="width: 100%;" src="assets/cekEmail.svg">
            </div>
        </div>
        <div class="col-md-6 g-0">
            <div class="rightside d-flex justify-content-center align-items-center">
                <div class="container text-center px-5">
                    <h1>Cek email anda</h1>
                    <p style="weight: 400; color: #9F9F9F;">Kami mengirim tautan setel ulang kata sandi ke</p>
                    <b><p style="color: rgb(126 124 124);">{{ email }}</p></b>
                    <div class="d-grid mt-4">
                        <router-link to="/Login/resetPassword/sandiBaru/sandiBaruView">
                            <button type="submit" class="button-primary">Buka Email App</button>
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
import kembaliLogin from '@/components/kembaliLogin.vue'

export default {
    name: 'cobaView',
    components: {
        kembaliLogin
    },
    data(){
        return{
            email : localStorage.getItem("email")
        }
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