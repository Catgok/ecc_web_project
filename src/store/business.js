export default {
    state: {
        businessNameList: [
            {text: "商户一", value: "商户一"},
            {text: "商户二", value: "商户二"},
        ],
        businessInfoList: [
            {
                name: '玉龙山景区',
                status: '正常',
                type: '有限责任公司',
                address: '云南省丽江市龙纳西族自治县',
                phone: '13529219181',
            },
            {
                name: '古城驿站区',
                status: '注销',
                type: '个体户',
                address: '云南省丽江市龙纳西族自治县',
                phone: '13529219181',
            },
            {
                name: '古城驿站区',
                status: '正常',
                type: '个体户',
                address: '云南省丽江市龙纳西族自治县',
                phone: '13529219181',
            },
        ],
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
    }
}