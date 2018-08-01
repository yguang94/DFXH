import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)


const state = {
  loginName: '',
  loginState: -1
}

const mutations = {
  changeLogin(state,status){
    state.loginState = status;
  },
  updLoginName (state, name) {
    state.loginName = name
  }
}

const actions = {
  loginAction({commit},y){
    commit('changeLogin',y);
  },
  updLoginName({ commit }, x){
    commit('updLoginName', x)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
