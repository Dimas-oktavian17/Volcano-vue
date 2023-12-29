<script setup>
import { ref, } from 'vue'
const filterHeight = ref(false)
const emit = defineEmits(['filterHeightVolcano'])
const handleHeightFilter = (e) => emit('filterHeightVolcano', e.target.value)
</script>

<template>
    <button @click="filterHeight = !filterHeight" id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch"
        class="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-black rounded-lg dark:bg-blue-600 "
        type="button">
        Height
        <iconVue
            :class="[filterHeight ? 'size-4 ms-2.5  font-bold transition-all' : 'size-4 ms-2.5 rotate-180 font-bold transition-all']"
            icon="ep:arrow-up-bold" />
    </button>
    <div id="dropdownSearch" v-if="filterHeight" class='z-10 flex flex-row items-center px-4'>
        <!-- filter height low -->
        <div class="w-1/2 py-4 pr-2">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    <iconVue icon="gg:format-line-height" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true" />
                </div>
                <input type="number" id="default-search" @input="handleHeightFilter"
                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Height Minimum" required>
            </div>
        </div>
        <!-- filter height height -->
        <div class="w-1/2">
            <label for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    <iconVue icon="gg:format-line-height" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true" />
                </div>
                <input type="number" id="default-search" @input="handleHeightFilter"
                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Height Maximun" required>
            </div>
        </div>
    </div>
</template> 
