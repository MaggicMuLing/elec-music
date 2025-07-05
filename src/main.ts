import { createApp } from 'vue'
import './style.css'
import './assets/css/main.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

const app = createApp(App)
app.use(VueQueryPlugin)
app.mount('#app')
