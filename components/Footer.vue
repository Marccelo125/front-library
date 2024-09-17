<script lang="ts">
  export default {
    data: () => ({
      innerWidth: 0,
      innerHeight: 0,
    }),
    mounted()  {
      this.innerWidth = window.innerWidth
      this.innerHeight = window.innerWidth
    },
    
  }
</script>

<template>
  <v-container  class="w-100 bg-dark-bg d-flex flex-column justify-center align-center footer-element position-relative" fluid>
    <v-row class="d-flex justify-space-between align-start" :style="{width: '95%'}">
      <v-col>
        <v-list width="300px"  class="bg-dark-bg" density="compact">
          <v-list-title class="text-main-green text-h5">CONSTITUCIONAL</v-list-title>
          <v-list-item class="text-h6"> Onde estamos </v-list-item>
          <v-list-item class="text-h6"> Autores </v-list-item>
          <v-list-item class="text-h6"> Principais curadores da comunidade </v-list-item>
        </v-list>
        <v-list width="300px" class="bg-dark-bg" density="compact">
          <v-list-title class="text-main-green text-h5">CONTATO</v-list-title>
          <v-list-item class="text-h6">
            <v-icon
              color="main-green opacity-100"
              class="mr-1"
              icon="mdi mdi-email"
            />
            contato@gmail.com
          </v-list-item>
          <v-list-item class="text-h6">
            <NuxtLink class="text-main-green" to="*"> suporte </NuxtLink>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col>
        <v-list width="300px" class="bg-dark-bg" density="compact">
          <v-list-title class="text-main-green text-h5">REDES SOCIAIS</v-list-title>
          <v-list-item class="text-h6">
            <NuxtLink class="">
              <v-icon class="text-font-color-gray-two" icon="mdi mdi-instagram" />
            </NuxtLink class="text-h6">
            <NuxtLink class="ml-5 text-font-color-gray-two">
              <v-icon icon="mdi mdi-facebook" />
            </NuxtLink>
            <NuxtLink class="ml-5 text-font-color-gray-two">
              <v-icon icon="mdi mdi-youtube" />
            </NuxtLink>
          </v-list-item>
        </v-list>
        <v-list width="300px" class="bg-dark-bg" density="compact">
          <v-list-title class="text-main-green text-h5">TERMO DE USO</v-list-title>
          <v-list-item class="text-h6"> segurança </v-list-item>
          <v-list-item class="text-h6"> privacidade </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <span class="text-subtitle-2 text-font-color-gray-two">
          <v-icon icon="mdi mdi-copyright" />
          Todos os direitos reservados a Raoni e Marcelo
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>
