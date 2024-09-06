<script>
export default {
  data: () => ({
    optionsVisible: false,
  }),
};
</script>

<template>
  <header class="home-header bg-dark-bg w-100">
    <v-container class="container-header pa-0" fluid>
      <v-row class="d-flex justify-center align-center px-4">
        <v-col cols="3" class="logo">
          <h1 class="text-main-green text-md-h8 py-2 py-md-0 px-2">Library</h1>
        </v-col>
        <v-col cols="6" class="d-none d-md-flex d-lg-flex justify-center">
          <v-list class="d-flex bg-transparent">
            <v-list-item>
              <NuxtLink
                to="#"
                class="header-list-item text-md-subtitle-2 text-decoration-none text-white-bg"
              >
                <h4>Catálogo</h4>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink
                to="#"
                class="header-list-item text-md-subtitle-2 text-decoration-none text-white-bg"
              >
                <h4>Serviços</h4>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink
                to="#"
                class="header-list-item text-md-subtitle-2 text-decoration-none text-white-bg"
              >
                <h4>Suporte</h4>
              </NuxtLink>
            </v-list-item>
            <v-list-item>
              <NuxtLink
                to="#"
                class="header-list-item text-md-subtitle-2 text-decoration-none text-white-bg"
              >
                <h4>Contato</h4>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col class="d-none d-md-flex d-lg-flex justify-end py-6 ga-2">
          <NuxtLink to="/register">
            <v-btn
              class="register-btn text-main-green align-center rounded-lg text-md-subtitle-2"
              variant="outlined"
              height="45px"
            >
              Criar Conta
            </v-btn>
          </NuxtLink>
          <NuxtLink to="/login">
            <v-btn
              class="login-btn text-white bg-main-green text-white align-center rounded-lg text-md-subtitle-2"
              variant="flat"
              height="45px"
            >
              Entrar
            </v-btn>
          </NuxtLink>
        </v-col>
        <v-col class="d-flex d-md-none d-lg-none justify-end align-center">
          <v-btn
            class="bg-transparent"
            @click="optionsVisible = !optionsVisible"
            variant="flat"
          >
            <v-icon size="30" icon="mdi mdi-menu"></v-icon>
          </v-btn>
        </v-col>
        <div
          v-if="optionsVisible"
          class="d-flex d-md-none d-lg-none bg-white-bg hamburguer-options"
        >
          <v-list class="options-list bg-dark-bg ga-3">
            <NuxtLink to="/register">
              <v-list-item class="header-list-item item-option">
                <h4 class="text-main-green">Criar Conta</h4>
              </v-list-item>
            </NuxtLink>
            <NuxtLink to="/login">
              <v-list-item class="header-list-item item-option">
                <h4 class="text-main-green">Entrar</h4>
              </v-list-item>
            </NuxtLink>
            <v-list-item class="header-list-item item-option">
              <h4>Catálogo</h4>
            </v-list-item>
            <v-list-item class="header-list-item item-option">
              <h4>Serviços</h4>
            </v-list-item>
            <v-list-item class="header-list-item item-option">
              <h4>Contato</h4>
            </v-list-item>
            <v-list-item class="header-list-item item-option">
              <h4>Suporte</h4>
            </v-list-item>
          </v-list>
        </div>
      </v-row>
    </v-container>
  </header>
</template>

<style lang="scss" scoped>
@import "/assets/styles/variables.scss";
.home-header {
  top: 0px;
  position: fixed;
  overflow: hidden;
  z-index: 9999;
  .logo {
    width: 50px;

    h1 {
      font-family: "Limelight", sans-serif;
    }
  }

  .hamburguer-options {
    top: 64px;
    right: 0px;
    width: 250px;
    position: fixed;
    .options-list {
      width: 100%;
      padding: 0px;
      .item-option {
        cursor: pointer;
        width: 100%;
        &:hover {
          background-color: #424242;
        }
      }
    }
    a {
      text-decoration: none;
    }
    a {
      text-decoration: none;
    }
  }

  .login-btn {
    font-weight: bold;
    text-decoration: none;
  }

  .register-btn {
    font-weight: bold;
    text-decoration: none;
  }
}
</style>
