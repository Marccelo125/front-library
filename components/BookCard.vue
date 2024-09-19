<script lang="ts">
    export default {
        props: {
            title: {
                type: String,
                require: true,
            },
            subtitle: {
                type: String,
                required: true,
            },
            visualization: {
                type: Number,
                required: true,
            },
            img: {
                type: String,
                required: true,
            },
            number: {
                type: Number,
                require: true,
            },
            footer: {
                type: String,
                required: true,
            }
        }
    }
</script>

<template>
  <v-card width="350px" class="bg-black rounded-xl">
    <v-img
      width="100%"
      height="400px"
      cover
      class="align-end"
      :src="img"
    >
      <v-card-title class="text-white text-h5 card-gradient"> {{ title }} </v-card-title>
    </v-img>
    <v-subtitle class="text-font-color-gray text-bold bg-black pl-4"> {{ subtitle }} </v-subtitle>
    <div class="w-100 d-flex mt-5 px-4 justify-space-between align-center">
        <h2>#{{ number }}</h2>
        <h2>
            <v-icon size="30" color="main-green" icon="mdi mdi-heart-outline"></v-icon>
            {{ visualization }}
        </h2>
    </div>
    <div class="mt-5 mb-5">
        <span class="px-4">{{ footer }}</span>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
    .card-gradient {
        background: linear-gradient(360deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 49%);
    }
</style>
