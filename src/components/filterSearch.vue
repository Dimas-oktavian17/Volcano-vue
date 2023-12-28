<script setup>
const emit = defineEmits(['search'])
defineProps(['searchClass'])
const searchVolcano = (e) => emit('search', e.target.value)
</script>

<template>
    <div :class="searchClass">
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                <iconVue class="text-gray-500 size-4 dark:text-gray-400" aria-hidden="true" icon="bi:search" />
            </div>
            <input @input="searchVolcano" type="search" id="default-search"
                class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Volcano, Merapi..." required>
        </div>
    </div>
</template>    
