import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from "./router";
import store from "./store";
import VueResource from "vue-resource";
import axios from "axios";

import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/index.css';
import 'font-awesome/css/font-awesome.min.css'
import 'reset-css/reset.css'

Vue.config.productionTip = false
// Vue.prototype.$axios = axios

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
    store,
    router,
    el: '#app',
    render: h => h(App)
});