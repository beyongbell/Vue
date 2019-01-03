
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import VueSimplemde from 'vue-simplemde'

Vue.use(VueSimplemde)

import User from './Helpers/User'

window.User = User;

window.EventBus = new Vue()

Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './Router/router.js'

const app = new Vue({
    el: '#app',
    router
});
