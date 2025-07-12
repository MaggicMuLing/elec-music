import { createApp } from 'vue'
import './style.css'
import './assets/css/main.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import router from './router'
import pinia from './store'



// Vuetify 样式引入适配
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
  },
})

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
