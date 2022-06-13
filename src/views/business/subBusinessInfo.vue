<template>
  <div>
    <div v-on="start">
      <el-table ref="multipleTable" :data="businessInfoList" tooltip-effect="dark"
                style="font-size: 1.2vw;"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="auto"></el-table-column>
        <el-table-column property="id" label="商户编号" width="150"></el-table-column>
        <el-table-column property="name" label="商户名称" width="200"></el-table-column>
        <el-table-column property="status" label="商户状态" width="150"></el-table-column>
        <el-table-column property="type" label="商户类型" width="150"></el-table-column>
        <el-table-column property="address" label="商户地址" width="250"></el-table-column>
        <el-table-column property="parent" label="上级商户编号"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

export default {
  name: "subBusinessInfo",
  data() {
    return {
      businessInfoList: [],
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
    businessChange() {
      if (this.multipleSelection.length === 1) return this.copy(this.multipleSelection[0]);
      else return "";
    },
    businessCancellation() {
      if (this.multipleSelection.length === 0) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "至少选择一条。");
      }
      for (let i = 0; i < this.multipleSelection.length; i++) this.multipleSelection[i].status = '1';//todo submit
    },
    businessQuery(queryList) {
      this.$store.dispatch("businessQuery", queryList).then(res => {
        this.businessInfoList = res;
      });
    },

  },
  computed: {
    start() {
      this.$data.businessInfoList = this.$store.state.business.businessInfoList;
    },
    update(business) {
      this.$data.businessInfoList = this.$store.state.business.businessInfoList;
    }
  }
}
</script>

<style scoped>

</style>