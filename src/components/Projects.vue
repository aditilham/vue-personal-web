<template>
    <div class="bg-white dark:bg-gray-500 text-black dark:text-white p-5 flex items-center justify-center">
        <div class="w-80">
            <lottie-player v-if="!dark" src="https://assets8.lottiefiles.com/datafiles/EkoZpNsbNMU956i/data.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
            <lottie-player v-if="dark" src="https://assets7.lottiefiles.com/packages/lf20_3eq0grut.json"  background="rgba(107, 114, 128)"  speed="1"  loop  autoplay></lottie-player>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['dark']),
    }
}
</script>
