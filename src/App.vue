<template>
  <div
    id="app"
    class="bg-white dark:bg-black "
    :class="dark ? 'dark' : 'light'"
  >
  <Header />
  <router-view class="font-sans p-5 min-h-screen" />
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from '../src/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
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
