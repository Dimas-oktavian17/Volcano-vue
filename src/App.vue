<script setup>
import { ref, provide, onMounted } from 'vue'
const data = ref([])
const volcano = 'Volcano'
const getStarted = 'Get started'

provide('Volcano', volcano)
provide('GetStarted', getStarted)
provide('data', data)

onMounted(async () => {
    const response = await fetch(import.meta.env.VITE_SOME_KEY)
    data.value = await response.json()
})

</script>
<template>
    <navbarComponent />
    <mainComponent />
</template>
