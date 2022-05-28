export default {
    state: {

        businessNameList: [
            {text: "商户一", value: "商户一"},
            {text: "商户二", value: "商户二"},
        ],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}