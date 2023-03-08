<template>
  <div class="sandiBaru">
    <div class="row g-0">
        <div class="col g-0">
            <div class="leftside d-flex justify-content-center align-items-center">
                <img style="width: 100%;" src="assets/cekEmail.svg">
            </div>
        </div>
        <div class="col-md-6 g-0">
            <div class="rightside d-flex justify-content-center align-items-center">
                <div class="container px-5">
                    <h1>Ubah Kata Sandi Baru</h1>
                    <p style="weight: 400; color: #9F9F9F;">Kata sandi baru Anda harus berbeda dengan Kata sandi sebelumya yang digunakan</p>
                    <form @submit="cekSandi">
                        <div v-if="error.sandiBaru" class="iconsandi-sandibaru"><img src="assets/icon-katasandi-error.svg" alt=""></div>
                        <div v-else class="iconsandi-sandibaru"><img src="assets/icon-katasandi.svg" alt=""></div>
                        <label class="ms-2">Kata Sandi Baru</label>
                        <b-form-input :state="error.stateSandiBaru" class="form-input1" v-model="sandiBaru" :type="inputType1" placeholder="Masukkan Kata Sandi Baru"></b-form-input>
                        <div v-if="error.sandiBaru" class="error-validation mt-1">{{ error.sandiBaru }}</div>
                        <div v-if="error.sandiBaru" class="icon-viewBaru-error">
                            <a v-on:click="tampilSandiBaru">
                                <span style="color: #9F9F9F;" v-if="inputType1 == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                                <span style="color: #9B51E0;" v-else><b-icon icon="eye-fill"></b-icon></span>
                            </a>
                        </div>
                        <div v-else class="icon-viewBaru">
                            <a v-on:click="tampilSandiBaru">
                                <span style="color: #9F9F9F;" v-if="inputType1 == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                                <span style="color: #9B51E0;" v-else><b-icon icon="eye-fill"></b-icon></span>
                            </a>
                        </div>
            
                        <div v-if="error.sandiKonfirmasi" class="iconsandi-sandibaru"><img src="assets/icon-katasandi-error.svg" alt=""></div>
                        <div v-else class="iconsandi-sandibaru"><img src="assets/icon-katasandi.svg" alt=""></div>
                        <label class="ms-2">Konfirmasi Kata Sandi Baru</label>
                        <b-form-input :state="error.stateSandiKonfirmasi" class="form-input1" v-model="sandiKonfirmasi" :type="inputType2" placeholder="Konfirmasi Kata Sandi Baru"></b-form-input>
                        <div v-if="error.sandiKonfirmasi" class="error-validation mt-1">{{ error.sandiKonfirmasi }}</div>
                        <div v-if="error.sandiKonfirmasi" class="icon-viewKonfirmasi-error">
                            <a v-on:click="tampilSandiKonfirmasi">
                                <span style="color: #9F9F9F;" v-if="inputType2 == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                                <span style="color: #9B51E0;" v-else><b-icon icon="eye-fill"></b-icon></span>
                            </a>
                        </div>
                        <div v-else class="icon-viewKonfirmasi">
                            <a v-on:click="tampilSandiKonfirmasi">
                                <span style="color: #9F9F9F;" v-if="inputType2 == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                                <span style="color: #9B51E0;" v-else><b-icon icon="eye-fill"></b-icon></span>
                            </a>
                        </div>
                        <div class="d-grid mt-4">
                            <button class="button-primary" type="submit">Simpan</button>
                        </div>
                    </form>
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
    nama: ["sandiBaruView"],
    components: {
        kembaliLogin
    },
    data(){
        return{
            sandiBaru: '',
            sandiKonfirmasi: '',
            inputType1: 'password',
            inputType2: 'password',
            error: {
                sandiBaru: '',
                sandiKonfirmasi: '',
                stateSandiBaru: null,
                stateSandiKonfirmasi: null
            }
        }
    },
    methods: {
        cekSandi(){

            if(this.sandiBaru.length > 8 && this.sandiBaru.match(/[a-z]/) && this.sandiBaru.match(/[A-Z]/) && this.sandiBaru.match(/\d/) && this.sandiBaru != '' && this.sandiBaru == this.sandiKonfirmasi){
                this.error.stateSandiBaru = null
                this.$router.push("/")
                this.$toast.error('Anda berhasil membuat kata sandi', { 
                      type: 'success',
                      position: 'bottom-right',
                      duration: 3000,
                      dismissible: true
              })
            }else{
                this.error.sandiBaru = 'Gunakan 8 karakter atau lebih dengan campuran huruf, angka & simbol'
                this.error.stateSandiBaru = false
                this.error.sandiKonfirmasi = ''
            }

            if(this.sandiBaru == ''){
                this.error.sandiBaru = 'Kolom wajib diisi'
                this.error.stateSandiBaru = false
            } else{
                this.error.stateSandiBaru = false
            }
            if(this.sandiKonfirmasi == ''){
                this.error.sandiKonfirmasi = 'Kolom wajib diisi'
                this.error.stateSandiKonfirmasi = false
            } else{
                this.error.stateSandiKonfirmasi = null
            } 

            if(this.sandiBaru != this.sandiKonfirmasi && this.sandiBaru != '' && this.sandiKonfirmasi != ''){
                this.error.sandiBaru = ''
                this.error.sandiKonfirmasi = 'Kata sandi tidak cocok'
                this.error.stateSandiBaru = null
                this.error.stateSandiKonfirmasi = false
            } 
        },
        tampilSandiBaru(){
            this.inputType1 = this.inputType1 === "password" ? "text" : "password";
        },
        tampilSandiKonfirmasi(){
            this.inputType2 = this.inputType2 === "password" ? "text" : "password";
        }
    }
}
</script>

<style>
.error-validation{
  color: red;
}
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
.iconsandi-sandibaru{
    position: relative;
    top: 60px;
    left: 15px;
    width: 5%;
}

.icon-viewBaru{
  position: relative;
    top: -37px;
    left: 95%;
    width: 4%;
}
.icon-viewKonfirmasi{
  position: relative;
    top: -37px;
    left: 95%;
    width: 4%;
}
.icon-viewBaru-error{
    position: relative;
    top: -64px;
    left: 90%;
    width: 4%;
}
.icon-viewKonfirmasi-error{
    position: relative;
    top: -64px;
    left: 90%;
    width: 4%;
}

@media screen and(max-width: 460px){
    .icon-viewBaru{
        position: relative;
        top: -37px;
        left: 90%;
        width: 4%;
    }
    .icon-viewKonfirmasi{
        position: relative;
        top: -37px;
        left: 90%;
        width: 4%;
    }
    .icon-viewBaru-error{
        position: relative;
        top: -64px;
        left: 83%;
        width: 4%;
    }
    .icon-viewKonfirmasi-error{
        position: relative;
        top: -64px;
        left: 83%;
        width: 4%;
    }
}
</style>