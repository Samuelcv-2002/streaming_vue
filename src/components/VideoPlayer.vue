<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import Hls from 'hls.js';


const videoPlayer= ref<HTMLVideoElement>(null);

const route = useRoute();
const stream = route.params.stream;

onMounted(() => {
    const streamUrl = `http://192.168.1.25:8000/live/${stream}/index.m3u8`;

console.log(`Intentando cargar el flujo de video desde: ${streamUrl}`);

if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(streamUrl);
    hls.attachMedia(videoPlayer.value);

} else if (videoPlayer.value.canPlayType('application/vnd.apple.mpegurl')) {
    videoPlayer.value.src = streamUrl;
    videoPlayer.value.addEventListener('loadedmetadata', () => {
        console.log(`Flujo de video cargado correctamente (Apple HLS)`);
        videoPlayer.value.play();
    });
} else {
    console.error('HLS no soportado en este navegador.');
}
})

</script>

<template>
    <video ref="videoPlayer" class="h-[80vh] place-self-center" controls></video>
</template>