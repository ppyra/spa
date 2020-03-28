import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import store from '@/store/store'

Vue.use(axios, VueAxios)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')