<template>
  <div>
    <div v-on="start">
      <el-table ref="multipleTable" :data="businessInfoList" tooltip-effect="dark"
                style="font-size: 1.2vw" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="auto"></el-table-column>
        <el-table-column property="name" label="商户名称" width="250"></el-table-column>
        <el-table-column property="status" label="商户状态" width="120"></el-table-column>
        <el-table-column property="type" label="商户类型" width="200"></el-table-column>
        <el-table-column property="address" label="地址" width="300"></el-table-column>
        <el-table-column property="phone" label="联系电话"></el-table-column>
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
      console.log(this.multipleSelection);
      for (let i = 0; i < this.multipleSelection.length; i++) this.multipleSelection[i].status = '注销';
    },
    businessQuery(queryList) {
      console.log("query");
      //todo change this.businessInfoList
      console.log(this.businessInfoList);
      this.businessInfoList.push(this.copy(this.businessInfoList[1]));
      console.log(this.businessInfoList);
    }
  },
  computed: {
    start() {
      this.businessInfoList = this.$store.state.business.businessInfoList;
    },
  }
}
</script>

<style scoped>

</style>