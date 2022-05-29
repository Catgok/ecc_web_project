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
                region: "龙玉县",
                phone: '13529219181',
            },
            {
                name: '古城驿站区',
                status: '注销',
                type: '个体户',
                address: '云南省丽江市龙纳西族自治县',
                region: "古城区",
                phone: '16154892363',
            },
            {
                name: '沙溪古镇',
                status: '正常',
                type: '股份公司',
                address: '云南省丽江市龙纳西族自治县',
                region: "沙溪县",
                phone: '13745201923',
            },
            {
                name: '滇池风景区',
                status: '正常',
                type: '个体户',
                address: '云南省昆明市滇池',
                region: "昆明市",
                phone: '13545793421',
            },
            {
                name: '东巴文化圈景区',
                status: '正常',
                type: '个体户',
                address: '云南省丽江市龙纳西族自治县',
                region: "文海县",
                phone: '18693482091',
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