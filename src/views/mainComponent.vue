<script setup>


import { ref, computed, inject } from 'vue'

const isLoading = inject('isLoading')
const searchInput = ref('')
const checkboxValue = ref('')
// const heightInput = ref('')
const heightMin = ref('')
const heightMax = ref('')
const filterHeight = ref(false)
const data = inject('data', ref([]))
const filteringData = computed(() => {
    let result = [...data.value]
    const lowerCaseSearch = searchInput.value.toLocaleLowerCase()
    result = result
        .filter(({ nama, bentuk, tinggi_meter }) => {
            const validSearch = searchInput.value ? nama.toLowerCase().includes(lowerCaseSearch) : true
            const validChekbox = checkboxValue.value.length ? new Set(checkboxValue.value).has(bentuk) : true
            const validMin = heightMin.value === '' || parseFloat(tinggi_meter) >= heightMin.value
            const validMax = heightMax.value === '' || parseFloat(tinggi_meter) <= heightMax.value
            return validChekbox && validMin && validMax && validSearch
        })
    console.table(result)
    return result

})


const searchVolcano = (search) => searchInput.value = search
const handleFilterDropdown = (filter) => {
    checkboxValue.value = checkboxValue.value.includes(filter) ? checkboxValue.value.filter(bentuk => bentuk !== filter)
        : [...checkboxValue.value, filter]
}
const handleMin = (e) => heightMin.value = e.target.value

const handleMax = (e) => heightMax.value = e.target.value

</script>
<template>
    <!-- section result -->
    <section v-if="isLoading" class="text-2xl text-black flex flex-col items-center justify-center h-screen">
        Loading..
    </section>
    <section v-else class="h-fit scroll-mt-20 items-center lg:flex lg:flex-row lg:items-start lg:gap-[30px] pt-32 pb-28">
        <!-- Dokumentasi -->
        <form id="form" class="flex flex-col items-start justify-center w-full p-10 bg-transparent lg:w-1/2 rounded-2xl">
            <!-- lg:searchFilter -->
            <filterSearch @search="searchVolcano" searchClass='lg:w-full lg:block hidden py-4' />
            <div class="flex flex-col w-full lg:">
                <h1 class="pb-4 text-2xl font-bold text-black dark:text-white w-max">Filter</h1>
                <filterSearch @search="searchVolcano" searchClass='lg:w-full lg:hidden block py-4' />
                <div class="flex flex-col items-baseline justify-center shadow">
                    <filterDropdown @filter="handleFilterDropdown" />
                    <!-- filter height high  -->
                    <!-- <filterHeight @filterHeightVolcano="handleHeightFilter" /> -->
                    <button @click="filterHeight = !filterHeight" id="dropdownSearchButton"
                        data-dropdown-toggle="dropdownSearch"
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
                            <label for="default-search1"
                                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                    <iconVue icon="gg:format-line-height" class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true" />
                                </div>
                                <input type="number" id="default-search1" @input="handleMin"
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
                                <input type="number" id="default-search" @input="handleMax"
                                    class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Height Maximun" required>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="w-full lg:w-1/2 flex flex-col items-center ">
            <ul v-auto-animate>
                <li v-for="({
                    nama, bentuk, tinggi_meter: height,
                    estimasi_letusan_terakhir, geolokasi, index
                }) in filteringData" :key="index"
                    class="max-w-sm p-6 lg:pr-16  mb-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <!-- <img :src="`../../public/${nama}.jpeg`" alt=""> -->
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {{ nama }}
                        </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                        {{ bentuk }}
                    </p>
                    <p class="inline-flex items-center text-gray-500 hover:underline">
                        <iconVue class="size-3 mr-1 rtl:rotate-[270deg]" icon="circum:line-height" />
                        {{ height }}
                    </p>
                    <p class="inline-flex items-center text-gray-500 hover:underline">
                        <iconVue class="size-3 mr-1 rtl:rotate-[270deg]" icon="openmoji:volcano-eruption" />
                        {{ estimasi_letusan_terakhir }}
                    </p>
                    <br />
                    <a :href="`https://www.google.com/maps/place/${geolokasi}`"
                        class="inline-flex items-center text-gray-500 hover:underline">
                        <iconVue class="size-3 mr-1 rtl:rotate-[270deg]" icon="ion:location-outline" />
                        Location
                    </a>
                </li>
            </ul>
        </div>
    </section>
</template>
