<template>
  <div>
    <div>
      <el-button @click="clearingRuleAdd" type="primary" plain
                 style="margin:20px 0 15px 40px;padding-top:10px;padding-bottom: 10px">新增规则
      </el-button>
      <rule-add @parentMethod="clearingRuleAddSubmit" ref="ruleAdd"></rule-add>
    </div>

    <el-table ref="filterTable" :data="clearingRuleList" stripe style="margin-left:40px;width: 85%;font-size: 1.2vw;">
      <el-table-column prop="businessName" label="商户名称" width="300"
                       :filters=this.$store.state.rule.businessNameList
                       :filter-method="filterHandler"></el-table-column>
      <el-table-column prop="transChannel" label="交易渠道" width="200"
                       :filters=this.$store.state.rule.transChannelList
                       :filter-method="filterHandler"></el-table-column>
      <el-table-column prop="transType" label="交易类型" width="200"
                       :filters=this.$store.state.rule.transTypeList
                       :filter-method="filterHandler"></el-table-column>
      <el-table-column prop="businessPercent" label="收益比例"></el-table-column>
    </el-table>
  </div>

</template>

<script>
import ruleAdd from './add'

export default {
  name: "index",
  components: {
    ruleAdd,
  },
  data() {
    return {
      clearingRules: [
        {
          rule_id: "",
          business_id: "",
          rule_type: "",
          content: "",
          status: "",
          create_by: "",
          create_time: "",
          update_by: "",
          update_time: "",
        }
      ],
      clearingRuleList: [
        {
          transChannel: '微信',
          transType: '类型二',
          businessPercent: '60%',
          businessName: '商户一',
        },
        {
          transChannel: '支付宝',
          transType: '类型一',
          businessPercent: '40%',
          businessName: '商户二',
        },
        {
          transChannel: '网银',
          transType: '类型二',
          businessPercent: '10%',
          businessName: '商户一',
        },
      ]
    }
  },

  methods: {
    // f() {
    //   console.log(this.$refs.ruleAdd.getList());
    //   return this.$refs.ruleAdd.getList();
    // },
    clearingRuleAddSubmit(data) {
      for (let i = 0; i < data.length; i++) this.clearingRuleList.push(data[i]);
    },
    clearingRuleAdd() {
      this.$refs.ruleAdd.setVisible(true);
      console.log('点击新增按钮成功!');
      console.log([{text: '微信', value: '微信'}, {text: '商户二', value: '商户二'}]);
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value;
    }
  }
}
</script>

<style scoped>

</style>