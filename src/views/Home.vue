<template>
  <app-loader v-if="loading"></app-loader>
  <app-page title="incoming requests" v-else>
      <template #header>
        <button class="btn primary" @click="modal = true">create</button>
      </template>

      <request-filter v-model="filter"></request-filter>
      <request-table :requests="requests"></request-table>

      <teleport to="body">
        <app-modal v-if="modal" title="create request" @close="modal = false">
          <request-modal @created="modal = false"></request-modal>
        </app-modal>
      </teleport>
  </app-page>
</template>

<script>
import { useStore } from 'vuex'
import { ref, computed, onMounted, watch } from 'vue'
import AppPage from '../ui/AppPage.vue'
import RequestTable from '../request/RequestTable.vue'
import AppModal from '../ui/AppModal.vue'
import RequestModal from '../request/RequestModal.vue'
import AppLoader from '../ui/AppLoader.vue'
import RequestFilter from '../request/RequestFilter.vue'

export default {
  setup() {
    const store = useStore()
    const modal = ref(false)
    const loading = ref(false)
    const filter = ref({})

    onMounted(async () => {
      loading.value = true
      await store.dispatch('request/load')
      loading.value = false
    })

    const requests = computed(() => store.getters['request/requests']
      .filter(request => {
        if (filter.value.name) {
          return request.fullname.includes(filter.value.name)
        }
        return request
      })
      .filter(request => {
        if (filter.value.status) {
          return filter.value.status === request.status
        }
        return request
      })
    )

    return {
      modal, requests, loading, filter
    }
  },
  name: 'Home',
  components: { AppPage, RequestTable, AppModal, RequestModal, AppLoader, RequestFilter }
}
</script>
