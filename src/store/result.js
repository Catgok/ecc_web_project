export default {
    state: {
        resultList: [],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
    }
}