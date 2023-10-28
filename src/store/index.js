import Vue from 'vue'
import Vuex from 'vuex'
import axios from "../axios";

Vue.use(Vuex)

let state = {
    name: localStorage.getItem("name") || null,
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || {},
    school: {
        settings: {
            formActive: false
        }
    },
    parentRegParams:{
        prefecture_id: '',
        surname: '',
        name: '',
        furigana_surname: '',
        furigana_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        birthday: '',
        nickname: '',
        phone_number: '',
        post_code: '',
        address: '',
        city: '',
        building_name: '',
        point: 0,
        childrens: [],
        ordinalTitle: ['第一子', '2番目の子供', 'サードチャイルド', '4番目の子供', '5番目の子供', '6番目の子供', 'セブンスチャイルド', '8番目の子供', '9番目の子供', '10番目の子供'],
    }
}

let getters = {
    loggedIn(state) {
        return ((state.user.type === 'parent') && !!state.token)
    },

    loggedInSchool(state) {
        return ((state.user.type === 'school') && !!state.token)
    },

    user(state) {
        return state.user
    },

    userName(state) {
        return state.name
    },

    schoolSettingFormActive(state) {
        return state.school.settings.formActive
    }
}

let mutations = {
    setToken(state, data) {
        state.token = data.token
        state.user = data.user
    },
    userName(state, data) {
        state.name = data
    },
    removeToken(state) {
        state.user = {}
        state.token = null
    },
    schoolSettingFormActiveUpdate(state, active) {
        state.school.settings.formActive = active
    },
}

let actions = {
    login(context, credential) {
        return new Promise((resolve, reject) => {
            axios.post('/login', {
                email: credential.email,
                password: credential.password,
            }).then(response => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem("user", JSON.stringify(response.data.user));
                context.commit('setToken', response.data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    },

    logout(context) {
        return new Promise((resolve, reject) => {
            axios.post('/logout').then(response => {
                localStorage.removeItem('token')
                localStorage.removeItem('user')
                localStorage.clear();
                context.commit('removeToken')
                resolve(response.data)
            }).catch(error => {
                reject(error)
            })
        })
    },

    setUserName(context) {
        axios.get('/user').then(response => {
            context.commit('userName', response.data.name)
            localStorage.setItem("name", response.data.name);
        })
    },
}


export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
});
