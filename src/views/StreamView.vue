<script setup lang="ts">
import VideoPlayer from '../components/VideoPlayer.vue';

const props = defineProps<{
    selet: string
}>()

</script>



<template>
      <VideoPlayer :selet="selet"/>
</template>