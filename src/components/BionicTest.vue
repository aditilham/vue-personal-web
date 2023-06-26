<template>
  <div class="grid grid-cols-2 gap-x-5 gap-y-5 px-5 md:px-10 py-10 min-h-0">
    <div v-for="(item, index) in BionicData" :key="index" class="gap-2 rounded-xl bg-secondary-yellow-100 flex px-5 py-5 items-center justify-between shadow-md">
      {{ item.title }}
      <button @click.prevent="setData(item)" class="px-5 py-2 bg-yellow-600 text-white rounded-lg">See jobs</button>
    </div>
    <Modal v-if="modal" @toggle-modal="toggleModal">
        <div class="text-xl text-green-600 font-semibold p-5">
          {{ popUpData.title }}
        </div>
        <div v-html="popUpData.description.txt" class="px-10 pb-10 text-sm"></div>
        <form @submit="toggleModal" class="px-10 pb-10">
          <div class="text-base font-semibold pb-5">
            Send Your Job Application
          </div>
          <div class="flex space-x-5 pb-5">
            <div class="w-full md:w-1/2 flex flex-col">
              <label for="name" class="text-sm font-semibold">Your Name</label>
              <input class="border-b" type="text" v-model="inputName" placeholder="Enter your name" />
            </div>
            <div class="w-full md:w-1/2 flex flex-col">
              <label for="mobile" class="text-sm font-semibold">Mobile Number</label>
              <input class="border-b" type="number" v-model="inputNumber" placeholder="Enter your mobile number" />
            </div>
          </div>
          <div class="flex space-x-5 pb-5">
            <div class="w-full md:w-1/2 flex flex-col">
              <label for="email" class="text-sm font-semibold">Email Address</label>
              <input class="border-b" type="email" v-model="inputEmail" placeholder="Enter your email" />
            </div>
            <div class="w-full md:w-1/2 flex flex-col">
              <label for="name" class="text-sm font-semibold">Write your message here...</label>
              <input class="border-b" type="text" v-model="inputMessage" placeholder="Write your message" />
            </div>
          </div>
          <div class="flex space-x-5 pb-5">
            <div class="w-full md:w-1/2 flex flex-col">
              <label for="name" class="text-sm font-semibold">File</label>
              <input class="border-b" type="file" />
            </div>
          </div>
          <button class="text-white px-4 py-2 rounded-md" type="submit" :disabled="setClass()" :class="setClass() ? `bg-gray-300 ` : `bg-green-600`">
            Send Message
          </button>
        </form>

    </Modal>

  </div>
</template>

<script>
import BionicData from '../assets/bionic.json'
import Modal from './Modal.vue'
export default {
  name: "BionicTest",
  components: {Modal},
  data() {
    return {
      BionicData,
      modal: false,
      popUpData: null,
      inputName: null,
      inputNumber: null,
      inputEmail: null,
      inputMessage: null,
    }
  },
  created() {
    // this.generatePattern(5);
    // this.generatePattern(4);
  },
  methods: {
    generatePattern(n) {
      for (let i = 1; i <= n; i++) { // loop input
        let output = ""; // init output
        for (let j = 1; j <= i; j++) { // set first number
          output += j;
        }
        output += "**"; // add **
        for (let j = i + 1; j <= 2 * n - 1; j++) { // set after number
          output += j;
        }
        console.log(output);
      }
    },
    setData(value) {
      this.popUpData = value
      this.modal = true
    },
    toggleModal() {
      this.modal = false
      this.popUpData = null
      this.inputName = ''
      this.inputEmail = ''
      this.inputNumber = ''
      this.inputMessage = ''
    },
    setClass() {
      if (
        this.inputName == null || this.inputName == '' ||
        this.inputEmail == null || this.inputEmail == '' ||
        this.inputNumber == null || this.inputNumber == '' ||
        this.inputMessage == null || this.inputMessage == '') {
        return true
      } else {
        return false
      }
    },
    submitData() {
      let payload = {
        displayName: this.inputName,
        subject:this.popUpData.title,
        email: this.inputEmail,
        phone: this.inputNumber,
        message: this.inputMessage,
        ptJobApplyType: "APPLICATION",
        isActive: false,
        ptJobPost:  {
          id: this.popUpData.id
        }
      }
      this.$store.dispatch('submitForm', payload).then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err)
      })
    }

  },
  computed: {
  },
}
</script>

<style scoped>
:deep(ul) {
  list-style-type: disc !important;
  list-style: disc !important;
}
:deep(li) {
  margin-left: 25px !important;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
