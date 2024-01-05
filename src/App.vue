<script setup>
import { ref, provide, onMounted } from 'vue'
const isLoading = ref(true)
const data = ref([])
const volcano = 'Volcano'
const getStarted = 'Get started'

provide('Volcano', volcano)
provide('GetStarted', getStarted)
provide('data', data)
provide('isLoading', isLoading)
onMounted(async () => {
    try {
        isLoading.value = true

        const response = await fetch(import.meta.env.VITE_SOME_KEY)
        data.value = await response.json()

    } catch (error) {
        console.error('Error fetching data:', error)
        // Handle error as needed
    } finally {
        isLoading.value = false
    }
})
</script>
<template>
    <navbarComponent />
    <main>
        <router-view />
        <footer-vue></footer-vue>
    </main>
</template>
