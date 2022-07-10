<template>
<h4 v-if="requests.length === 0" class="text-center">no requests</h4>
  <table v-else class="table">
    <thead>
        <tr>
            <th>#</th>
            <th>FULL NAME</th>
            <th>PHONE</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>ACTION</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="(request, idx) in requests" :key="request.id">
            <td> {{ idx + 1}} </td>
            <td> {{ request.fullname }} </td>
            <td> {{ request.phone }} </td>
            <td> {{ currency(request.amount) }}</td>
            <td> <app-status :type='request.status' /> </td>
            <td> 
                <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: request.id}}">
                    <button class="btn" @click="navigate">OPEN</button>
                </router-link>
            </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
import { currency } from '../utils/currency'
import AppStatus from '../ui/AppStatus.vue'

export default {
    props: {
        requests: {
            type: Array,
        }
    },
    setup() {
        return {
            currency
        }
    },
    components: {
        AppStatus
    }
}
</script>

<style>

</style>