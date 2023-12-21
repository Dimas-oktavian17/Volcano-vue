import './assets/output.css'

import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import navbarComponent from './components/navbarComponent.vue'
import darkMode from './components/darkMode.vue'
import hamburgerMenu from './components/hamburgerMenu.vue'
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
app.component('IconVue', Icon)
    .component('navbarComponent', navbarComponent)
    .component('darkMode', darkMode)
    .component('hamburgerMenu', hamburgerMenu)

app.use(autoAnimatePlugin)
app.mount('body')
