<script setup lang="ts">
import RegisterApi from '~/utils/class/register/register-api';
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
const submit = handleSubmit((values) => {
  registerLoading.value = true;
  emailAlreadyExists.value = undefined;  

  const registerCostumer = new RegisterCostumer();
  
  // register user into api
  registerCostumer.register({
    name,
    email,
    password,
  }).then(response => {
    console.log(response);

    handleReset()    
    registerLoading.value = false;
  }).catch(e => {

    if (!e.response.data) {
      return;
    }

    // verify erro response from api
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

// use useFiled to create state
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
  <v-container class="d-flex justify-center align-center pa-0 register-container" fluid>
    <v-row class="my-0 my-sm-6 my-md-6 my-xl-16 overflow-auto main-row" >
      <v-col class="d-none d-md-flex d-lg-flex justify-center align-center img-col">
        <v-img
          style="max-width: 600px"
          src="https://www.writeraccess.com/br/wp-content/uploads/sites/2/2022/11/Story_Hero-Image-1536x1228.png.webp"
        />
      </v-col>
      <v-col
        class="d-flex bg-white pa-8 justify-center align-center"
        style="width: 100%"
      >
        <div style="width: 98%;">
          <h1 class="text-h6 text-sm-h4 text-md-h4 welcome-title">
            Seja bem-vindo a <br/>
            <span>My Library</span>
          </h1>
          <v-form
            @submit.prevent="submit"
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
              hint="Sua senha deve conter ao menos 8 caracteres."
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
              class="button-vuetify mt-2"
              :loading="registerLoading"
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
                class="text-decoration-none"
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
            <NuxtLink to="#" class="text-decoration-none">
              <v-img
                aspect-ratio="4/3"
                max-height="36"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png"
              />
              <span>Entrar com Google</span>
            </NuxtLink>
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
  max-width: 95%;
  margin: 0px;
  border-radius: 20px;
  .welcome-title {
    color: $dark-green;
    font-weight: 700;
  }
  span {
    color: $main-green;
  }
  .img-col {
    background-color: $main-green;
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
