export default {
    state: {
        transChannelList: [
            {text: "支付宝", value: "支付宝"},
            {text: "微信", value: "微信"},
            {text: "网银", value: "网银"},
        ],
        transTypeList: [
            {text: "余额", value: "余额"},
            {text: "月卡", value: "月卡"},
            {text: "现金", value: "现金"},
        ],
        businessNameList: [
            {text: "玉龙山景区", value: "玉龙山景区"},
            {text: "古城驿站区", value: "古城驿站区"},
            {text: "沙溪古镇", value: "沙溪古镇"},
            {text: "滇池风景区", value: "滇池风景区"},
        ],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}