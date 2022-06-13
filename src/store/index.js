import Vue from 'vue'
import Vuex from 'vuex'
import tab from "./tab";
import rule from "./rule";
import business from "./business";
import result from "./result";

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        tab,
        rule,
        business,
        result,
    }
})
