import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './theme.css'
require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

createApp(App).use(store).use(router).mount('#app')
