// import Vue from 'vue'
// import Vuex from 'vuex'
// import authAxios from './auth-axios';
// import axios from 'axios';

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//         token: null,
//         userId: null,
//         content: null
//     },
//     mutations: {
//         auth(state, payload) {
//             state.token = payload.token,
//                 state.userId = payload.userId
//         },
//         setContent(state, payload) {
//             state.content = payload
//         }
//     },
//     actions: {
//         async register({ commit }, payload) {
//             try {
//                 let response = await authAxios.post('accounts:signUp?key=AIzaSyAELYGY4TybuEKf2iUg5jDgn1c2gpOT-ig', payload)
//                 commit('auth', {
//                     token: response.data.idToken,
//                     userId: response.data.localId
//                 })
//                 console.log(response)
//             } catch (e) {
//                 console.log(e)
//             }
//         },
//         async login({ commit }, payload) {
//             try {
//                 let response = await authAxios.post('accounts:signInWithPassword?key=AIzaSyAELYGY4TybuEKf2iUg5jDgn1c2gpOT-ig', payload)
//                 commit('auth', {
//                     token: response.data.idToken,
//                     userId: response.data.localId
//                 })
//                 console.log(response)
//             } catch (e) {
//                 console.log(e)
//             }
//         },
//         async getContentPage({ commit }, state) {
//             if (state.userId === null) {
//                 return
//             }
//             try {
//                 let { data } = await this.axios('https://spa-podolog.firebaseio.com/')
//                 commit('setContent', Object.values(data))
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//     }
// })