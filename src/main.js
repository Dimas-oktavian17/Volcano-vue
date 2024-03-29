import './assets/output.css'
import router from './routes'
import { Icon } from '@iconify/vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import navbarComponent from './components/navbarComponent.vue'
import darkMode from './components/darkMode.vue'
import hamburgerMenu from './components/hamburgerMenu.vue'
import heroText from '@/components/heroText.vue'
import heroImage from '@/components/heroImage.vue'
const aboutText = defineAsyncComponent(() => import('@/components/aboutText.vue'))
const aboutImage = defineAsyncComponent(() => import('@/components/aboutImage.vue'))
import filterSearch from '@/components/filterSearch.vue'
import filterDropdown from '@/components/filterDropdown.vue'
import filterHeight from '@/components/filterHeight.vue'
import footerVue from '@/components/foot.vue'

import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'


const app = createApp(App)
app.component('IconVue', Icon)
    .component('navbarComponent', navbarComponent)
    .component('darkMode', darkMode)
    .component('hamburgerMenu', hamburgerMenu)
    .component('heroImage', heroImage)
    .component('heroText', heroText)
    .component('aboutText', aboutText)
    .component('aboutImage', aboutImage)
    .component('filterSearch', filterSearch)
    .component('filterDropdown', filterDropdown)
    .component('filterHeight', filterHeight)
    .component('footerVue', footerVue)

app.use(autoAnimatePlugin)
    .use(router)
    .mount('body')
