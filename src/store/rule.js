export default {
    state: {
        transChannelList: [
            {text: "交易渠道1", value: "交易渠道1"},
            {text: "交易渠道2", value: "交易渠道2"},
            {text: "交易渠道3", value: "交易渠道3"},
        ],
        transTypeList: [
            {text: "交易类型1", value: "交易类型1"},
            {text: "交易类型2", value: "交易类型2"},
            {text: "交易类型3", value: "交易类型3"},
        ],
        ruleList: [],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        ruleListUpdate(state, updateList) {
            let oldInfo = updateList[0];
            let newInfo = updateList[1];
            for (let i = 0; i < state.ruleList.length; i++) {
                let flag = true;
                for (let item in oldInfo) if (oldInfo[item] !== state.ruleList[i][item]) flag = false;
                if (flag) {
                    for (let item in newInfo) state.ruleList[i][item] = newInfo[item];
                    break;
                }
            }
        },
    }
}