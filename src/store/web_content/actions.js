import axios from 'axios'
export default {
    getContentPage({ commit }) {

        // if (state.userId === null) {
        //     return
        // }
        try {
            // eslint-disable-next-line no-debugger
            debugger
            let { data } = axios.get('https://spa-podolog.firebaseio.com/content.json')
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