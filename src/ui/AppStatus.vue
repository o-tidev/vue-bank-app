<template>
  <span :class="['badge', className]">{{ text }}</span>
</template>

<script>
import { ref, watch } from "vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
      // props validator
      validator(value) {
        return ["active", "denied", "done", "pending"].includes(value);
      },
    },
  },
  setup(props) {
    // classesMap types defining
    const classesMap = {
      active: "primary",
      denied: "danger",
      done: "primary",
      pending: "warning",
    };

    // textMap types defining
    const textMap = {
      active: "active",
      denied: "denied",
      done: "completed",
      pending: "processing",
    };

    // watcher for the values of the status
    watch(props, (value) => {
      className.value = classesMap[value.type];
      text.value = textMap[value.type];
    });

    const className = ref(classesMap[props.type]);
    const text = ref(textMap[props.type]);

    return {
      className,
      text,
    };
  },
};
</script>

<style></style>
