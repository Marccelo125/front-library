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
  <main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <ul
            class="d-flex align-center justify-space-between"
            style="list-style: none"
          >
            <li>
              <h1>LIBRARY</h1>
            </li>
            <li>              <NuxtLink
                to="#"
                class="header-list-item text-md-subtitle-2 text-decoration-none text-grey-darken-4"
              >
                <h4>Inicio</h4>
              </NuxtLink></li>
            <li>
                <NuxtLink
                to="#"
                class="header-list-item text-md-subtitle-2 text-decoration-none text-grey-darken-4"
              >
                <h4>Destaques</h4>
              </NuxtLink>
            </li>
            <li>
              <v-text-field
                width="400px"
                max-width="400px"
                :loading="loading"
                append-inner-icon="mdi-magnify"
                density="compact"
                placeholder="O que você procura hoje?"
                variant="outlined"
                hide-details
                single-line
                @click:append-inner="onClick"
              ></v-text-field>
            </li>
            <li>
                
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
