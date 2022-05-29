export default {
    state: {
        isCollapse: false,
        globalTipDialogVisible: false,
        globalTip: "这是提示。",
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse;
        },
        changeGlobalTipDialogVisible(state) {
            state.globalTipDialogVisible = !state.globalTipDialogVisible;
        },
        setGlobalTip(state, info) {
            state.globalTip = info
        }
    }
}