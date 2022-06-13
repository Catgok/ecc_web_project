<template>
  <div>
    <div v-on="start">
      <el-table :data="resultList" style="font-size: 1.2vw;width: 75vw;margin:2vw 0 0 3vw">
        <el-table-column prop="id" label="清分编号" width="150"></el-table-column>
        <el-table-column prop="business" label="清分商户" width="200"></el-table-column>
        <el-table-column prop="from" label="出账账户" width="150"></el-table-column>
        <el-table-column prop="to" label="入账账户" width="150"></el-table-column>
        <el-table-column prop="subject" label="清分科目" width="150"></el-table-column>
        <el-table-column prop="trans" label="交易记录" width="100"></el-table-column>
        <el-table-column prop="earnings" label="交易金额"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "result",
  data() {
    return {
      resultList: [],
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    update() {
      this.$data.resultList = this.$store.state.result.resultList;
    }
  },
  computed: {
    start() {
      this.$data.resultList = this.$store.state.result.resultList;
    }
  }
}
</script>

<style scoped>

</style>