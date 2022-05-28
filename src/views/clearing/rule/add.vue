<template>
  <div>
    <el-dialog title="新增清分规则" :visible.sync="visible" :close-on-click-modal=false center width="45%">
      <span>
          <el-form ref="form" :model="form" label-width="80px">

            <el-form-item label="交易渠道">
              <el-select v-model="form.transChannel" placeholder="请选择">
                <el-option v-for="item in this.$store.state.rule.transChannelList" :index="item.text"
                           :key="item.text" :label="item.text" :value="item.value"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="交易类型">
              <el-select v-model="form.transType" placeholder="请选择">
                <el-option v-for="item in this.$store.state.rule.transTypeList" :index="item.text"
                           :key="item.text" :label="item.text" :value="item.value"></el-option>
              </el-select>
            </el-form-item>

            <div style="border: 2px silver solid;padding: 5% 0 0 4%">
              <div>
                <el-select v-model="form.businessName" placeholder="请选择商户">
                  <el-option v-for="item in this.$store.state.rule.businessNameList" :index="item.text"
                             :key="item.text" :label="item.text" :value="item.value"></el-option>
                </el-select>
                <el-input v-model="form.businessPercent" placeholder="10%"
                          style="width:7vw; padding-left: 20px "></el-input>
                <el-button type="primary" style="width: 5vw;height:40px;margin-left: 20px;border: 0"
                           @click="clearingRuleAddOne()">添 加</el-button>
              </div>

              <el-table :data="clearingRuleList" :show-header="false" style="width: 100%;padding-top: 10px">
                <el-table-column prop="businessName" width="120"></el-table-column>
                <el-table-column prop="transChannel" width="120"></el-table-column>
                <el-table-column prop="transType" width="120"></el-table-column>
                <el-table-column prop="businessPercent"></el-table-column>
              </el-table>
            </div>

          </el-form>
        </span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="clearingRuleAddCancel()" style="padding: 10px">取 消</el-button>
          <el-button type="primary" @click="clearingRuleAddSubmit()" style="padding: 10px">立即创建</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "add",
  data() {
    return {
      clearingRuleList: [],
      visible: false,
      form: {
        transChannel: '',
        transType: '',
        businessPercent: '',
        businessName: '',
      },
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    clearingRuleAddCancel() {
      this.visible = false;
      this.clearingRuleList = [];
    },
    clearingRuleAddSubmit() {
      this.visible = false;
      console.log('新增rule成功!');
      console.log(this.clearingRuleList);
      this.$emit("parentMethod", this.copy(this.clearingRuleList));
      this.clearingRuleList = [];
    },
    check(form) {
      for (let item in form)
        if (form[item] === "") return false;
      for (let i = 0; i < this.clearingRuleList.length; i++) {
        let flag = true;
        for (let item in form) if (form[item] !== this.clearingRuleList[i][item]) flag = false;
        if (flag === true) return false;
      }
      return true;
    },
    clearingRuleAddOne() {
      if (!this.check(this.form)) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "信息为空或已重复。");
        return;
      }
      this.clearingRuleList.push(this.copy(this.form));
    },
    setVisible(status) {
      this.visible = status;
    }
  }
}
</script>

<style scoped>

</style>