import {INCREASE} from "@/vuex/mutation_types";

//表示状态，类似于数据库，可以保存各种数据，但是无法直接被访问
const state = {
    points: 10
}

//取值方法
const getters = {
    get_points: state => {
        return state.points
    }
}

//表示变化，类似于setter，state的所有状态都靠它驱动变化
const mutations = {
    [INCREASE](state, data) {
        state.points = data
    }
}

export default {
    state,
    mutations,
    getters,
}