<script>
export default {
  data: () => ({
    aboutTextList: [
      "Leia diferentes livros",
      "Interações e discussões",
      "Comunidade",
      "Publique o seu livro",
    ],
  }),
};
</script>

<template>
  <v-container
    class="d-flex flex-column justify-center align-center pa-0 ma-0 w-100 h-screen home-container"
    fluid
  >
    <Stars />
    <HomeHeader />
    <v-container
      class="d-sm-flex d-sm-flex d-lg-flex justify-center align-start position-relative h-screen ma-0 home-main"
      fluid
    >
      <v-row class="h-screen">
        <v-col class="d-flex flex-column align-start justify-start title-col">
          <div>
            <h1
              class="text-h4 text-lg-h2 text-md-h4 font-weight-bold title-of-home-page"
            >
              Bem-Vindo a
              <span class="library-name">Library</span>
            </h1>
            <p class="text-subtitle-1 text-lg-h4 text-md-h5 subtitle-library">
              Um site para conectar o autor ao leitor
            </p>
          </div>
          <div>
            <h3 class="text-subtitle-2 text-md-h6 text-lg-h5 mt-10 title-list">
              Um pouco sobre nós:
            </h3>
            <v-list class="bg-transparent">
              <v-list-item v-for="item in aboutTextList" max-height="40px">
                <template v-slot:prepend>
                  <v-icon size="15px" icon="mdi-checkbox-blank-circle" />
                </template>
                <v-list-item-title
                  v-text="item"
                  class="text-subtitle-2 text-sm-h7 text-lg-h6"
                />
              </v-list-item>
            </v-list>
          </div>
          <div class="mt-10">
            <v-btn variant="flat" width="text-subtitle-2" class="init-button">
              Começar agora
            </v-btn>
          </div>
        </v-col>
        <v-col
          class="d-none d-sm-flex d-md-flex d-lg-flex h-100 justify-center align-center"
        >
          <v-img width="65%" src="~/assets/img/Books.svg" class="books-img" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<style lang="scss" scoped>
@import "/assets/styles/variables.scss";

.home-container {
  background-image: url("~/assets/img/home-bg.png");
  background-repeat: repeat;
  background-size: 500px;
  background-color: $bg-white;
  z-index: 2;
  .home-main {
    width: 90%;
    .title-col {
      margin-top: 8rem;
      z-index: 2;
      .library-name {
        font-family: "Limelight", sans-serif;
        color: $main-green;
        z-index: 2;
      }
      .subtitle-library {
        color: $main-green;
        z-index: 2;
      }
    }
    .init-button {
      background-color: $main-green;
      color: $bg-white;
    }
    .books-img {
      z-index: 2;
    }
  }
}
</style>
