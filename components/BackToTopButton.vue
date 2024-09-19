<script lang="ts">
    export default {
        data: () => ({
            displayButton: false,
        }),
        methods: {
            backToTop() {
                window.scrollTo({
                    behavior: 'smooth',
                    top: 0,
                })
            }
        },
        mounted()  {
            document.onscroll = (ev) => {
                if (window.scrollY >= 500) {
                    this.displayButton = true;
                    return
                }
                this.displayButton = false;
            }
        }
    }
</script>

<template>
    <button :class="'back-to-top-button' + ` display-button-${displayButton}`" variant="tonal" @click="backToTop"> 
        <v-icon class="text-main-green" icon="mdi mdi-arrow-down-circle" size="50"/>
    </button>
</template>

<style lang="scss" scoped>
    .back-to-top-button {
        position: fixed;
        right: -100px;
        bottom: 50px;
        z-index: 999;
        background-color: transparent;
        box-shadow: none;
        transform: rotate(180deg);
        transition: all 0.5s ease-in-out;
        &.display-button-true {
            right: 10px;
            bottom: 50px;
        }
    }
</style>