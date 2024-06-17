<template>
    <form @submit.prevent="SignUp">
        <h1>Sign Up</h1>
        <input type="text" v-model="displayName" placeholder="display name">
        <input type="email" v-model="email" placeholder="email">
        <input type="password" v-model="password" placeholder="password">
        <div v-if="error" class="error">{{ error }}</div>
        <button>Sign Up</button>
    </form>
</template>
<script>
import { ref } from "vue"
import useSignUp from '/Users/kaungshanoo/live-chat/src/composables/useSignUp.js'

export default {
    setup(props,context){
        let displayName=ref("")
        let email=ref("")
        let password=ref("")

        let {error, createAccount}=useSignUp()
        let SignUp=async()=>{
           let res=await createAccount(email.value,password.value,displayName.value)
           context.emit("enterChatroom")
        }
        return{ error,displayName,email,password,SignUp};
    }
}
</script>
<style>
    
</style>