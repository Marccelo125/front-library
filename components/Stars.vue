<script lang="ts">
    export default {
        data: () => ({
            windowWidth: 0,
            windowHeight: 0,
        }),
        mounted() {
            this.windowHeight = window.innerHeight;
            this.windowWidth = window.innerWidth;
        },
    }
</script>

<template>
    <v-container class="stars-container" fluid>
        <v-icon
            size="25px"
            :style="{
                position: 'absolute',
                top: `${randomNumber(100, windowHeight)}px`,
                left: `${randomNumber(0, windowWidth)}px`,
                color: '#4ADE80',
            }"
            v-for="n in 25"
            icon="mdi-star-four-points-outline"

            class="stars-element"
        />
    </v-container>
</template>

<style scoped lang="scss">
    .stars-container {
        width: 100%;
        height: 100dvh;
        position: absolute;
        z-index: 1;
        .stars-element {
            @for $i from 1 through 25 {
                &:nth-child(#{$i}) {
                    animation: starsScaleAnimation random(8) * 1s  ease-in-out infinite;
                }
            }
            @keyframes starsScaleAnimation {
                0% {
                    transform: scale(0.8);
                }
                50% {
                    transform: scale(1);
                }
                100% {
                    transform: scale(0.8);
                }
            }
        }
    }

</style>