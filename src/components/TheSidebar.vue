<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>

    <div class="sidebar-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, esse? Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, delectus.</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()

        const sidebar = computed(() => store.state.sidebar)

        return {
            sidebar,
            close: () => store.commit('closeSidebar')
        }
    }
}
</script>

<style>

</style>