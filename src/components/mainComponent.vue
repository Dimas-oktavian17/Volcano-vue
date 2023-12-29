<script setup>


import { ref, computed, inject } from 'vue'

const searchInput = ref('')
const checkboxValue = ref('')
const heightInput = ref('')
const data = inject('data', ref([]))
// const filteringData = computed(() => {
//     let result = [...data.value]
//     const lowerCaseSearch = searchInput.value.toLocaleLowerCase()
//     result = result
//         .filter(({ nama }) => searchInput.value ? nama.toLowerCase().includes(lowerCaseSearch) : true)
//         .filter(({ bentuk }) => !checkboxValue.value || new Set(checkboxValue.value).has(bentuk))
//     // checkboxValue.value
//     //     ? result = result.filter(({ bentuk }) => new Set(checkboxValue.value).has(bentuk))
//     //     : result
//     // !checkboxValue.value || new Set(checkboxValue.value).has(bentuk) ? true
//     // .filter(({ bentuk }) => !checkboxValue.value ? checkboxValue.value.includes(bentuk) : false)
//     console.table(result)
//     return result

// })
// const filteringData = computed(() => {
//     const lowerCaseSearch = searchInput.value.toLocaleLowerCase()
//     const checkedCheckboxValues = checkboxValue.value ? new Set(checkboxValue.value) : new Set()

//     return data.value.filter(({ nama, bentuk, tinggi_meter: height }) =>
//         (searchInput.value ? nama.toLowerCase().includes(lowerCaseSearch) : true) &&
//         (checkedCheckboxValues.size === 0 || checkedCheckboxValues.has(bentuk)) && (heightInput.value ? height.toLowerCase().includes(heightInput.value.toLowerCase()) : true)
//     )
// })
const filteringData = computed(() => {
    const lowerCaseSearch = searchInput.value.toLowerCase()
    const checkedCheckboxValues = checkboxValue.value ? new Set(checkboxValue.value) : new Set()

    return data.value.filter(({ nama, bentuk, tinggi_meter: height }) =>
        (searchInput.value ? nama.toLowerCase().includes(lowerCaseSearch) : true) &&
        (checkedCheckboxValues.size === 0 || checkedCheckboxValues.has(bentuk)) &&
        (
            (!heightInput.value.min && !heightInput.value.max) ||
            (!heightInput.value.min && height <= heightInput.value.max) ||
            (!heightInput.value.max && height >= heightInput.value.min) ||
            (height >= heightInput.value.min && height <= heightInput.value.max)
        )
    )
})


const handleHeightFilter = (height) => heightInput.value = height

const searchVolcano = (search) => searchInput.value = search
const handleFilterDropdown = (filter) => {
    checkboxValue.value = checkboxValue.value.includes(filter) ? checkboxValue.value.filter(bentuk => bentuk !== filter)
        : [...checkboxValue.value, filter]
}
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
                <div class="flex flex-col w-full lg:">
                    <h1 class="pb-4 text-2xl font-bold text-black dark:text-white w-max">Filter</h1>
                    <filterSearch @search="searchVolcano" searchClass='lg:w-full lg:hidden block py-4' />
                    <div class="flex flex-col items-baseline justify-center shadow">
                        <filterDropdown @filter="handleFilterDropdown" />
                        <!-- filter height high  -->
                        <filterHeight @filterHeightVolcano="handleHeightFilter" />
                    </div>
                </div>
            </form>
            <div class="w-full lg:w-1/2 ">
                <ul v-auto-animate>
                    <li v-for="({
                        nama, bentuk, tinggi_meter: height,
                        estimasi_letusan_terakhir, geolokasi, index
                    }) in filteringData" :key="index"
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
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>
