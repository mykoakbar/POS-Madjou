<template>
   <div class="coba">
        <div class="container">
            <form>
                <b-container fluid>
                <b-row class="my-1">
                    <b-col sm="3">
                        <label for="input-invalid">Password atas:</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="passAtas" :type="inputType" :state="error.stateAtas" placeholder="masukkan password baru"></b-form-input>
                        <div class="text-danger" v-if="error.passAtas">{{ error.passAtas }}</div>
                    </b-col>
                </b-row>
                <b-row class="my-1">
                    <b-col sm="3">
                        <label for="input-invalid">Password Bawah :</label>
                    </b-col>
                    <b-col sm="9">
                        <b-form-input v-model="passBawah" :type="inputType" :state="error.stateBawah" placeholder="masukkan password konfirmasi"></b-form-input>
                        <div class="text-danger" v-if="error.passBawah">{{ error.passBawah }}</div>
                        <a class="btn" v-on:click="tampilSandi">
                            <span v-if="inputType == 'password'"><b-icon icon="eye-slash-fill"></b-icon></span>
                            <span class="text-success" v-else><b-icon icon="eye-fill"></b-icon></span>
                        </a>
                    </b-col>
                </b-row>
                </b-container>

                <button class="btn btn-success" v-on:click="login">Login</button>
            </form>
        </div>
   </div>
</template>

<script>

export default {
    name: 'cobaView',
    data() {
      return {
        passAtas: '',
        passBawah: '',
        inputType: 'password',
        error:{
            passAtas: '',
            passBawah: '',
            stateAtas: null,
            stateBawah: null,
        }
      }
    },
    methods: {
        tampilSandi(){
            this.inputType = this.inputType === 'password' ? 'text' : 'password';
        },
        async login(){
            if(this.passAtas.length > 8 && this.passAtas.match(/[a-z]/) && this.passAtas.match(/[A-Z]/) && this.passAtas.match(/\d/)){
                this.error.stateAtas = true
                this.error.stateBawah = true
                this.error.passAtas = ''
                this.error.passBawah = ''
            }else {
                this.error.stateAtas = false
                this.error.passAtas = 'Sing tatag cah nom, Atine kudu bakoh'
            }

            if(this.passAtas == ''){
                this.error.stateAtas = false
                this.error.passAtas= 'input field required'
            } else if(this.passBawah == ''){
                this.error.stateBawah = false
                this.error.passBawah = 'input field required'
            } else if(this.passAtas != this.passBawah){
                this.error.passBawah = 'text not matching'
                this.error.stateBawah = false
            }
        }
    }
}
</script>

<style>

</style>