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

        methods: {
            getStars() {
                const range = 50
        
                // number of stars based on screen size
                const starsQtd = Math.floor(this.windowWidth / range);
                const stars: Array<{top: number, left: number}> = [];

                for (let i = 0; i <= starsQtd;i++) {
                    let positionIsValid = false;
                    
                    // check the position of the star
                    while (!positionIsValid) {
                        const top = randomNumber(100, this.windowHeight);
                        const left = randomNumber(0, this.windowWidth);
                        
                        positionIsValid = true;

                        // checks the position of other stars
                        stars.forEach(star => {
                            if ((top >= star.top - range && top <= star.top + range) && (left >= star.left - range && left <= star.left + range)) {
                                positionIsValid =  false;
                            }
                        });

                        if (positionIsValid) {
                            stars.push({
                                top,
                                left,
                            });
                        }
                    }

                }

                return stars;
            }
        }
    }
</script>

<template>
    <v-container class="stars-container opacity-animation" fluid>
        <v-icon
            size="25px"
            :style="{
                position: 'absolute',
                top: `${star.top}px`,
                left: `${star.left}px`,
                color: '#4ADE80',
            }"
            v-for="star in getStars()"
            icon="mdi-star-four-points-outline"

            class="stars-element"
        />
    </v-container>
</template>

<style scoped lang="scss">
    .stars-container {
        overflow: hidden;
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