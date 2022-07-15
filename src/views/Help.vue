<template>
  <app-page back title="Help">
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
        title: 'What is this system for?',
        text: 'A demo banking system that is created in order to track, create, and edit any incoming requests from banking customers.'
      },
      {
        title: 'How do I authorise?',
        text: 'The authorisation method is done through Firebase. In order to log in you use the kottinov@gmail.com email and adminus as a password'
      },
      {
        title: 'What is involved in this project?',
        text: 'Project is created by using Vue CLI, Vuex for state managment, Vue Router for dynamic page routing, Firebase for authorisation and databases, Vee-Validate for form validation along with yup'
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