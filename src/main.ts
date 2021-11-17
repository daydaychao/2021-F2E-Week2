
import { createPinia } from "pinia"
import { createApp } from 'vue'
import VueRouter from 'vue-router'
import './assets/styles/index.css'
import App from './App.vue'

createApp(App).use(createPinia()).use(VueRouter).mount('#app')
