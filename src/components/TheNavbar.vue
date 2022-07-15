<template>
    <nav class="navbar">
        <h3>Online bank</h3>
        <!-- navbar cover -->
        <ul class="navbar-menu">
            <!-- navbar links linked to router -->
            <li>
                <router-link to="/">Requests</router-link>
            </li>
            <li>
                <router-link to="/help">Help?</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="open">Messages</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Exit</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'



export default {
    setup() {
        // defining router and store
        const router = useRouter() 
        const store = useStore()

        return {
            // commiting router paths 
            logout: () => {
                store.commit('auth/logout')
                router.push('/auth')
            },
            // opening sidebar method
            open: () => store.commit('openSidebar')
        }
    }
}
</script>

<style scoped>
    h3 {
        color: black;
    }

</style>

