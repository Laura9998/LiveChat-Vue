<template>
    <form @submit.prevent="Login">
        <h1>Login</h1>
        <input type="email" v-model="email" placeholder="email">
        <input type="password" v-model="password" placeholder="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button>Log in</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import useLogin from '@/composables/useLogin'

export default {
    setup(props,context){
        let email=ref("")
        let password=ref("")
        let {error,signIn}=useLogin()
        let Login=async()=>{
            let res =await signIn(email.value,password.value)
            context.emit("enterChatroom")
        }
        return{email,password,Login,error};
    }
}
</script>
<style>
    
</style>