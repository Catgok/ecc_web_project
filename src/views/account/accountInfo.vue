<template>
  <div>
    <div v-on="start">
      <el-table ref="multipleTable" :data="accountList" tooltip-effect="dark" style="font-size: 1.2vw;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="auto"></el-table-column>
        <el-table-column property="no" label="账户编号" width="150"></el-table-column>
        <el-table-column property="type" label="账户类型" width="200"></el-table-column>
        <el-table-column property="bank" label="开户银行" width="150"></el-table-column>
        <el-table-column property="business" label="商户id" width="150"></el-table-column>
        <el-table-column property="status" label="状态" width="100"></el-table-column>
        <el-table-column property="balance" label="余额" width="100"></el-table-column>
        <el-table-column property="remark" label="备注"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: "accountInfo",
  data() {
    return {
      accountList: [],
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
    accountChange() {
      if (this.multipleSelection.length === 1) return this.copy(this.multipleSelection[0]);
      else return "";
    },
    accountCancellation() {
      if (this.multipleSelection.length === 0) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "至少选择一条。");
      }
      for (let i = 0; i < this.multipleSelection.length; i++) this.multipleSelection[i].status = '1';//todo submit
    },
    accountQuery(queryList) {
      this.$store.dispatch("accountQuery", queryList).then(res => {
        this.accountList = res;
      });
    },
    update(account) {
      this.$data.accountList = this.$store.state.business.accountList;
    }
  },
  computed: {
    start() {
      this.$data.accountList = this.$store.state.business.accountList;
    },

  }
}
</script>

<style scoped>

</style>