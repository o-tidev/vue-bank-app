<template>
  <form class="card" @submit.prevent="onSubmit">
    <h1 class="auth-header">Hello user, you need it log in.</h1>

    <!-- email validation  -->
    <div :class="['form-control', 't-margin', { invalid: eError }]">
        <input class="input-styling" type="email" id="email" v-model="email" @blur="eBlur" placeholder="Email">
        <!-- conditional error render -->
        <small v-if="eError" >{{ eError }}</small>
    </div>

    <!-- password validation  -->
    <div :class="['form-control', 't-margin', { invalid: pError }]">
        <input class="input-styling" type="password" id="password" v-model="password" @blur="pBlur" placeholder="Password">
        <!-- // conditional error render -->
        <small v-if="pError">{{ pError }}</small>
    </div>


    <!-- gets disabled while async submitting in excess -->
    <button 
        class="btn primary" 
        type="submit" :disabled="isSubmitting || isOverAttempting ">
        Log in
    </button>

    <!-- conditional rendering of the component appears only when button user is over attempting to login -->
    <span class="text-danger" v-if="isOverAttempting">
        Too many attemps, please try later
    </span>

  </form>
</template>

<script>
// hook import from use
import { useLoginForm } from '../use/login-form' 

export default {
    // using composition api for better usability
    setup() {
        // importing a login function as a hook 
        return {...useLoginForm()}
    }
}
</script>

<style scoped>
.form-control input,
.form-control select,
.form-control textarea{
    font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
    margin: 0;
    border: none;
    border-bottom: 2px solid black;
    border-radius: 0px;
    display: block;
    width: 100%;
    color: #2c3e50;
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
    resize: none;
}

.input-styling {
    padding: 20px !important;
}

.t-margin {
    margin-top: 30px;
}
.btn {
    border-radius: 0px;
    margin-top: 15px;
}

.primary {
    color: white;
    background: black;
    border: none
}

.card {
    margin-top: 150px;
    border-radius: 0px;
}

.auth-header {
    text-align: center;
}
</style>