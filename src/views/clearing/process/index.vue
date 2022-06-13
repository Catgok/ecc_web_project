<template>
  <div>
    <el-button type="primary" @click="visible = true" style="margin-left: 1vw;height: auto">添加交易记录</el-button>
    <el-dialog title="添加交易记录" :visible.sync="visible" width="30%">
      <el-form ref="form" :model="trans" label-width="80px">
        <el-form-item label="交易渠道">
          <el-select v-model="trans.channel" placeholder="请选择">
            <el-option v-for="item in this.$store.state.rule.transChannelList" :index="item.text"
                       :key="item.text" :label="item.text" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="交易类型">
          <el-select v-model="trans.type" placeholder="请选择">
            <el-option v-for="item in this.$store.state.rule.transTypeList" :index="item.text"
                       :key="item.text" :label="item.text" :value="item.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="交易账户">
          <el-input v-model="trans.account" placeholder="请输入交易账户"></el-input>
        </el-form-item>

        <el-form-item label="交易金额">
          <el-input v-model="trans.amount" placeholder="请输入交易金额"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="transCancel">取 消</el-button>
        <el-button type="primary" @click="transSubmit">确 定</el-button>
      </span>
    </el-dialog>
    <result ref="result"></result>
  </div>
</template>

<script>
import result from "./result";

export default {
  name: "process",
  components: {Result: result},
  data() {
    return {
      visible: false,
      trans: {
        channel: null,
        type: null,
        account: null,
        amount: null
      },
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    transCancel() {
      this.visible = false;
      this.trans = {
        channel: null,
        type: null,
        account: null,
        amount: null
      }
    },
    transSubmit() {
      let businessId = this.$store.state.tab.businessId;
      this.$http.post("http://localhost:8010/example/api/transRecord/add", this.copy(this.trans)).then((res) => {
        if (res.data === true) {
          this.$http.put("http://localhost:8010/example/api/result/get/by/business/" + businessId).then((resu) => {
            let resultList = resu.data;
            this.$store.state.result.resultList = [];
            for (let i = 0; i < resultList.length; i++) this.$store.state.result.resultList.push(resultList[i]);
          })
          this.$store.commit("changeGlobalTipDialogVisible");
          this.$store.commit("setGlobalTip", "添加成功");
          this.update();
        }
      })
      this.transCancel();
    },
    update() {
      this.$refs.result.update();
    }
  }
}
</script>

<style scoped>

</style>