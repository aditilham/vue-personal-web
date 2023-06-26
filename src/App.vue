<template>
  <div
    id="app"
    class="bg-white dark:bg-black "
    :class="dark ? 'dark' : 'light'"
  >
  <Header />
  <router-view class="font-sans" />
  <Footer />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
      ...mapGetters(['dark'])
    }
}
</script>

<style>
.views {
  height: 100vh;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
