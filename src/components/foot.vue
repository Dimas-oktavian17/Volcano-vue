<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
const currentYear = ref(new Date().getFullYear())
</script>
<template>
    <footer class="text-center">
        ©<span>{{ currentYear }}</span> by DmsOkta
    </footer>
</template>
