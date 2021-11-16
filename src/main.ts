
import { createPinia } from "pinia"
import { createApp } from 'vue'
import './assets/styles/index.css'
import App from './App.vue'

createApp(App).use(createPinia()).mount('#app')
