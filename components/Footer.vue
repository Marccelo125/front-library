
<template>
  <v-container  class="w-100 bg-dark-bg d-flex flex-column justify-center align-center footer-element position-relative" fluid>
    <v-row class="d-flex justify-space-between align-start" :style="{width: '95%'}">
      <v-col :style="{width: '300px'}" class="logo">
        <h1  class="text-main-green">Library</h1>
        <p>Um site para conectar o autor ao leitor</p>
      </v-col>
      <v-col>
        <v-list width="300px"  class="bg-dark-bg" density="compact">
          <v-list-title class="text-main-green text-h6 font-weight-bold">INSTITUCIONAL</v-list-title>
          <v-list-item class="text-h7"> Onde estamos </v-list-item>
          <v-list-item class="text-h7"> Autores </v-list-item>
          <v-list-item class="text-h7"> Principais curadores da comunidade </v-list-item>
        </v-list>
        <v-list width="300px" class="bg-dark-bg" density="compact">
          <v-list-title class="text-main-green text-h6 font-weight-bold">CONTATO</v-list-title>
          <v-list-item class="text-h7">
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
          <v-list-title class="text-main-green text-h6 font-weight-bold">REDES SOCIAIS</v-list-title>
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
          <v-list-title class="text-main-green text-h6 font-weight-bold">TERMO DE USO</v-list-title>
          <v-list-item class="text-h7"> segurança </v-list-item>
          <v-list-item class="text-h7"> privacidade </v-list-item>
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

<style lang="scss" scoped>
  .logo {
    width: 50px;

    h1 {
      font-family: "Limelight", sans-serif;
    }
  }
</style>
