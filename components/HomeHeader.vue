<style lang="scss">
    @import '/assets/styles/variables.scss';

    .home-header {
        width: 100vh;
        background-color: $bg-white;
        .logo {
            h1 {
                font-family: "Limelight", sans-serif;
                color: $main-green;
            }
        }
        .container-header {
            width: 100%;
        }
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


</style>

<template>
    <header class="d-flex justify-center home-header w-100 pa-0">
        <v-container class="container-header w-100 ma-0 pa-0">
            <v-row>
                <v-col class="d-flex align-center logo">
                    <h1>Library</h1>
                </v-col>
                <v-col class="d-flex justify-center">
                    <v-list class="d-flex bg-transparent">
                        <v-list-item class="header-list-item">
                            <h4>Catálogo</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item">
                            <h4>Serviços</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item">
                            <h4>Suporte</h4>
                        </v-list-item>
                        <v-list-item class="header-list-item">
                            <h4>Contato</h4>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col class="d-flex justify-end">
                    <div>
                        <v-btn class="ma-4  register-btn align-center rounded-lg" variant="outlined" height="45px">
                            Criar Conta
                        </v-btn>                
                        <v-btn class="login-btn text-white align-center rounded-lg" variant="flat" height="45px">
                            Entrar
                        </v-btn>                
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </header>
</template>