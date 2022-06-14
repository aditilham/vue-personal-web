<template>
  <div>
    <div v-click-away="onClickAway" class="bg-gray-100 dark:bg-gray-700">
      <nav
        class="
          container
          px-6
          py-4
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
              dark:text-gray-100
              md:text-2xl
              hover:text-blue-400
              transition duration-500 ease-in-out transform hover:scale-110
              flex flex-row
            "
            >
            <img class="w-16" src="../assets/icon/logo.png" alt="">
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                dark:text-gray-100
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
          :class="showMenu ? 'flex absolute bg-gray-100 dark:bg-gray-700 w-full left-0 z-50 py-10 top-12 px-5' : 'hidden'"
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
          <li>
            <router-link :to=" {name: 'Main'}" class="text-sm font-bold text-gray-800 dark:text-gray-100 hover:text-blue-400 cursor-pointer" :class="menuHomeActive(currentRouteName) ? `text-blue-500 dark:text-blue-300` : ``" @click="forMobile()">
              {{ $t('header.home')}}
            </router-link>
          </li>
          <li>
            <router-link :to=" {name: 'Projects'}" class="text-sm font-bold text-gray-800 dark:text-gray-100 hover:text-blue-400 cursor-pointer" :class="menuProjectsActive(currentRouteName) ? `text-blue-500 dark:text-blue-300` : ``" @click="forMobile()">
              {{ $t('header.projects')}}
            </router-link>
          </li>
          <li>
            <router-link :to=" {name: 'AboutMe'}" class="text-sm font-bold text-gray-800 dark:text-gray-100 hover:text-blue-400 cursor-pointer" :class="menuAboutActive(currentRouteName) ? `text-blue-500 dark:text-blue-300` : ``" @click="forMobile()">
              {{ $t('header.aboutMe')}}
            </router-link>
          </li>
          <li>
            <router-link :to=" {name: 'ContactMe'}" class="text-sm font-bold text-gray-800 dark:text-gray-100 hover:text-blue-400 cursor-pointer" :class="menuContactActive(currentRouteName) ? `text-blue-500 dark:text-blue-300` : ``" @click="forMobile()">
              {{ $t('header.contactMe')}}
            </router-link>
          </li>
          <li>
            <div class="flex items-center text-black dark:text-gray-100 cursor-pointer ">
                <select v-model="this.$i18n.locale" class="bg-gray-100 border dark:bg-gray-700 border-black dark:border-gray-400 py-1 px-2 rounded-lg">
                    <option value="id">ID</option>
                    <option value="en">EN</option>
                </select>
            </div>
          </li>
          <li>
            <button @click.prevent="toggleDarkMode">
              <svg
              v-if="!dark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
              >
              <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
              </svg>
              <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="#fff"
              >
              <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
              />
              </svg>
          </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    ...mapMutations(['SET_DARK']),

    toggleDarkMode() {
        console.log(this.SET_DARK)
        this.SET_DARK(!this.dark);
        localStorage.theme = this.dark ? 'dark' : 'light';
    },
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
    menuProjectsActive(currentRouteName) {
        if (currentRouteName == 'Projects') {
            return true
        }
    }
    

  },
  computed: {
    ...mapGetters(['dark']),
    currentRouteName: function() {
        return this.$route.name
    }
  },
};
</script>