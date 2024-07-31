<script setup lang="ts">
const email = ref<string>("");
const password = ref<string>("");
</script>

<script lang="ts">
export default {
  data: () => ({
    visible: false,
  }),
};
</script>

<template>
  <v-container class="d-flex justify-center align-center container-login">
    <v-row class="mx-auto my-6 my-xl-16 rounded-xl overflow-hidden main-row">
      <v-col class="d-none d-md-flex img-col">
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
          <h1 class="text-h6 text-sm-h4 text-md-h4 welcome-title">
            Bem-vindo de volta a <span>My Library</span>
          </h1>
          <v-form
            @submit.prevent
            class="form mx-auto mt-4 pb-8"
            max-width="448"
            rounded="lg"
          >
            <div class="text-subtitle-1">E-mail</div>

            <v-text-field
              v-model="email"
              density="compact"
              placeholder="johndoe@gmail.com"
              variant="outlined"
            />

            <div
              class="text-subtitle-1 d-block d-lg-flex align-center justify-space-between"
            >
              <div>Senha</div>
              <div>
                <span class="text-subtitle-2 text-medium-emphasis">
                  Esqueceu sua senha?
                  <a
                    class="text-decoration-none"
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
            />

            <v-btn
              class="button-vuetify mt-4"
              type="submit"
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
                href="/register"
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
              />
              Entrar com Google
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import "/assets/styles/variables.scss";
.container-login {
  @media (min-width: 959px) {
    width: 100vw;
    height: 100vh;
    max-width: none;
  }

  .main-row {
    max-width: 62.5rem;
    .welcome-title {
      color: $dark-green;
      font-weight: 700;
    }
    span {
      color: $main-green;
    }
    .img-col {
      background-color: $main-green;
      max-width: 600px;
    }
  }
}

.form {
  .button-vuetify {
    background-color: $middle-green;
    color: white;
  }

  span {
    a {
      color: $main-green;
    }
  }
}
</style>
