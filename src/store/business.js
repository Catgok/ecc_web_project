export default {
    state: {
        businessNameList: [
            {text: "商户一", value: "商户一"},
            {text: "商户二", value: "商户二"},
        ],
        businessInfoList: [],
        accountList: [],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        businessInfoUpdate(state, updateList) {
            let oldInfo = updateList[0];
            let newInfo = updateList[1];
            for (let i = 0; i < state.businessInfoList.length; i++) {
                let flag = true;
                for (let item in oldInfo) if (oldInfo[item] !== state.businessInfoList[i][item]) flag = false;
                if (flag) {
                    for (let item in newInfo) state.businessInfoList[i][item] = newInfo[item];
                    break;
                }
            }
        },
        accountInfoUpdate(state, updateList) {
            let oldInfo = updateList[0];
            let newInfo = updateList[1];
            for (let i = 0; i < state.accountList.length; i++) {
                let flag = true;
                for (let item in oldInfo) if (oldInfo[item] !== state.accountList[i][item]) flag = false;
                if (flag) {
                    for (let item in newInfo) state.accountList[i][item] = newInfo[item];
                    break;
                }
            }
        },
    },
    actions: {
        businessQuery(state, queryList_) {
            let queryList = [], resList = [];
            for (let item in queryList_)
                if (queryList_[item] !== "") queryList[item] = queryList_[item];
            for (let i = 0; i < state.state.businessInfoList.length; i++) {
                let flag = true;
                for (let item in queryList) if (queryList_[item] !== state.state.businessInfoList[i][item]) flag = false;
                if (flag) resList.push(state.state.businessInfoList[i])
            }
            return resList;
        }
    }
}