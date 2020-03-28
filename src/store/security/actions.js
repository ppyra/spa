import authAxios from '@/auth-axios';

export default {
    async register({ commit }, payload) {
        try {
            let response = await authAxios.post('accounts:signUp?key=AIzaSyAELYGY4TybuEKf2iUg5jDgn1c2gpOT-ig', payload)
            commit('auth', {
                token: response.data.idToken,
                userId: response.data.localId
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    },
    async login({ commit }, payload) {
        try {
            let response = await authAxios.post('accounts:signInWithPassword?key=AIzaSyAELYGY4TybuEKf2iUg5jDgn1c2gpOT-ig', payload)
            commit('auth', {
                token: response.data.idToken,
                userId: response.data.localId
            })
            console.log(response)
        } catch (e) {
            console.log(e)
        }
    }
}