<template>
  <div>
    <h1>Register</h1>
    <input 
    type="email" 
    name="email"
    placeholder="email"
    v-model="email"
    >
    <br>
    <input 
    type="password" 
    name="password"
    placeholder="password"
    v-model="password"
    >
    <br>
    <button
    @click="register">
        Register
    </button>
  </div>
</template>
<script>
import Auth from '../services/Auth'
export default {
  data () {
    return {
        email:'',
        password: ''
    }
  },
  methods:{
    async register(){
        const response = await Auth.register({
            email:this.email,
            password:this.password
        })
        console.log(response)
    }
  },
//   A watch functions watches for a property to change and will then fire the functions within
  watch:{
      email(value){
          console.log('email has changed: ,', value)
      }
  }
}
</script>
<style scoped>
</style>