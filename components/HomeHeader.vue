<style lang="scss">
    @import '/assets/styles/variables.scss';

    .home-header {
        width: 100vh;
        background-color: $bg-white;
        .container-header {
            width: 100%;
            .header-list-item {
                h4 {
                    color: $main-green;
                }
            }
        }
    }



</style>

<template>
    <header class="d-flex justify-center home-header w-100">
        <v-container class="container-header w-100 ma-0">
            <v-row>
                <v-col>
                    <h1>Library</h1>
                </v-col>
                <v-col class="d-flex justify-center">
                    <v-list class="d-flex bg-transparent">
                        <v-list-item>
                            <h4>Catálogo</h4>
                        </v-list-item>
                        <v-list-item>
                            <h4>Serviços</h4>
                        </v-list-item>
                        <v-list-item>
                            <h4>Suporte</h4>
                        </v-list-item>
                        <v-list-item>
                            <h4>Contato</h4>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col class="d-flex justify-end">
                    <div>
                        <v-btn class="ma-4">
                            Criar Conta
                        </v-btn>                
                        <v-btn class="">
                            Entrar
                        </v-btn>                
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </header>
</template>