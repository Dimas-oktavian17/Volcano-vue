import './assets/main.css'

import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('IconVue', Icon)
app.use(router).use(autoAnimatePlugin)
app.mount('#app')
