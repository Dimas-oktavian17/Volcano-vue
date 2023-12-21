<script setup>
import { provide } from 'vue'
const volcano = 'Volcano'
const getStarted = 'Get started'
provide('Volcano', volcano)
provide('GetStarted', getStarted)
</script>
<template>
    <navbarComponent />
</template>
