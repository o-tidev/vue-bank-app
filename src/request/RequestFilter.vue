<template>
  <div class="filter">
    <div class="form-control">
        <input type="text" placeholder="enter a name" v-model="name">
    </div>
    <div class="form-control">
        <select v-model="status">
            <option disabled selected>choose status</option>
            <option value="done">completed</option>
            <option value="denied">denied</option>
            <option value="active">active</option>
            <option value="pending">pending</option>
        </select>
    </div>
    <button class="btn warning" v-if="isActive" @click="reset">clear</button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'

export default {
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            
        }
    },
    setup(_, { emit }) {
        const name = ref('')
        const status = ref()

        watch([name, status], values => {
            emit('update:modelValue', {
                name: values[0],
                status: values[1]
            })
        })

        const isActive = computed(() => name.value || status.value)

        const reset = () => {
            name.value = ''
            status.value = null
        }

        return {
            name, 
            status,
            isActive,
            reset
        }
    }

}
</script>

<style>

</style>