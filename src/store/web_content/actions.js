import axios from 'axios'
export default {
    async getContentPage({ commit }, state) {
        if (state.userId === null) {
            return
        }
        try {
            let { data } = await axios('https://spa-podolog.firebaseio.com/content.json')
            commit('setContent', Object.values(data))
        } catch (e) {
            console.log(e)
        }
    },
    async setCompanyInfo({ commit }, state) {
        if (state.userId === null) {
            return
        }
        try {
            let { data } = await axios.patch('https://spa-podolog.firebaseio.com/content.json', state)
            commit('setContent', Object.values(data))
        } catch (e) {
            console.log(e)
        }
    }
}