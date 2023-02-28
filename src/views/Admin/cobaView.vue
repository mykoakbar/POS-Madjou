<template>
    <div class="coba">
        <div class="container">
        <h1>Lupa Kata Sandi</h1>
        <form @submit="cekEmail">
            <b-form-input :state="error.stateEmail" v-model="email" class="form-control" type="email" placeholder="Masukkan Email anda"></b-form-input>
            <div class="error-validation" v-if="error.email">{{ error.email }}</div>
            <div class="col-lg-5 mt-2">
            <router-link to="/"><a class="btn btn-danger">kembali</a></router-link>
            <button type="submit" class="btn btn-primary">Kirim</button>
            </div>
        </form>
        </div>
      </div>
</template>

<script> 

export default {
    name: 'cobaView',
    data(){
        return{
            password: ''
        }
    }
}
</script>

<style>
.eyeButton {
  position: absolute;
  right: 5px;
  bottom: 4px;
  top: 23px;
}
</style>