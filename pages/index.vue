<script>
export default {
  data: () => ({
    aboutTextList: [
      "Publique seus livros e receba feedback da comunidade",
      "Ganhe dinheiro ao publicar ou analisar um livro.",
      "Converse com outros leitores e escritores na comunidade.",
    ],
    forAuthorTextList: [
      {
        value: "Aqui você pode publicar os seus livros",
        icon: "mdi mdi-bookshelf",
      },
      {
        value: "Métricas das suas publicações",
        icon: "mdi mdi-google-analytics",
      },
      {
        value: "Os seus livros serão avaliados pela comunidade",
        icon: "mdi mdi-creation",
      },
      {
        value: "Você receberá premiações dos seus leitores",
        icon: "mdi mdi-gift",
      },
      {
        value: "Você vai poder trocar seus prêmios por dinheiro",
        icon: "mdi mdi-currency-usd",
      },
    ],
    forReaderTextList: [
      {
        value: "Leia diversos livros de diferentes categorias e gêneros",
        icon: "mdi mdi-bookshelf",
      },
      {
        value: "Avalie livros e receba recompensas da comunidade",
        icon: "mdi mdi-creation",
      },
      {
        value:
          "Premie os seus autores prediletos e avaliadores da nossa comunidade",
        icon: "mdi mdi-gift",
      },
      {
        value: "Receba recomendações diariamente",
        icon: "mdi mdi-fire",
      },
    ],
  }),
};
</script>

<template>
  <v-container
    class="d-flex flex-column justify-center align-center pa-0 ma-0 w-100 h-screen home-container"
    fluid
  >
    <HomeHeader />
    <v-container
      class="d-sm-flex d-sm-flex d-lg-flex justify-center align-start position-relative h-screen ma-0 home-main"
      fluid
    >
      <v-row class="h-screen index-page-main-row">
        <v-col class="d-flex flex-column align-start justify-start title-col">
          <div>
            <h1
              class="text-h4 text-lg-subtitle text-xl-h3 font-weight-bold title-of-home-page x-slide-transition"
            >
              Bem-Vindo a
              <span class="library-name text-main-green">Library</span>
            </h1>
            <p
              class="text-subtitle-1 text-lg-subtitle-1 text-xl-h5 text-md-h5 subtitle-library text-surface-variant x-slide-transition"
            >
              Um site para conectar o autor ao leitor
            </p>
          </div>
          <div>
            <h3
              class="text-subtitle-2 text-md-h6 text-lg-h5 mt-10 title-list x-slide-transition"
            >
              Um pouco sobre nós:
            </h3>
            <ul class="pl-5 mt-5">
              <li class="ml-5" v-for="text in aboutTextList">
                {{ text }}
              </li>
            </ul>
          </div>
          <div class="mt-10">
            <v-btn
              variant="flat"
              width="text-subtitle-2"
              class="bg-main-green text-white x-slide-transition"
            >
              Começar agora
            </v-btn>
          </div>
        </v-col>
        <v-col
          class="d-none d-sm-flex d-md-flex d-lg-flex justify-center align-center"
        >
          <img
            width="100%"
            src="~/assets/img/geek-girl-img.png"
            class="books-img x-slide-reverse-transition"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
  <v-container class="w-100 h-screen bg-dark-bg" fluid>
    <v-row class="w-100 d-flex flex-column align-center justify-center">
      <v-col>
        <h1 class="mt-5 flex align-center justify-center text-center text-h4">
          <span class="text-main-green"> Bem-vindo </span>
          ao nosso espaço para autores e leitores! Aqui, você pode compartilhar
          seus livros, dar sua opinião sobre outros livros e fazer parte da
          nossa comunidade. É fácil e feito para todos!
        </h1>
      </v-col>
      <v-col class="mt-10 d-flex justify-center align-center">
        <v-btn class="bg-main-green text-white" variant="text">
          Comece Agora
        </v-btn>
        <NuxtLink to="/login" class="ml-15 text-main-green">
          Faça Login
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row class="w-100 mt-10 d-flex flex-row justify-center align-start">
      <v-col class="d-flex justify-center">
        <v-list class="w-75 bg-transparent">
          <v-list-subheader class="text-h5 justify-center text-white">
            Para os Escritores
          </v-list-subheader>
          <v-list-item v-for="(text, i) in forAuthorTextList">
            <template v-slot:prepend>
              <v-icon class="opacity-100" color="main-green" :icon="text.icon" />
            </template>
            <v-list-item-subtitle v-text="text.value" />
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="d-flex justify-center">
        <v-list class="w-75 bg-transparent">
          <v-list-subheader class="text-h5 justify-center text-white">
            Para Leitores
          </v-list-subheader>
          <v-list-item v-for="(text, i) in forReaderTextList">
            <template v-slot:prepend>
              <v-icon class="opacity-100" color="main-green" :icon="text.icon" />
            </template>
            <v-list-item-subtitle v-text="text.value" />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
@import "/assets/styles/variables.scss";

.home-container {
  overflow-y: hidden;
  background-color: #ffff;
  z-index: 2;
  .home-main {
    width: 90%;
    background-color: #ffff;
    .index-page-main-row {
      background-color: #ffff;
      .title-col {
        margin-top: 8rem;
        z-index: 2;
        .library-name {
          font-family: "Limelight", sans-serif;
          z-index: 2;
        }
        .subtitle-library {
          z-index: 2;
        }
      }
      .books-img {
        z-index: 2;
      }
    }
  }

  @media (max-height: 600px) {
    .home-container {
      overflow-y: auto;
    }
  }
}
</style>
