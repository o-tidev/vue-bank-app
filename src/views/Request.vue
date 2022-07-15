<template>
  <app-loader v-if="loading" />
  <app-page back title="request" v-else-if="request">
    <p><strong>holder fullname</strong>: {{ request.fullname }}</p>
    <p><strong>holder phone</strong>: {{ request.phone }}</p>
    <p><strong>request amount</strong>: {{ currency(request.amount) }}</p>
    <p>
      <strong>request status</strong>:
      <app-status :type="request.status"></app-status>
    </p>

    <div class="form-control">
      <label for="status">STATUS</label>
      <select id="status" v-model="status">
        <option value="done">Completed</option>
        <option value="denied">Denied</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
      </select>
    </div>

    <button class="btn danger" @click="remove">Delete</button>
    <button class="btn" @click="update" v-if="hasChanges">Update</button>
  </app-page>
  <h3 v-else class="text-center text-white">
    A request with id = {{ id }} wasn't found
  </h3>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import AppPage from "../ui/AppPage.vue";
import { useStore } from "vuex";
import AppLoader from "../ui/AppLoader.vue";
import AppStatus from "../ui/AppStatus.vue";
import { currency } from "../utils/currency";
import router from "../router";
export default {
  setup() {
    // defining the hooks
    const loading = ref(true);
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const request = ref({});
    const status = ref();

    // loading posts once the component is mounted
    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadById", route.params.id);
      status.value = request.value?.status;
      loading.value = false;
    });

    // defining the changes if there is any avalaible
    const hasChanges = computed(() => request.value.status !== status.value);

    // removing post through firebase
    const remove = async () => {
      await store.dispatch("request/remove", route.params.id);
      router.push("/");
    };

    // updating the request through firebase
    const update = async () => {
      const data = {
        ...request.value,
        status: status.value,
        id: route.params.id,
      };
      await store.dispatch("request/update", data);
      request.value.status = status.value;
    };

    return {
      loading,
      request,
      id: route.params.id,
      currency,
      remove,
      status,
      hasChanges,
      update,
    };
  },
  components: { AppPage, AppLoader, AppStatus },
};
</script>

<style></style>
