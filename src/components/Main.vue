<template>
    <div class="bg-white dark:bg-gray-500 text-black dark:text-white p-5 flex items-center justify-center">
        <div class="w-80">
            <lottie-player v-if="!dark" src="https://assets2.lottiefiles.com/packages/lf20_M9p23l.json"  background="transparent"  speed="1"  loop  autoplay></lottie-player>
            <lottie-player v-if="dark" src="https://assets2.lottiefiles.com/packages/lf20_M9p23l.json"  background="rgba(107, 114, 128)"  speed="1"  loop  autoplay></lottie-player>
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
