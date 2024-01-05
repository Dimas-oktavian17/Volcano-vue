import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/HeroComponent.vue')
const About = () => import('../views/aboutComponent.vue')
const Volcano = () => import('../views/mainComponent.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/volcano', component: Volcano },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
