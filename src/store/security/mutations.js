export default {
    auth(state, payload) {
        state.token = payload.token,
            state.userId = payload.userId
    }
}