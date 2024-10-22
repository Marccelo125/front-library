<script setup lang="ts">
import {useField, useForm} from 'vee-validate';
import LoginCostumer from '~/utils/class/login/login-costumer';
import { loginValidationSchema } from '~/utils/validations/login-validation-schema';

const loginErrorMessage = ref<string | undefined>(undefined);
const loginLoading = ref<boolean>(false);

// create form and validation with vee-validation
const {handleSubmit, handleReset} = useForm({
  validationSchema: loginValidationSchema, 
});

// use handleSubmit from vee-validation
const loginSubmit = handleSubmit((values) => {
  const loginCostumer = new LoginCostumer();

  loginErrorMessage.value = undefined

  loginLoading.value = true;

  // login user with api
  loginCostumer.login({email, password}).then(response => {
    if (response.token) {
      // login success

      // process
      loginLoading.value = false;
      handleReset();
      return;
    }
  }).catch(e => {
    // login error

    if (!e.response.data) {
      return;
    }

    loginLoading.value = false;

    loginErrorMessage.value = e.response.data.error;
  });
});

const email = useField<string>("email");
const password = useField<string>("password");

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
      <v-col class="d-none d-md-flex img-col bg-main-green">
        <v-img
          style="max-width: 600px"
          src="https://home.oxfordowl.co.uk/wp-content/uploads/2022/06/118_Reading_6-7-1.png"
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
            class="text-h6 text-sm-h4 text-md-h4 font-weight-bold text-dark-bg"
          >
            Bem-vindo de volta a
            <span class="text-main-green">My Library</span>
          </h1>
          <v-form
            @submit.prevent="loginSubmit"
            class="form mx-auto mt-4 pb-8"
            max-width="448"
            rounded="lg"
          >
            <div class="text-subtitle-1">E-mail</div>

            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value || loginErrorMessage"
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
                  <NuxtLink
                    class="text-main-green text-decoration-none"
                    to="#"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Clique aqui
                  </NuxtLink>
                </span>
              </div>
            </div>

            <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value || loginErrorMessage"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Insira sua senha"
              variant="outlined"
              @click:append-inner="visible = !visible"
            />

            <v-btn
              class="bg-middle-green text-white mt-4"
              :loading="loginLoading"
              type="submit"
              size="large"
              variant="tonal"
              block
            >
              Entrar
            </v-btn>
            <span class="text-medium-emphasis text-subtitle-2">
              Não possuí uma conta?
              <NuxtLink
                class="text-main-green text-decoration-none"
                to="/register"
                rel="noopener noreferrer"
              >
                Clique aqui
              </NuxtLink>
            </span>
          </v-form>
          <span
            class="d-flex justify-center text-medium-emphasis text-subtitle-2"
          >
            Ou conecte-se com
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
.container-login {
  @media (min-width: 959px) {
    width: 100vw;
    height: 100vh;
    max-width: none;
  }

  .main-row {
    max-width: 62.5rem;
    .img-col {
      max-width: 600px;
    }
  }
}
</style>
