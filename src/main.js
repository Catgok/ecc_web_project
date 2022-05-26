import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from "./router";
import store from "./store";

import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'reset-css/reset.css'

Vue.use(ElementUI);

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
});