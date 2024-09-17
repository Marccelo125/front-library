<script lang="ts">
export default {
  data: () => ({
    loaded: false,
    loading: false,

    drawer: false,
    group: null,
    items: [
      {
        title: "Inicio",
        value: "Inicio",
      },
      {
        title: "Destaques",
        value: "Destaques",
      },
      {
        title: "Novidades",
        value: "Novidades",
      },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },

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
  <!-- DRAWER FOR MENU BTN NAVIGATION -->
  <v-navigation-drawer
    class="d-flex d-md-none"
    v-model="drawer"
    location="right"
    temporary
  >
    <div
      class="d-flex flex-column justify-space-between"
      style="width: 100%; height: 100%"
    >
      <div class="d-flex align-center mt-4 justify-space-evenly">
        <div>
          <h2 class="text-h6">Marcelo Duarte</h2>
          <NuxtLink
            to="#"
            class="editar-info text-subtitle-1"
            style="color: #4ade80"
          >
            Editar informações
          </NuxtLink>
        </div>

        <div class="d-flex justify-end align-end">
          <img
            src="https://i.pinimg.com/564x/59/15/e8/5915e871e9a464dcac6bcf331a29d174.jpg"
            width="75"
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
      </div>
      <div class="mb-4">
        <v-list :items="items"></v-list>
      </div>
    </div>
  </v-navigation-drawer>

  <!-- FLEX APP BAR -->
  <v-app-bar class="d-lg-none text-white">
    <v-main class="navbar py-8 mt-12">
      <v-row>
        <v-col cols="12" class="d-none d-md-block mt-16 ga-12">
          <ul
            class="d-flex align-center justify-space-evenly"
            style="list-style: none"
          >
            <li>
              <NuxtLink to="#" class="text-decoration-none">
                <h1 class="text-h3 font-weight-bold">LIBRARY</h1>
              </NuxtLink>
            </li>
            <li>
              <v-text-field
                max-width="600px"
                :loading="loading"
                append-inner-icon="mdi-magnify"
                density="compact"
                rounded="lg"
                placeholder="O que você procura hoje?"
                variant="solo"
                hide-details
                class="bg-white rounded-lg"
                @click:append-inner="onClick"
              />
            </li>

            <li class="d-flex align-center ga-6">
              <NuxtLink to="#">
                <v-icon size="40px" icon="mdi-bookmark" style="color: #ffff" />
              </NuxtLink>

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

        <v-col cols="10" class="px-12 d-flex d-md-none">
          <div>
            <NuxtLink to="#" class="text-decoration-none">
              <h1 class="text-h3 font-weight-bold">LIBRARY</h1>
            </NuxtLink>
          </div>
        </v-col>
        <v-col cols="2" class="d-flex d-md-none">
          <div @click.stop="drawer = !drawer">
            <v-icon size="50px" icon="mdi-menu" style="color: #ffff" />
          </div>
        </v-col>

        <v-col cols="12" class="d-none d-md-block">
          <ul
            class="d-flex align-center justify-space-evenly"
            style="list-style: none"
          >
            <li class="d-flex align-center ma-2" style="gap: 3rem">
              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>RPGs</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Mangá</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>HQs</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Novels</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Populares</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Ação</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Aventura</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Miscelânia</h4>
              </NuxtLink>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-main>
  </v-app-bar>

  <!-- MAIN APP BAR -->
  <v-app-bar class="d-none d-lg-flex text-white">
    <v-main class="d-none d-md-flex navbar py-8">
      <v-row>
        <v-col cols="12" class="ga-12">
          <ul
            class="d-flex align-center justify-space-evenly"
            style="list-style: none"
          >
            <li>
              <NuxtLink to="#" class="text-decoration-none">
                <h1 class="text-h3 font-weight-bold">LIBRARY</h1>
              </NuxtLink>
            </li>
            <li class="d-flex align-center ga-4 text-h4">
              <NuxtLink
                to="#"
                class="text-body-1 text-decoration-none text-white"
              >
                <h3>Inicio</h3>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-body-1 text-decoration-none text-white"
              >
                <h3>Destaques</h3>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-body-1 text-decoration-none text-white"
              >
                <h3>Novidades</h3>
              </NuxtLink>
            </li>
            <li>
              <v-text-field
                max-width="600px"
                :loading="loading"
                append-inner-icon="mdi-magnify"
                density="compact"
                rounded="lg"
                placeholder="O que você procura hoje?"
                variant="solo"
                hide-details
                class="bg-white rounded-lg"
                @click:append-inner="onClick"
              />
            </li>
            <li class="d-flex align-center ga-4">
              <NuxtLink to="#">
                <v-icon size="30px" icon="mdi-bookmark" style="color: #ffff" />
              </NuxtLink>

              <div>
                <h2 class="text-h6">Marcelo Duarte</h2>
                <NuxtLink
                  to="#"
                  class="editar-info text-subtitle-1"
                  style="color: #4ade80"
                >
                  Editar informações
                </NuxtLink>
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

        <v-col cols="12" class="d-none d-lg-block">
          <ul
            class="d-flex align-center justify-space-evenly"
            style="list-style: none"
          >
            <li class="d-flex align-center ma-2" style="gap: 5rem">
              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>RPGs</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Mangá</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>HQs</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Novels</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Populares</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Ação</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Aventura</h4>
              </NuxtLink>

              <NuxtLink
                to="#"
                class="text-decoration-none text-white"
                style="font-size: 20px"
              >
                <h4>Miscelânia</h4>
              </NuxtLink>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-main>
  </v-app-bar>
</template>

<style scoped>
.v-navigation-drawer {
  color: white;
  background-color: #24232a;
}

.navbar {
  background-color: #24232a;
  width: 100%;
  position: fixed;
}

h1 {
  color: #4ade80;
}

h3 {
  transition: all 0.3s ease;
}

h3:hover {
  transform: scale(1.02);
}

h4 {
  color: #8ef3bd;
  transition: all 0.2s ease;
}

h4:hover {
  color: white;
}

.v-text-field {
  width: 500px;
}

@media (screen < 600px) {
  .txt-field {
    display: none;
  }
}

.editar-info {
  text-decoration: none;
  transform: all 0.2s ease;
}

.editar-info:hover {
  text-decoration: underline;
}
</style>
