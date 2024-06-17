<template>
    <div class="welcome container">
      <div v-if="showloginform">
        <Login @enterChatroom="enterChatroom"></Login>
        <p>Not a member? <span @click="showloginform=!showloginform">Create a account?</span></p>
      </div>
      <div v-else>
        <SignUp @enterChatroom="enterChatroom"></SignUp>
        <p>Already a member? <span @click="showloginform=!showloginform">Log in your account</span></p>
      </div>
    </div>
  </template>
  
  <script>
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router'

  export default {
    components: { SignUp, Login },
    setup(){
      let showloginform=ref(true);
      let router=useRouter();
      let enterChatroom=()=>{
        router.push({name:"Chatroom"})
      }
      return{showloginform,enterChatroom};
    }
}
  </script>
  
  <style>
       .welcome {
          text-align: center;
          padding: 20px 0;
        }
        .welcome form{
          width: 300px;
          margin: 20px auto;
        }   
        .welcome label { 
          display: block;
          margin: 20px 0 10px;}

        .welcome input {
            width: 100%;
            padding: 10px;
            border-radius: 20px;
            border: 1px solid #eee;
            outline: none;
            color: #999;
            margin: 10px auto;
        }
        .welcome span{
            font-weight: bold;
            text-decoration: underline;
            cursor: pointer;
        }
        .welcome button{ 
          margin: 20px auto;
        }
  </style>