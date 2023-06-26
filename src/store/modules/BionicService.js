import axios from "axios";

const state = {
  jobList: []
};

const getters = {
  jobList: (state) => state.jobList
};

const actions = {
  fetchAllJob({commit}) {
    return new Promise((resolve, reject) => {
      axios.defaults.headers.get['header-name'] = 'value'
      axios.get('https://bti.id/services/btiportalcorems/api/pt-job-posts/no-auth')
      .then((response) => {
        commit('setJobList')
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    })
  },
  submitForm({commit}, data) {
    return new Promise((resolve, reject) => {
      axios.post('ttps://bti.id/services/btiportalcorems/api/pt-job-applies/no-auth ',{
        displayName: data.displayName,
        subject:data.popUpData.subject,
        email: data.email,
        phone: data.phone,
        message: data.message,
        ptJobApplyType: data.ptJobApplyType,
        isActive: data.isActive,
        ptJobPost:  {
          id: data.popUpData.id
        }
      })
      .then((response) => {
        commit('')
        resolve(response)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

};

const mutations = {
  setJobList: (state, data) => {
    state.jobList = data
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
