import Vue from 'vue'
import Vuex from 'vuex'
import {
  UPDATE_PLAYER_NUMBERS,
  UPDATE_DRAW_NUMBERS,
  UPDATE_DRAW_PHASE,
  SET_PLAYER_NUMBERS,
  SET_DRAW_NUMBERS,
  SET_DRAW_PHASE,
  GET_PLAYER_NUMBERS,
  GET_DRAW_NUMBERS,
  GET_DRAW_PHASE
} from './constants'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playerNumbers:[],
    drawNumbers:[],
    drawPhase: false
  },
  mutations: {
    [SET_PLAYER_NUMBERS]: (state,numbers) => state.playerNumbers = numbers,
    [SET_DRAW_NUMBERS]: (state,ball) =>state.drawNumbers.push(ball),
    [SET_DRAW_PHASE]: (state,flag) => state.drawPhase = flag
  },
  actions: {
    [UPDATE_PLAYER_NUMBERS]: ({commit},{numbers})=>{
      commit('SET_PLAYER_NUMBERS', numbers)      
    },
    [UPDATE_DRAW_NUMBERS]: ({commit},{ball})=>{
      commit('SET_DRAW_NUMBERS', ball)
    },
    [UPDATE_DRAW_PHASE]: ({commit},flag)=>{
      commit('SET_DRAW_PHASE', flag)

    }
  },
  getters:{
    [GET_PLAYER_NUMBERS]: (state) => state.playerNumbers,
    [GET_DRAW_NUMBERS]: (state)=> state.drawNumbers,
    [GET_DRAW_PHASE]: (state)=> state.drawPhase
  },
  modules: {
  }
})
