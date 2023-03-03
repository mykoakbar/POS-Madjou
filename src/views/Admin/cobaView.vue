<template>
    <div class="coba">
       <form action="">
        <input type="text" placeholder="email username">
        <input type="password" placeholder="password">
        <input onclick="setcookie()" type="checkbox"><label for="">remember me?</label>
        <button>Login</button>
       </form>
    </div>
</template>

<script>

export default {
    name: 'cobaView',
    methods: {
        setcookie: function(){
            var u = document.getElementById('username').value;
            var p = document.getElementById('password').value;

            document.cookie="myusername="+u+";path=http://localhost:8080/?#/Admin/cobaView"
            document.cookie="mypassword="+p+";path=http://localhost:8080/?#/Admin/cobaView"
        }
    }
}
</script>

<style>

</style>