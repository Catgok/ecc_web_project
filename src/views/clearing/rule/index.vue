<template>
  <div>
    <div>
      <el-button @click="clearingRuleAdd" type="primary" plain style="padding-top:10px;padding-bottom: 10px">新增
      </el-button>
      <rule-add ref="ruleAdd"/>
    </div>

    <!--todo 表格-->
    <el-table
        :data="tableData"
        height=100%
        stripe
        border
        style="width: 80%">
      <el-table-column
          prop="date"
          label="日期"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址">
      </el-table-column>
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

      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
      ]
    }
  },

  methods: {
    clearingRuleAdd() {
      this.$refs.ruleAdd.setVisible(true);
      console.log('点击新增按钮成功!');
    },

  }
}
</script>

<style scoped>

</style>