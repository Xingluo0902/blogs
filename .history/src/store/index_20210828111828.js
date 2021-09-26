import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userData: null,
        flag: false,
        profilePhoto: '',
        notice: false,
    },
    mutations: {
        flagChange(state) {
            state.notice = true
        }
    },
    actions: {},
    modules: {}
})