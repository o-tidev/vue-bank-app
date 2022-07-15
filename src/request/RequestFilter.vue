<template>
  <div class="filter">
    <div class="form-control">
      <input type="text" placeholder="enter a name" v-model="name" />
    </div>
    <!-- form select -->
    <div class="form-control">
      <!-- status select -->
      <select v-model="status">
        <option disabled selected>choose status</option>
        <option value="done">completed</option>
        <option value="denied">denied</option>
        <option value="active">active</option>
        <option value="pending">pending</option>
      </select>
    </div>
    <!-- clear button if selected a status for render -->
    <button class="btn warning" v-if="isActive" @click="reset">clear</button>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";

export default {
  // emiting model updating
  emits: ["update:modelValue"],
  props: {
    modelValue: {},
  },

  // using composition api
  setup(_, { emit }) {
    const name = ref("");
    const status = ref();

    // watcher for filtering
    watch([name, status], (values) => {
      emit("update:modelValue", {
        name: values[0],
        status: values[1],
      });
    });

    // render via selected status
    const isActive = computed(() => name.value || status.value);

    // reset button
    const reset = () => {
      name.value = "";
      status.value = null;
    };

    return {
      name,
      status,
      isActive,
      reset,
    };
  },
};
</script>

<style></style>
