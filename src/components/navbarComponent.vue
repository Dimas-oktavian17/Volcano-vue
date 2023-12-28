<script setup>
import { ref, reactive, inject, provide } from 'vue'

defineProps({
    title: String
})
const nav = reactive([
    {

        title: 'Beranda',
        link: '#beranda'
    },
    {

        title: 'About',
        link: '#about'
    },
])

const hamburger = ref(true)


provide('hamburger', hamburger)
const Volcano = inject('Volcano', 'Gunun Berapi')
</script>
<template>
    <header class="container pb-8" id="beranda">
        <nav
            class="fixed top-0 z-20 w-full bg-white border-b border-gray-200 dark:bg-gray-900 start-0 dark:border-gray-600">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
                <a href="#beranda" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <IconVue icon="maki:volcano" class="text-black size-8"></IconVue>
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        {{ Volcano }}
                    </span>
                </a>
                <div class="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
                    <hamburgerMenu @hamburgerToggle="hamburger = !hamburger" />
                </div>
                <div :class="[hamburger ? 'items-center justify-between hidden w-full md:flex md:w-auto md:order-1' : 'items-center justify-between block w-full md:flex md:w-auto md:order-1']"
                    id="navbar-sticky">
                    <ul
                        class="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li v-for="({ title, link }) in nav" :key="title">
                            <a :href="link"
                                class="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                {{ title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>
