import { computed, watch } from "vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// composition api 
export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount } = useForm();

  const store = useStore()
  const router = useRouter()

    // email validation settings with yup  
  const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("please enter an email")
      .email("need a correct email")
  );

    const MIN_VALUE = 6
    
    // password validation settings with yup 
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
    "password",
    yup
      .string()
      .trim()
      .required()
      .min(MIN_VALUE, `please, pass has to be longer than ${MIN_VALUE} characters`)
  );

  const onSubmit = handleSubmit(async values => {
    try {
          await store.dispatch("auth/login", values);
          router.push("/");
    } catch(e) {

    }
  });

    // over attempting (3) gets the button disabled for a certain 
    // period of time
  const isOverAttempting = computed(() => submitCount.value >= 3);

  watch(isOverAttempting, (value) => {
    if (value) {
      setTimeout(() => {
          submitCount.value = 0;
          // button get enabled after some time, 
          // described in the timeout
      }, 2000);
    }
  });

  return {
    email,
    password,
    eError,
    pError,
    eBlur,
    pBlur,
    onSubmit,
    isSubmitting,
    isOverAttempting,
  };
}
