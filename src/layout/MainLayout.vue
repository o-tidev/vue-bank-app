<template>
  <the-navbar></the-navbar>
  <the-sidebar></the-sidebar>
    <div class="container with-nav">
      <app-message></app-message>
        <router-view/>
    </div>
</template>

<script>
import AppMessage from '../ui/AppMessage.vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheSidebar from '../components/TheSidebar.vue'


export default {
  components: { TheNavbar, AppMessage, TheSidebar },

}
</script>

<style>

</style>