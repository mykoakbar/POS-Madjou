<template>
  <div class="sandiBaru">
    <div class="container">
        <form @submit="cekSandi">
            <label for="password baru">Kata Sandi Baru</label>
            <b-form-input :state="error.stateSandiBaru" class="form-control" v-model="sandiBaru" :type="inputType" placeholder="Masukkan Kata Sandi Baru"></b-form-input>
            <div v-if="error.sandiBaru" class="error-validation">{{ error.sandiBaru }}</div>

            <label for="password baru">Konfirmasi Kata Sandi Baru</label>
            <b-form-input :state="error.stateSandiKonfirmasi" class="form-control" v-model="sandiKonfirmasi" :type="inputType" placeholder="Konfirmasi Kata Sandi Baru"></b-form-input>
            <div v-if="error.sandiKonfirmasi" class="error-validation">{{ error.sandiKonfirmasi }}</div>
            <a class="btn" v-on:click="tampilSandi">
                <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                <span class="text-success" v-else><b-icon icon="eye-fill"></b-icon></span>
            </a>

            <button class="btn btn-success" type="submit">Simpan</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
    nama: ["sandiBaruView"],
    data(){
        return{
            sandiBaru: '',
            sandiKonfirmasi: '',
            inputType: 'password',
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

            if(this.sandiBaru.length > 8 && this.sandiBaru.match(/[a-z]/) && this.sandiBaru.match(/[A-Z]/) && this.sandiBaru.match(/\d/) && this.sandiBaru == this.sandiKonfirmasi){
                
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
                this.error.stateSandiKonfirmasi = false
            } 
        },
        tampilSandi(){
            this.inputType = this.inputType === "password" ? "text" : "password";
        }
    }
}
</script>

<style>
.error-validation{
  color: red;
}
</style>