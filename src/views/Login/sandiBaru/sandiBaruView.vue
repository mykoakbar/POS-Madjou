<template>
  <div class="sandiBaru">
    <div class="container">
        <form @submit="cekSandi">
            <label for="password baru">Kata Sandi Baru</label>
            <input class="form-control" v-model="sandiBaru" :type="inputType" placeholder="Masukkan Kata Sandi Baru">
            <a class="btn" v-on:click="tampilSandi">
                <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                <span class="text-success" v-else><b-icon icon="eye-fill"></b-icon></span>
            </a>
            <div v-if="error.sandi" class="error-validation">{{ error.sandi }}</div>

            <label for="password baru">Konfirmai Kata Sandi Baru</label>
            <input class="form-control" v-model="sandiKonfirmasi" :type="inputType" placeholder="Konfirmasi Kata Sandi Baru">
            <a class="btn" v-on:click="tampilSandi">
                <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                <span class="text-success" v-else><b-icon icon="eye-fill"></b-icon></span>
            </a>
            <div v-if="error.sandiKonfirmasi" class="error-validation">{{ error.sandiKonfirmasi }}</div>

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
                sandi: '',
                sandiKonfirmasi: ''
            }
        }
    },
    methods: {
        cekSandi(){
            this.error.sandi = '';
            this.error.sandiKonfirmasi = '';

            if(this.sandiBaru && this.sandiKonfirmasi != '' && this.sandiBaru == this.sandiKonfirmasi){
                this.$router.push("/")
                this.$toast.error('Anda berhasil membuat kata sandi', { 
                      type: 'success',
                      position: 'bottom-right',
                      duration: 3000,
                      dismissible: true
              })
            }
            if(this.sandiBaru.length < 8){
                this.error.sandi = 'Gunakan 8 karakter atau lebih dengan campuran huruf, angka & simbol'
            }

            if(this.sandiBaru == ''){
                this.error.sandi = 'Kolom wajib diisi'
            } 
            if(this.sandiKonfirmasi == ''){
                this.error.sandiKonfirmasi = 'Kolom wajib diisi'
            }

            if(this.sandiBaru != this.sandiKonfirmasi){
                this.error.sandiKonfirmasi = 'Kata sandi tidak cocok'
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