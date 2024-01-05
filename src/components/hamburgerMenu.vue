<script setup>
import { inject } from 'vue'
defineEmits(['hamburgerToggle'])

const hamburger = inject('hamburger')
</script>
<template>
    <button @click="$emit('hamburgerToggle')" data-collapse-toggle="navbar-sticky" type="button"
        class="inline-flex flex-col items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg text md:hidden"
        aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <p
            :class="[hamburger ? 'navTop' : 'size-5 transition duration-300 ease-in-out rounded-sm bg-slate-600 dark:bg-[#353535] origin-bottom-left rotate-45']">
        </p>
        <p :class="[hamburger ? 'navMid' : 'navMid scale-0']">
        </p>
        <p
            :class="[hamburger ? 'navBottom' : 'size-5 transition duration-300 ease-in-out rounded-sm bg-slate-600 dark:bg-[#353535] origin-top-left -rotate-45']">
        </p>
    </button>
</template>
