<template>
  <div>
    <div>
      <el-table ref="multipleTable" :data="businessInfoList" tooltip-effect="dark"
                @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="auto"></el-table-column>
        <el-table-column property="name" label="商户名称" width="120"></el-table-column>
        <el-table-column property="status" label="商户状态" width="120"></el-table-column>
        <el-table-column property="type" label="商户类型" width="120"></el-table-column>
        <el-table-column property="address" label="地址" width="220"></el-table-column>
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
      multipleSelection: [],
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
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    businessChange() {
      if (this.multipleSelection.length === 1) console.log("ok");
      else console.log("error");
      console.log(this.multipleSelection);
    },
    businessCancellation() {
      console.log(this.multipleSelection);
      for (let i = 0; i < this.multipleSelection.length; i++) this.multipleSelection[i].status = '注销';
    }
  }
}
</script>

<style scoped>

</style>