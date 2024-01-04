import './assets/output.css'

import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import navbarComponent from './components/navbarComponent.vue'
import darkMode from './components/darkMode.vue'
import hamburgerMenu from './components/hamburgerMenu.vue'
import mainComponent from '@/components/mainComponent.vue'
import heroText from '@/components/heroText.vue'
import heroImage from '@/components/heroImage.vue'
import aboutText from '@/components/aboutText.vue'
import aboutImage from '@/components/aboutImage.vue'
import filterSearch from '@/components/filterSearch.vue'
import filterDropdown from '@/components/filterDropdown.vue'
import filterHeight from '@/components/filterHeight.vue'
import footerVue from '@/components/foot.vue'

import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
app.component('IconVue', Icon)
    .component('navbarComponent', navbarComponent)
    .component('darkMode', darkMode)
    .component('hamburgerMenu', hamburgerMenu)
    .component('mainComponent', mainComponent)
    .component('heroImage', heroImage)
    .component('heroText', heroText)
    .component('aboutText', aboutText)
    .component('aboutImage', aboutImage)
    .component('filterSearch', filterSearch)
    .component('filterDropdown', filterDropdown)
    .component('filterHeight', filterHeight)
    .component('footerVue', footerVue)

app.use(autoAnimatePlugin)
app.mount('body')
