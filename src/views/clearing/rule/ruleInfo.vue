<template>
  <div>
    <div v-on="start">
      <el-table ref="multipleTable" :data="ruleList" tooltip-effect="dark" style="font-size: 1.2vw;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="auto"></el-table-column>
        <el-table-column property="id" label="规则编号" width="150"></el-table-column>
        <el-table-column property="channel" label="交易渠道" width="200"></el-table-column>
        <el-table-column property="type" label="交易类型" width="150"></el-table-column>
        <el-table-column property="from" label="出账账户" width="150"></el-table-column>
        <el-table-column property="to" label="入账账户" width="250"></el-table-column>
        <el-table-column property="percent" label="百分比"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ruleInfo",
  data() {
    return {
      ruleList: [],
      multipleSelection: [],
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    ruleChange() {
      if (this.multipleSelection.length === 1) return this.copy(this.multipleSelection[0]);
      else return "";
    },
    update(rule) {
      this.$data.ruleList = this.$store.state.rule.ruleList;
    }

  },
  computed: {
    start() {
      this.$data.ruleList = this.$store.state.rule.ruleList;
    },

  }
}
</script>

<style scoped>

</style>