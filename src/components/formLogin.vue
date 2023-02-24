<template>
  <div class="formLogin">
    <div class="container">
        <form class="mt-5" action="">
            <div class="form-group">
                <label for="username">username</label>
                <input type="text" class="form-control" placeholder="masukkan username">
            </div>
            <div class="form-group">
                <label for="password">password</label>
                <input type="password" class="form-control" placeholder="masukkan password">
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
  </div>
</template>

<script>

export default {
    name: "formLogin",
    data: function(){
        return{
            username :  '',
            password : ''
        }
    }
}
</script>

<style>

</style>