<script setup>


import { ref, computed, inject } from 'vue'

const searchInput = ref('')
const data = inject('data', ref([]))
const filteringData = computed(() => {
    let result = [...data.value]
    console.log(result)

    const lowerCaseSearch = searchInput.value.toLocaleLowerCase()
    result = result.filter(({ nama }) => searchInput.value ? nama.toLocaleLowerCase().includes(lowerCaseSearch) : true)
    return result
})

// const filterItems = computed(() => {

// }
const searchVolcano = (search) => searchInput.value = search
</script>
<template>
    <main class="">
        <!-- section hero -->
        <section class="container lg:flex lg:flex-row lg:items-center lg:gap-[30px] pt-20 pb-28">
            <heroText />
            <heroImage />
        </section>
        <!-- section about -->
        <section class="container scroll-mt-20 lg:flex lg:flex-row lg:items-center lg:gap-[30px] pt-32 pb-28">
            <aboutImage />
            <aboutText />
        </section>
        <!-- section result -->
        <section class="h-fit scroll-mt-20 lg:flex lg:flex-row lg:items-start lg:gap-[30px] pt-32 pb-28">
            <!-- Dokumentasi -->
            <form id="form"
                class="flex flex-col items-start justify-center w-full p-10 bg-transparent lg:w-1/2 rounded-2xl">
                <!-- lg:searchFilter -->
                <filterSearch @search="searchVolcano" searchClass='lg:w-full lg:block hidden py-4' />
                <div class="flex flex-col w-full lg:w-1/2">
                    <h1 class="pb-4 text-2xl font-bold text-black dark:text-white w-max">Filter</h1>
                    <filterSearch @search="searchVolcano" searchClass='lg:w-full lg:hidden block py-4' />
                    <filterDropdown />
                    <!-- filter height high  -->
                    <div>
                        <label for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Mockups, Logos..." required>
                        </div>
                    </div>
                    <!-- filter height low -->
                    <div>
                        <label for="default-search"
                            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search"
                                class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg ps-10 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Search Mockups, Logos..." required>
                        </div>
                    </div>

                </div>
            </form>
            <div class="w-full lg:w-1/2 ">
                <div v-for="({
                    nama, bentuk, tinggi_meter: height,
                    estimasi_letusan_terakhir, geolokasi
                }) in filteringData" :key="nama"
                    class="max-w-sm p-6 mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <img :src="`../../public/${nama}.jpeg`" alt="">
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
                </div>

                <!-- <ul>
                    <li v-for="({ nama }) in filteringData" :key="nama">
                        {{ nama }}
                    </li>
                </ul> -->
            </div>
        </section>
    </main>
</template>
