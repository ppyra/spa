import Vue from 'vue'
import Vuex from 'vuex'

import secGetters from '@/store/security/getters'
import secMutations from '@/store/security/mutations'
import secActions from '@/store/security/actions'

import webContentState from '@/store/web_content/state'
import webContentGetters from '@/store/web_content/getters'
import webContentMutations from '@/store/web_content/mutations'
import webContentActions from '@/store/web_content/actions'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        security: {
            namespaced: true,
            state: {
                token: null,
                user: null
            },
            getters: secGetters,
            mutations: secMutations,
            actions: secActions
        },
        webContent: {
            namespaced: true,
            state: webContentState,
            getters: webContentGetters,
            mutations: webContentMutations,
            actions: webContentActions
        }
    }
})
export default store