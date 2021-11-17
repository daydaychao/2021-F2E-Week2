
import { createPinia } from "pinia"
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from '@/router'

import './assets/styles/index.css'
import App from './App.vue'

createApp(App).use(createPinia()).use(router).mount('#app')
