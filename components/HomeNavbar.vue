<script lang="ts">
export default {
  data: () => ({
    loaded: false,
    loading: false,
  }),

  methods: {
    onClick() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="ga-12">
        <ul
          class="navbaritem d-flex align-center justify-space-evenly"
          style="list-style: none"
        >
          <li>
            <h1 class="text-green">LIBRARY</h1>
          </li>
          <li class="d-flex align-center ga-4 text-h4">
            <NuxtLink
              to="#"
              class="text-body-1 text-decoration-none text-white"
            >
              <h4>Inicio</h4>
            </NuxtLink>

            <NuxtLink
              to="#"
              class="text-body-1 text-decoration-none text-white"
            >
              <h4>Destaques</h4>
            </NuxtLink>

            <NuxtLink
              to="#"
              class="text-body-1 text-decoration-none text-white"
            >
              <h4>Novidades</h4>
            </NuxtLink>
          </li>
          <li>
            <v-text-field
              width="400px"
              max-width="600px"
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              rounded="lg"
              placeholder="O que você procura hoje?"
              variant="solo"
              hide-details
              single-line
              class="bg-white rounded-lg"
              @click:append-inner="onClick"
            />
          </li>
          <li class="d-flex align-center ga-4">
            <div>
              <v-icon size="30px" icon="mdi-bookmark" />
            </div>

            <div>
              <h3>Marcelo Duarte</h3>
              <p class="text-subtitle-1" style="color: #62e581">
                Editar informações
              </p>
            </div>

            <div class="d-flex align-end">
              <img
                src="https://i.pinimg.com/564x/59/15/e8/5915e871e9a464dcac6bcf331a29d174.jpg"
                width="80"
                class="rounded-circle"
                alt=""
              />
              <span class="ml-14" style="position: absolute">
                <v-icon
                  size="24"
                  color="#62E581"
                  style="border: 0.699rem solid #111; border-radius: 100%"
                  icon="mdi-circle"
                />
              </span>
            </div>
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.navbaritem {
  overflow: hidden;
  z-index: 9999;
}
</style>
