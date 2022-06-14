<template>
    <div class="bg-white dark:bg-gray-500 text-black dark:text-white p-5">
        <div class="text-xl px-5 py-20 border border-gray-400 dark:border-gray-100 rounded-lg text-center flex items-center justify-center">
            <!-- Projects section -->
            <div class="w-80">
                <lottie-player v-if="!dark" src="https://assets8.lottiefiles.com/datafiles/EkoZpNsbNMU956i/data.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
                <lottie-player v-if="dark" src="https://assets7.lottiefiles.com/packages/lf20_3eq0grut.json"  background="rgba(107, 114, 128)"  speed="1"  loop  autoplay></lottie-player>
            </div>
        </div>
        <!-- <div class="w-full h-full px-10">
            <iframe class="w-full rounded-lg h-full" src="https://roomme.id/community" frameborder="0"></iframe>
        </div> -->
        <!-- <div class="w-80">
            <lottie-player v-if="!dark" src="https://assets8.lottiefiles.com/datafiles/EkoZpNsbNMU956i/data.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
            <lottie-player v-if="dark" src="https://assets7.lottiefiles.com/packages/lf20_3eq0grut.json"  background="rgba(107, 114, 128)"  speed="1"  loop  autoplay></lottie-player>
        </div> -->
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['dark']),
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
    created () {
        this.scrollToTop()
    },
}
</script>
