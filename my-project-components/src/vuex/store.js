import Vue from "vue";
import Vuex from "vuex";

//后续需要用到的counter状态
import counter from "@/vuex/modules/counter"

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        counter,        //需要管理的modules都在这里声明
    },
    strict: debug,
    middlewares: []
})