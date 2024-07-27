<script>
export default {
  data: () => ({
    visible: false,
  }),
};
</script>

<template>
  <v-container>
    <v-row class="mx-auto">
      <v-col
        class="d-none d-md-block rounded-s-xl"
        style="background-color: #4ade80"
      >
        <v-img
          max-height="540"
          src="https://www.writeraccess.com/br/wp-content/uploads/sites/2/2022/11/Story_Hero-Image-1536x1228.png.webp"
        ></v-img>
      </v-col>
      <v-col
        cols="12"
        md="5"
        lg="4"
        xl="3"
        class="d-flex bg-white rounded-0-sm rounded-e-xl pa-8 justify-center align-center"
      >
        <div>
          <h1
            class="text-h6 text-sm-h4 text-md-h4"
            style="color: #2c3f42; font-weight: 700"
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
                Clique aqui</a
              >
            </span>
          </v-form>
          <span class="d-flex justify-center text-medium-emphasis text-subtitle-2">
            Ou conecte-se com
          </span>
          <hr />
          <div class="d-flex justify-center mt-4">
            <a href="" class="text-decoration-none">
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
    <!-- <v-row class="d-flex align-center mt-6 w-100 h-100">
      <v-col cols="12" md="7" class="d-flex d-xs-none bg-teal-accent-3" rounded>
        <v-img
          aspect-ratio="16/9"
          src="https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-female-smiling-librarian-standing-at-counter-png-image_6329223.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="5" class="bg-white">
        <h1 class="text-h3 font-weight-bold">Welcome back to <br /> <span class="text-green">My Library</span></h1>
        <div>
          <div class="text-subtitle-1 text-medium-emphasis">Account</div>

          <v-text-field
            density="compact"
            placeholder="Email address"
            prepend-inner-icon="mdi-email-outline"
            variant="outlined"
          ></v-text-field>

          <div
            class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
          >
            Password
          </div>

          <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
            :type="visible ? 'text' : 'password'"
            density="compact"
            placeholder="Enter your password"
            prepend-inner-icon="mdi-lock-outline"
            variant="outlined"
            @click:append-inner="visible = !visible"
          ></v-text-field>
          <a
            class="text-caption text-decoration-none text-green"
            href="#"
            rel="noopener noreferrer"
            target="_blank"
          >
            Forgot login password?</a
          >

          <v-btn class="my-2" color="green" size="large" variant="tonal" block>
            Log In
          </v-btn>

          <v-card-text class="text-center">
            <a
              class="text-green text-decoration-none text-base"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
            </a>
          </v-card-text>
        </div>
      </v-col>
    </v-row> -->
  </v-container>
</template>

<style scoped></style>
