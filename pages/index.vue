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
    cordItems: [
      {
        title: "My hero academia",
        subtitle: "Kōhei Horikoshi",
        img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-anime-video-music-album-cover-design-template-70bf413b3c1cf99db9e7a40aec385183_screen.jpg?ts=1633335329",
        number: "35",
        visualization: "2.5k",
        footer: "Chapter 35: What do you...",
      },
    ],
  }),
};
</script>

<template>
  <BackToTopButton />
  <v-container
    class="d-flex flex-column justify-center align-center pa-0 ma-0 w-100 home-container"
    fluid
  >
    <HomeHeader />
    <v-container
      class="d-sm-flex d-sm-flex d-lg-flex justify-center align-start position-relative pb-10 h-screen ma-0 home-main"
      fluid
    >
      <v-row class="h-screen mt-12 mt-md-0 index-page-main-row">
        <v-col
          class="d-flex flex-column align-start justify-center pl-12 title-col"
        >
          <div>
            <h1
              class="text-h4 text-lg-subtitle text-xl-h2 font-weight-bold title-of-home-page x-slide-transition"
            >
              Bem-Vindo a
              <span class="library-name text-main-green">Library</span>
            </h1>
            <p
              class="text-subtitle-1 text-lg-subtitle-1 text-md-h4 text-xl-h5 subtitle-library text-surface-variant x-slide-transition"
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
          <div class="pt-10">
            <button
              class="button-hover bg-main-green font-weight-bold text-white x-slide-transition text-h6 px-12 mb-6 mb-md-0 py-3 rounded-lg"
            >
              Começar Agora
            </button>
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
  <div class="d-none d-md-flex justify-center bg-white">
    <v-icon
      class="arrow-icon pb-12"
      color="surface-variant text-main-green"
      size="60"
      icon="mdi mdi-chevron-down"
    />
  </div>
  <v-container min-height="100vh" class="w-100 bg-dark-bg" fluid>
    <v-row class="w-100 pt-10 d-flex flex-column align-center justify-center">
      <v-col class="px-16">
        <h1
          class="mt-5 flex align-center justify-center text-center text-h6 text-sm-h4 text-xl-h4"
        >
          <span class="text-main-green"> Bem-vindo </span>
          ao nosso espaço para autores e leitores! Aqui, você pode <br />
          compartilhar seus livros, dar sua opinião sobre outros livros e fazer
          <br />
          parte da nossa comunidade. <br />
          É fácil e feito para todos!
        </h1>
      </v-col>
      <v-col class="mt-10 d-flex justify-center align-center">
        <button
          class="button-hover bg-main-green text-h7 text-md-6 text-lg-h6 text-white px-6 py-4 rounded-lg"
        >
          Comece Agora
        </button>
        <NuxtLink to="/login" class="ml-15 text-h6 text-main-green">
          Faça Login
        </NuxtLink>
      </v-col>
    </v-row>
    <v-row
      class="w-100 mt-10 mb-16 d-flex flex-row justify-center align-start"
      fluid
    >
      <v-col
        class="list-index-page-about-col w-100 d-flex justify-center px-12"
        fluid
      >
        <v-list class="list-index-page-about bg-transparent">
          <v-list-subheader
            class="text-h5 font-weight-medium justify-center text-white"
          >
            Para os Escritores
          </v-list-subheader>
          <v-list-item v-for="(text, i) in forAuthorTextList">
            <template v-slot:prepend>
              <v-icon
                class="opacity-100"
                color="main-green"
                :icon="text.icon"
              />
            </template>
            <v-list-item-title
              class="wrap-text-index-page-list-item text-subtitle-2 text-sm-h6"
              v-text="text.value"
            />
          </v-list-item>
        </v-list>
      </v-col>
      <v-col class="list-index-page-about-col d-flex justify-center">
        <v-list class="list-index-page-about bg-transparent">
          <v-list-subheader
            class="text-h5 font-weight-medium justify-center text-white"
          >
            Para Leitores
          </v-list-subheader>
          <v-list-item v-for="(text, i) in forReaderTextList">
            <template v-slot:prepend>
              <v-icon
                class="opacity-100"
                color="main-green"
                :icon="text.icon"
              />
            </template>
            <v-list-item-title
              v-text="text.value"
              class="wrap-text-index-page-list-item text-subtitle-2 text-sm-h6"
            />
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
  <v-container class="ma-0 w-100 bg-white" fluid>
    <div class="w-100 d-flex justify-center align-center px-md-12 my-10" fluid>
      <div class="d-flex justify-space-between w-100">
        <h1 class="text-h5 text-md-h3 font-weight-bold pl-6">Recomendados</h1>
        <v-btn class="button-hover bg-main-green text-white" variant="text"
          >Ver mais</v-btn
        >
      </div>
    </div>
    <v-sheet class="mg-white">
      <v-slide-group class="bg-white" mobile-breakpoint="md">
        <v-slide-group-item v-for="i in 15">
          <BookCard
            title="My hero academia"
            subtitle="Kōhei Horikoshi"
            img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-anime-video-music-album-cover-design-template-70bf413b3c1cf99db9e7a40aec385183_screen.jpg?ts=1633335329"
            number="35"
            visualization="2.5k"
            footer="Chapter 35: What do you..."
            class="ml-5"
          />
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <Footer />
</template>

<style lang="scss" scoped>
@import "/assets/styles/variables.scss";

.button-hover {
  transition: all 0.2s;
  &:hover {
    transform: scale(1.02);
  }
}

.arrow-icon {
  transition: all 0.2s;
  &:hover {
    transform: scale(1.08);
  }
}

.home-container {
  overflow-y: hidden;
  background-color: #ffff;
  height: 90dvh;
  z-index: 2;
  .home-main {
    width: 90%;
    background-color: #ffff;
    .index-page-main-row {
      background-color: #ffff;
      .title-col {
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
.list-index-page-about-col {
  .list-index-page-about {
    min-width: 300px;
    .wrap-text-index-page-list-item {
      text-overflow: unset;
      white-space: normal;
      overflow: visible;
      color: rgb(184, 184, 184);
    }
  }
}
</style>
