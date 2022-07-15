import { useField, useForm } from "vee-validate";
import * as yup from "yup";

export function useRequestForm(fn) {
  const { isSubmitting, handleSubmit } = useForm({
    initialValues: {
      status: "active",
    },
  });

  // full name validation on create request
  const { value: fullname, errorMessage: fError, handleBlur: fBlur } = useField(
    "fullname",
    yup
      .string()
      .trim() // all spaces eliminated
      .required("Enter a fullname")
  );

  // phone validation on create request
  const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
    "phone",
    yup
      .string()
      .trim() // all spaces eliminated
      .required("Enter a phone number")
  );

  // amount validation
  const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
    "amount",
    yup
      .number()
      .required("Enter an amount")
      .min(0, "Amount cannot be lower than 0")
  );

  // status defining
  const { value: status, errorMessage: sError, handleBlur: sBlur } = useField(
    "status"
  );

  const onSubmit = handleSubmit(fn);

  return {
    status,
    isSubmitting,
    onSubmit,
    // fullname validation
    fullname,
    fError,
    fBlur,
    // phone validation
    phone,
    pError,
    pBlur,
    // amount validation
    amount,
    aError,
    aBlur,
    // status validation
    status,
    sError,
    sBlur,
  };
}
