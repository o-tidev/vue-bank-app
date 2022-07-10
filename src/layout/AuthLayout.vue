<template>
    <div class="container">
        <app-message></app-message>
        <router-view/>
    </div>
</template>

<script>
import AppMessage from '../ui/AppMessage.vue'


export default {
    components: {
        AppMessage
    }
}
</script>

<style>

</style>