<template>
  <div>
    <div v-click-away="onClickAway" class="bg-gray-100">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-lg
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
              transition duration-500 ease-in-out transform hover:scale-110
              flex flex-row
            "
            >
            <img class="w-10" src="../assets/icon/logo.png" alt="">
            <h3>Adit Ilham</h3>
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
          <router-link :to=" {name: 'Main'}" class="text-sm font-bold text-gray-800 hover:text-blue-400 cursor-pointer" :class="menuHomeActive(currentRouteName) ? `text-blue-500` : ``" @click="forMobile()">
            Home
          </router-link>
          <router-link :to=" {name: 'AboutMe'}" class="text-sm font-bold text-gray-800 hover:text-blue-400 cursor-pointer" :class="menuAboutActive(currentRouteName) ? `text-blue-500` : ``" @click="forMobile()">
            About Me
          </router-link>
          <router-link :to=" {name: 'Github'}" class="text-sm font-bold text-gray-800 hover:text-blue-400 cursor-pointer" :class="menuGithubActive(currentRouteName) ? `text-blue-500` : ``" @click="forMobile()">
            GitHub
          </router-link>
          <router-link :to=" {name: 'ContactMe'}" class="text-sm font-bold text-gray-800 hover:text-blue-400 cursor-pointer" :class="menuContactActive(currentRouteName) ? `text-blue-500` : ``" @click="forMobile()">
            Contact Me
          </router-link>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    onClickAway() {
        this.showMenu = false
    },
    forMobile() {
        if (this.showMenu == true) {
            this.runCode()
        }
    },
    runCode() {
        if (this.showMenu == false) {
            this.showMenu = true
        } else {
            this.showMenu = false
        }
    },
    menuHomeActive(currentRouteName) {
        if (currentRouteName == 'Main') {
            return true
        }
    },
    menuAboutActive(currentRouteName) {
        if (currentRouteName == 'AboutMe') {
            return true
        }
    },
    menuContactActive(currentRouteName) {
        if (currentRouteName == 'ContactMe') {
            return true
        }
    },
    menuGithubActive(currentRouteName) {
        if (currentRouteName == 'Github') {
            return true
        }
    }
    

  },
  computed: {
        currentRouteName: function() {
            return this.$route.name
        }
    },
};
</script>