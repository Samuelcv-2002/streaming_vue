<script setup lang="ts">

const {data} = defineProps<{
    data: any,
}>()
</script>

<template>
    <router-link :to="`/live/${data.socket}`" class="CardDevice relative flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm min-w-[400px]">
        <img :src="data.image" alt="" class="absolute inset-0 h-full w-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 class="z-10 mt-3 text-3xl font-bold text-white">{{ data.socket }}</h3>
        <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{{data.id}}</div>
    </router-link>
</template>

<style scoped>
.CardDevice:hover{
    cursor: pointer;
    transition: ease .2s;
    transform: scale(1.05);
}
</style>