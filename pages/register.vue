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
  <v-container
    class="d-flex justify-center align-center pa-0 register-container"
    fluid
  >
    <v-row class="my-0 my-sm-6 my-md-6 my-xl-16 overflow-auto main-row">
      <v-col
        class="d-none d-md-flex d-lg-flex justify-center align-center bg-main-green img-col"
      >
        <v-img
          style="max-width: 600px"
          src="https://home.oxfordowl.co.uk/wp-content/uploads/2022/06/104_reading_at_Home_banner-1.png"
        />
      </v-col>
      <v-col
        class="d-flex bg-white pa-8 justify-center align-center"
        style="width: 100%"
      >
        <div style="width: 98%">
          <h1
            class="text-h6 text-sm-h4 text-md-h4 text-dark-bg font-weight-bold"
          >
            Seja bem-vindo a <br />
            <span class="text-main-green">My Library</span>
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

            <!-- <div class="text-subtitle-1">Número de celular</div>

            <v-text-field
              v-model="cellNumber"
              density="compact"
              placeholder="Insira seu número de celular"
              variant="outlined"
            /> -->

            <v-btn
              class="bg-middle-green text-white mt-2"
              type="submit"
              size="large"
              variant="tonal"
              block
            >
              Cadastrar-se
            </v-btn>
            <span class="text-medium-emphasis text-subtitle-2">
              Já possuí uma conta?
              <NuxtLink
                class="text-decoration-none text-main-green"
                to="/login"
                rel="noopener noreferrer"
              >
                Clique aqui
              </NuxtLink>
            </span>
          </v-form>
          <span
            class="d-flex justify-center text-medium-emphasis text-subtitle-2"
          >
            Ou registre-se com
          </span>
          <hr />
          <div class="d-flex justify-center mt-4">
            <NuxtLink
              to="#"
              class="text-h6 text-decoration-none font-weight-bold text-main-green"
            >
              <v-img
                aspect-ratio="4/3"
                max-height="36"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              />
              Entrar com Google
            </NuxtLink>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import "/assets/styles/variables.scss";

.main-row {
  max-width: 95%;
  margin: 0px;
  border-radius: 20px;
  .welcome-title {
    font-weight: 700;
  }
}

@media (min-width: 1280px) {
  .main-row {
    max-width: 65%;
  }
}

@media (max-width: 600px) {
  .register-container {
    .main-row {
      max-width: 100%;
      height: 100vh;
      margin: 0px;
      border-radius: 0px;
    }
  }
}
</style>
