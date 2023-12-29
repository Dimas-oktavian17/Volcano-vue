<script setup>
import { ref, computed, inject } from 'vue'
const data = inject('data', ref([]))
const filterCheckbox = ref(false)
const searchDropdown = ref('')
const emit = defineEmits(['filter'])

const bentukVolcano = computed(() => {
    return [...new Set(data.value.flatMap(item =>
        item.bentuk.toLowerCase().includes(searchDropdown.value.toLowerCase()) ? [item.bentuk.toLowerCase()] : []
    ))].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }))
})

const filter = (e) => {
    emit('filter', e.target.value)
}
</script>

<template>
    <button @click="filterCheckbox = !filterCheckbox" id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch"
        class="inline-flex items-center px-4 py-2 text-lg font-medium text-center text-black rounded-lg dark:bg-blue-600 "
        type="button">
        Bentuk
        <iconVue
            :class="[filterCheckbox ? 'size-4 ms-2.5  font-bold transition-all' : 'size-4 ms-2.5 rotate-180 font-bold transition-all']"
            icon="ep:arrow-up-bold" />
    </button>
    <!-- Dropdown menu -->
    <div id="dropdownSearch" v-if="filterCheckbox" class='z-10 px-4 border-b-2'>
        <div class="p-3">
            <label for="input-group-search" class="sr-only">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                    <iconVue class="text-gray-500 size-4 dark:text-gray-400" aria-hidden="true" icon="bi:search" />
                </div>
                <input type="text" id="input-group-search" v-model="searchDropdown"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search volcano">
            </div>
        </div>
        <ul v-auto-animate class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton">
            <li v-for="(bentuk, index) in bentukVolcano" :key="index">
                <div class="group">
                    <input @change="filter" id="filter_option_{{ index }}" type="checkbox" :value="bentuk"
                        class="w-4 h-4 text-blue-600 transition-all bg-gray-100 border-gray-300 rounded " />
                    <label :for="`filter_option_${index}`"
                        class="w-full text-sm font-medium text-gray-900 transition-all rounded ms-2 dark:text-gray-300">
                        {{ bentuk }}
                    </label>
                </div>
            </li>
        </ul>
    </div>
</template>
