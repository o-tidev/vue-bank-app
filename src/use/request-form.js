import { useField, useForm } from "vee-validate";
import * as yup from 'yup'

export function useRequestForm(fn) {
    const { isSubmitting, handleSubmit } = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const { value: fullname, errorMessage: fError, handleBlur: fBlur } = useField(
        'fullname',
        yup.string()
            .trim()
            .required('enter a fullname')
    )

    const { value: phone, errorMessage: pError, handleBlur: pBlur } = useField(
        "phone",
        yup.string()
            .trim()
            .required('enter a phone number')
    );

    const { value: amount, errorMessage: aError, handleBlur: aBlur } = useField(
        "amount",
        yup.number()
        .required('enter an amount')
        .min(0, 'amount cannot be lower than 0')
    );

    const { value: status, errorMessage: sError, handleBlur: sBlur } = useField("status");

    const onSubmit = handleSubmit(fn)

    return {
        status, 
        isSubmitting,
        onSubmit,
        // fullname validation
        fullname, fError, fBlur,
        // phone validation
        phone, pError, pBlur,
        // amount validation 
        amount, aError, aBlur, 
        // status validation
        status, sError, sBlur
    }
}