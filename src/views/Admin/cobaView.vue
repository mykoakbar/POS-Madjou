<template>
    <div class="coba">
        <div>
            <label></label>
            <input :type="show ? 'text' : 'password'" id="password" v-model="password"/>
            <div class="eyeButton">
            <span @mousedown="show = !show" @mouseup="show = !show" @touchstart="show = !show" @touchend="show = !show" style="cursor: pointer;"><b-icon icon="eye-slash-fill"></b-icon></span>
            </div>
            <small class="errorMessage" v-if="password.error">Password field is required.</small> 
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