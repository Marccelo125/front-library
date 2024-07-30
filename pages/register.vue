<script setup lang="ts">
const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const repeatPassword = ref<string>("");
const cellNumber = ref<string>("");
</script>

<script lang="ts">
export default {
  data: () => ({
    visible: false,
    repeatVisible: false,
  }),
};
</script>

<template>
  <v-container class="d-flex justify-center align-center">
    <v-row class="mx-auto my-6 my-xl-16 rounded-xl overflow-auto main-row">
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
            Seja bem-vindo a <span>My Library</span>
          </h1>
          <v-form
            @submit.prevent
            class="form mx-auto mt-2 pb-8"
            max-width="448"
            rounded="lg"
          >
            <div class="text-subtitle-1">Nome</div>

            <v-text-field
              v-model="name"
              density="compact"
              placeholder="Insira seu nome"
              variant="outlined"
            />

            <div class="text-subtitle-1">E-mail</div>

            <v-text-field
              v-model="email"
              density="compact"
              placeholder="johndoe@gmail.com"
              variant="outlined"
            />

            <div class="text-subtitle-1">Senha</div>

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

            <div class="text-subtitle-1">Confirmar senha</div>

            <v-text-field
              v-model="repeatPassword"
              :append-inner-icon="repeatVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="repeatVisible ? 'text' : 'password'"
              hint="Sua senha deve ser igual à senha acima."
              density="compact"
              placeholder="Insira sua senha novamente"
              variant="outlined"
              @click:append-inner="repeatVisible = !repeatVisible"
            />

            <div class="text-subtitle-1">Número de celular</div>

            <v-text-field
              v-model="cellNumber"
              density="compact"
              placeholder="Insira seu número de celular"
              variant="outlined"
            />

            <v-btn
              class="button-vuetify mt-2"
              type="submit"
              size="large"
              variant="tonal"
              block
            >
              Cadastrar-se
            </v-btn>
            <span class="text-medium-emphasis text-subtitle-2">
              Já possuí uma conta?
              <a
                class="text-decoration-none"
                href="/login"
                rel="noopener noreferrer"
              >
                Clique aqui
              </a>
            </span>
          </v-form>
          <span
            class="d-flex justify-center text-medium-emphasis text-subtitle-2"
          >
            Ou registre-se com
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
</style>
