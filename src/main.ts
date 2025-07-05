import { createApp } from 'vue'
import './style.css'
import './assets/css/main.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'
import pinia from './store'

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(router)
app.use(pinia)
app.mount('#app')
