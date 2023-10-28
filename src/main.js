/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./axios";
import "./validation"
import './helpers/mixins'
import "normalize.css/normalize.css"
import 'popper.js'
import 'bootstrap'
import './assets/scss/app.scss'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";

const options = {};
Vue.use(Toast, options);

window.toastr = require('toastr')

Vue.prototype.$http = axios;

Vue.prototype.checkError = err => {
    if (err.response.status === 401) {
        localStorage.clear();
        window.location.href = "/login";
    } else if (err.response.status === 400 || err.response.status === 404) {
        Vue.$toast.error(err.response.data.message);
    } else if (err.response.status === 422) {
        let message = ''
        for (const [, value] of Object.entries(err.response.data.errors)) message += '<div>' + value + '</div>'
        toastr.error(message)
    } else Vue.$toast.error('Something went wrong! Please try again.')
};

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
