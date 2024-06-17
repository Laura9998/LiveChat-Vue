<template>
    <div class="container">
       <Navbar></Navbar>
       <ChatWindow></ChatWindow>
       <NewChatForm></NewChatForm>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue';
import getUser from '@/composables/getUser';
import { useRouter } from 'vue-router';
import { watch } from 'vue';
import NewChatForm from '@/components/newChatForm.vue';
import ChatWindow from '@/components/chatWindow.vue';
export default {
    components: { Navbar, NewChatForm, ChatWindow },
    
    setup() {
        let {user}=getUser();
        let router=useRouter();
        watch(user,()=>{
            if (!user.value) {
                router.push('/');
            }
        })
    }
}
</script>
<style>
    
</style>