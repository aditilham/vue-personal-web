import { createStore } from 'vuex'
import BionicService from './modules/BionicService.js'


export const state = () => ({
    dark: false
});

export const getters = {
    dark: (state) => state.dark
};

export const mutations = {
    SET_DARK: (state, bool) => {
        state.dark = bool;
    }
};
export default new createStore({
    state,
    getters,
    mutations,
    modules: {
        BionicService
    }
});
