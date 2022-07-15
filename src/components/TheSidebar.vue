<template>
  <div class="sidebar" v-if="sidebar">
    <span class="sidebar-close" @click="close">&times;</span>
    <!-- sidebar paragraph -->
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
      // defining sore 
        const store = useStore()
        // getting the sidebar via computed options
        const sidebar = computed(() => store.state.sidebar)
        // defining them for composition api
        return {
            sidebar,
            close: () => store.commit('closeSidebar')
        }
    }
}
</script>

<style scoped>

p { padding: 25px; }

</style>


