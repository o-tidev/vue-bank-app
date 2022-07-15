<template>
  <div v-if="message" :class="['alert', message.type]">
    <p class="alert-title" v-if="title">{{ title }}</p>
    <p>{{ message.value }}</p>
    <span class="alert-close" @click="close">&times;</span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    // defining store
    const store = useStore();
    // title maps for type of errors & their styling
    const TITLE_MAP = {
      primary: "success",
      danger: "error",
      warning: "warning",
    };

    // getting the message through computed
    const message = computed(() => store.state.message);

    // rendering the message value in dependence of the message type
    const title = computed(() =>
      message.value ? TITLE_MAP[message.value.type] : null
    );
    return {
      message,
      title,
      // closing the modal via store commit
      close: () => store.commit("clearMessage"),
    };
  },
};
</script>

<style></style>
