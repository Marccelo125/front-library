<style lang="scss">
@import "/assets/styles/variables.scss";

.home-header {
    background-color: $bg-white;
    overflow: hidden;
    .logo {
        width: 50px;

        h1 {
            font-family: "Limelight", sans-serif;
            color: $main-green;
        }
    }

    .hamburguer-options {
        top: 45px;
        right: 0px;        
        position: fixed;
        background-color: $bg-white;
        .login-option {
            color: $main-green;
        }
        .register-option {
            color: $main-green;
        }
    }
    .container-header {}

    .login-btn {
        font-weight: bold;
        background-color: $main-green;
    }

    .register-btn {
        font-weight: bold;
        color: $main-green;
        border: 2px solid $main-green;
    }
}

@media (max-width: 960px) {
    .home-header {
        .logo {
            padding-left: 2rem;
        }

        .list-header-content {
            display: none;
        }

        .btn-header-content {
            display: none;
        }
    }
}
</style>

<script>
export default {
    data: () => ({
        optionsVisible: false,
    }),
};
</script>

<template>
    <header class="d-flex justify-center home-header w-100 pa-0">
        <v-container class="d-flex justify-center align-center container-header ma-0 pa-0" fluid>
            <v-row class="d-flex justify-center w-sm-90">
                <v-col class="d-flex align-center logo pl-xs-3" md="2" lg="3">
                    <h1 class="text-md-h8">Library</h1>
                </v-col>
                <v-col class="d-md-flex d-lg-flex justify-center list-header-content" cols="5">
                    <v-list class="d-flex bg-transparent">
                        <v-list-item class="header-list-item pa-sm-0 pa-md-1 text-md-subtitle-2">
                            <h4>Catálogo</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item text-md-subtitle-2 pa-sm-0 pa-md-1 pa-lg-5">
                            <h4>Serviços</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item text-md-subtitle-2 pa-sm-0 pa-md-1 pa-lg-5">
                            <h4>Suporte</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item text-md-subtitle-2 pa-sm-0 pa-md-1 pa-lg-5">
                            <h4>Contato</h4>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col class="d-md-flex d-lg-flex justify-end btn-header-content" md="3">
                    <div class="">
                        <v-btn class="ma-4 register-btn align-center rounded-lg text-md-subtitle-2" variant="outlined"
                            height="45px">
                            Criar Conta
                        </v-btn>
                        <v-btn class="login-btn text-white align-center rounded-lg text-md-subtitle-2" 
                            variant="flat"
                            height="45px"
                        >
                            Entrar
                        </v-btn>
                    </div>
                </v-col>
                <v-col  class="d-flex d-md-none d-lg-none justify-end align-center">
                    <v-btn class="bg-transparent" @click="optionsVisible = !optionsVisible" variant="flat">
                        <v-img width="30" src="~/assets/img/Hamburguer.png" />
                    </v-btn>
                </v-col>
                <div v-if="optionsVisible"  class="d-md-none d-lg-none hamburguer-options">
                    <v-list class="d-block bg-transparent">
                        <v-list-item class="header-list-item pa-4">
                            <h4 class="register-option">Criar Conta</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item pa-4">
                            <h4 class="login-option">Entrar</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item pa-4">
                            <h4>Catálogo</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item pa-4">
                            <h4>Serviços</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item pa-4">
                            <h4>Suporte</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item pa-4">
                            <h4>Contato</h4>
                        </v-list-item>
                    </v-list>
                </div>
            </v-row>
        </v-container>
    </header>
</template>
