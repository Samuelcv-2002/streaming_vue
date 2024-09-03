<script setup lang="ts">
import { ref} from 'vue';
import { io } from 'socket.io-client';

import CardDevice from '../components/CardDevice.vue'

const Streams = ref(<any>[])
const selet = ref(0)

const socket = io('http://192.168.1.25:3000')

socket.on("Streams", (data) => {
  console.log(Streams)
  Streams.value = data.Streams.map((element : any) => {
    console.log(element)
          return {
            ...element,
            socket: element.path.replace("/live/", "")
          }
       });
})


const slec = (path: any) => {
  selet.value = path
}

</script>

<template>
   <nav>
      <router-link to="/home">Home</router-link>
      <router-link to="/live">About</router-link>
    </nav>
  <div class="mt-5 w-[90%] mx-auto">
    <label class="text-xl ml-10">Streams actuales:</label>
    <div class="flex min-h-60 gap-20 my-4">
      <CardDevice :selet="slec" :data="data" v-for="data in Streams" v-if="Streams.length > 0"/>
      <h2 v-else class="capitalize text-3xl text-center w-full mt-[14vh]">sin Streams</h2>
    </div>
    <hr>
  </div>
</template>
