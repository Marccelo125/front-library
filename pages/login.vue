<script lang="ts">
import type { StyleValue } from "vue";

// Styles login page
const styles: Record<string, StyleValue> = {
  container: {
    width: "100vw",
    height: "100vh",
    maxWidth: "none",
  },
  mainRow: {
    maxWidth: "1000px",
  },
  imgCol: {
    backgroundColor: "#4ade80",
    maxWidth: "600px",
  },
  welcomeTitle: {
    color: "#2c3f42",
    fontWeight: "700",
  },
};

export default {
  data: () => ({
    visible: false,
    styles,
  }),
};
</script>

<template>
  <v-container
    class="flex justify-center item-center ma-0"
    :style="styles.container"
  >
    <v-row
      class="mx-auto my-8 my-sm-12 rounded-xl rounded-e-xl overflow-hidden"
      :style="styles.mainRow"
    >
      <v-col class="d-none d-md-flex" :style="styles.imgCol">
        <v-img
          style="max-width: 600px"
          src="https://www.writeraccess.com/br/wp-content/uploads/sites/2/2022/11/Story_Hero-Image-1536x1228.png.webp"
        />
      </v-col>
      <v-col
        cols="12"
        md="5"
        class="d-flex bg-white pa-8 justify-center align-center"
        style="width: 100%"
      >
        <div>
          <h1
            class="text-h6 text-sm-h4 text-md-h4"
            :style="styles.welcomeTitle"
          >
            Bem-vindo de volta a <span style="color: #4ade80">My Library</span>
          </h1>
          <v-form
            @submit.prevent
            class="mx-auto mt-4 pb-8"
            max-width="448"
            rounded="lg"
          >
            <div class="text-subtitle-1">E-mail</div>

            <v-text-field
              v-model="email"
              density="compact"
              placeholder="johndoe@gmail.com"
              variant="outlined"
            ></v-text-field>

            <div
              class="text-subtitle-1 d-block d-lg-flex align-center justify-space-between"
            >
              <div>Senha</div>
              <div>
                <span class="text-subtitle-2 text-medium-emphasis">
                  Esqueceu sua senha?
                  <a
                    class="text-decoration-none"
                    style="color: #22c55e"
                    href="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Clique aqui</a
                  >
                </span>
              </div>
            </div>

            <v-text-field
              v-model="password"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              hint="Sua senha deve conter ao menos 8 caracteres."
              density="compact"
              placeholder="Insira sua senha"
              variant="outlined"
              @click:append-inner="visible = !visible"
            ></v-text-field>

            <v-btn
              class="mt-4"
              type="submit"
              style="background-color: #22c55e; color: white"
              size="large"
              variant="tonal"
              block
            >
              Entrar
            </v-btn>
            <span class="text-medium-emphasis text-subtitle-2">
              Não possuí uma conta?
              <a
                class="text-decoration-none"
                style="color: #22c55e"
                href="#"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>
            </span>
          </v-form>
          <span
            class="d-flex justify-center text-medium-emphasis text-subtitle-2"
          >
            Ou conecte-se com
          </span>
          <hr />
          <div class="d-flex justify-center mt-4">
            <a href="#" class="text-decoration-none">
              <v-img
                aspect-ratio="4/3"
                max-height="36"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              >
              </v-img>
              Entrar com Google
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
