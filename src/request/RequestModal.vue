<template>
  <!-- form validation -->
  <form @submit.prevent="onSubmit">
    <div class="form-control" :class="{ invalid: fError }">
      <label for="fullname">NAME & SURNAME</label>
      <input type="text" id="fullname" v-model="fullname" @blur="fBlur" />
      <small v-if="fError">{{ fError }}</small>
    </div>

    <!-- form validation -->
    <div class="form-control" :class="{ invalid: pError }">
      <label for="phone">PHONE</label>
      <input type="text" id="phone" v-model="phone" @blur="pBlur" />
      <small v-if="pError">{{ pError }}</small>
    </div>

    <!-- form validation -->
    <div class="form-control" :class="{ invalid: aError }">
      <label for="amount">AMOUNT</label>
      <input type="number" id="amount" v-model.number="amount" @blur="aBlur" />
      <small v-if="aError">{{ aError }}</small>
    </div>

    <!-- form validation -->
    <div class="form-control">
      <label for="status">STATUS</label>
      <select id="status" v-model="status">
        <option value="done">completed</option>
        <option value="denied">denied</option>
        <option value="active">active</option>
        <option value="pending">pending</option>
      </select>
    </div>

    <button class="btn primary" :disabled="isSubmitting">create</button>
  </form>
</template>

<script>
import { useRequestForm } from "../use/request-form";
import { useStore } from "vuex";
export default {
  // defining the emitted events
  emits: ["created"],
  // using _ as a good tone, in order not to leave an empty space
  // in case we will to implement another parameters in further development.
  setup(_, { emit }) {
    // defining store here
    const store = useStore();
    // dispatching with promise
    const submit = async (values) => {
      await store.dispatch("request/create", values);
      emit("created");
    };

    return {
      ...useRequestForm(submit),
    };
  },
};
</script>

<style></style>
