export default {
    async getContentPage({ commit }, state) {
        if (state.userId === null) {
            return
        }
        try {
            let { data } = await this.axios('https://spa-podolog.firebaseio.com/')
            commit('setContent', Object.values(data))
        } catch (e) {
            console.log(e)
        }
    }
}