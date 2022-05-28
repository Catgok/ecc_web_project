export default {
    state: {
        transChannelList: [
            {text: "支付宝", value: "支付宝"},
            {text: "微信", value: "微信"},
            {text: "网银", value: "网银"},
        ],
        transTypeList: [
            {text: "类型一", value: "类型一"},
            {text: "类型二", value: "类型二"},
        ],
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