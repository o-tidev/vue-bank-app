<template>
    <nav class="navbar">
        <h3>vue bank</h3>

        <ul class="navbar-menu">
            <li>
                <router-link to="/">requests</router-link>
            </li>
            <li>
                <router-link to="/help">help</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="open">messages</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout">exit</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'



export default {
    setup() {
        const router = useRouter() 
        const store = useStore()

        return {
            logout: () => {
                store.commit('auth/logout')
                router.push('/auth')
            },
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

