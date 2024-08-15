<script setup lang="ts">
import RegisterCostumer from '~/utils/class/register/register-costumer';
import {useField, useForm} from 'vee-validate';
import { registerValidationSchema } from '~/utils/validations/register-validation-schema';

const registerLoading = ref(false);
const emailAlreadyExists = ref<string | undefined>(undefined);

// create form and validation with vee-validate
const {handleSubmit, handleReset} = useForm({
  validationSchema: registerValidationSchema,
})

// use handleSubmit from vee-validate
const registerSubmit = handleSubmit((values) => {
  registerLoading.value = true;
  emailAlreadyExists.value = undefined;  

  const registerCostumer = new RegisterCostumer();
  
  // register user into api
  registerCostumer.register({
    name,
    email,
    password,
  }).then(response => {
    if (response.success) {
      // register success

      // process

      handleReset()    
    }

    registerLoading.value = false;
  }).catch(e => {
    // register error

    if (!e.response.data) {
      return;
    }

    if (e.response.data.data.length > 0) {

      emailAlreadyExists.value = 'Email ja esta em uso.';

      // disable email already exists error after 5 seconds
      setTimeout(() => {
        emailAlreadyExists.value = undefined;
      }, 5000)
    }
    
    registerLoading.value = false
  });
});

// use useField to create state
const name = useField<string>('name');
const email = useField<string>('email');
const password = useField<string>('password');
const repeatPassword = useField<string>('repeatPassword');

// create password repeat rule
const repeatPasswordRule = (value: string) => {
  if (value !== password.value.value) {
    return 'Sua senha deve ser igual à senha acima.'
  }

  return true;
}
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
            @submit.prevent="registerSubmit"
            class="form mx-auto mt-2 pb-8"
            max-width="448"
            rounded="lg"
          >
            <div class="text-subtitle-1">Nome</div>

            <v-text-field
              v-model="name.value.value"
              :error-messages="name.errorMessage.value"
              density="compact"
              placeholder="Insira seu nome"
              variant="outlined"
            />

            <div class="text-subtitle-1">E-mail</div>

            <v-text-field
              v-model="email.value.value"
              :error-messages="email.errorMessage.value || emailAlreadyExists"
              density="compact"
              placeholder="johndoe@gmail.com"
              variant="outlined"
            />

            <div class="text-subtitle-1">Senha</div>

            <v-text-field
              v-model="password.value.value"
              :error-messages="password.errorMessage.value"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Insira sua senha"
              variant="outlined"
              @click:append-inner="visible = !visible"
            />

            <div class="text-subtitle-1">Confirmar senha</div>

            <v-text-field
              v-model="repeatPassword.value.value"
              :error-messages="repeatPassword.errorMessage.value"
              :rules="[repeatPasswordRule]"
              :append-inner-icon="repeatVisible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="repeatVisible ? 'text' : 'password'"
              density="compact"
              placeholder="Insira sua senha novamente"
              variant="outlined"
              @click:append-inner="repeatVisible = !repeatVisible"
            />
            <v-btn
<<<<<<< HEAD
              class="button-vuetify mt-2"
              :loading="registerLoading"
=======
              class="bg-middle-green text-white mt-2"
>>>>>>> develop
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
