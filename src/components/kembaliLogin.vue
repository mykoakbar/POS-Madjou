<template>
  <div class="kembali">
    <div class="text-center mt-3">
        <p>
            <b-icon icon="arrow-left"></b-icon>  Kembali ke 
            <router-link class="kembali-login" to="/"><b>Login</b></router-link>
        </p>
    </div>
  </div>
</template>

<script>
export default {
    nama: "kembaliLogin"
}
</script>

<style>
.kembali-login{
    color: #9B51E0 !important;
    text-decoration: none;
}
</style>