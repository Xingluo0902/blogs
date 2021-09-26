import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: null,
        flag: false,
        profilePhoto: ''
    },
    mutations: {
        flagChange(state) {
            state.flag = true
        }
    },
    actions: {},
    modules: {}
})