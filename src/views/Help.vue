<template>
  <app-page back title="help">
    <question-item
    v-for="question in questions"
    :key="question.title"
    :question="question"
    ></question-item>
  </app-page>
</template>

<script>
import QuestionItem from '../components/questions/QuestionItem.vue'
import AppPage from '../ui/AppPage.vue'

export default {
  setup() {
    const questions = [
      {
        title: 'what is this system for?',
        text: 'a demo banking system that will help track the requests'
      },
      {
        title: 'how do i authorise?',
        text: 'you authorise via firebase, using the email /kottinov@gmail.com/ and the password /adminus/'
      },
      {
        title: 'what is involved in this project?',
        text: 'project is created by using vue, vuex, vue router, firebase, vee-validate for form validation along with yup'
      }
    ]

    return { questions }
  },
  components: {
    AppPage,
    QuestionItem,
  }
  }
</script>