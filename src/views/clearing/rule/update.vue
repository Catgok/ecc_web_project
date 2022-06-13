<template>
  <div>
    <el-dialog title="修改账户" :visible.sync="visible" center width="40vw">
      <el-form label-position="left" ref="form" :model="form" label-width="100px" style="width: 30vw;padding-left: 2vw">
        <el-form-item label="交易渠道">
          <el-select class="form-item-width" v-model="form.channel" placeholder="请选择交易渠道">
            <el-option label="交易渠道1" value="交易渠道1"></el-option>
            <el-option label="交易渠道2" value="交易渠道2"></el-option>
            <el-option label="交易渠道3" value="交易渠道3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="交易类型">
          <el-select class="form-item-width" v-model="form.type" placeholder="请选择交易类型">
            <el-option label="交易类型1" value="交易类型1"></el-option>
            <el-option label="交易类型2" value="交易类型2"></el-option>
            <el-option label="交易类型3" value="交易类型3"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="出账账户">
          <el-input class="form-item-width" v-model="form.from"></el-input>
        </el-form-item>
        <el-form-item label="入账账户">
          <el-input class="form-item-width" v-model="form.to"></el-input>
        </el-form-item>

        <el-form-item label="百分比">
          <el-input class="form-item-width" v-model="form.percent"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="ruleUpdateSubmit"
                     style="padding: 10px;margin-left: 4vw;margin-top: 10px"> 确 定
          </el-button>
          <el-button @click="ruleUpdateCancel" style="padding: 10px">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "update",
  data() {
    return {
      form: {},
      oldInfo: {},
      visible: false,
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    setRuleInfo(form) {
      this.oldInfo = this.copy(form);
      this.form = this.copy(form);
    },
    setVisible(status) {
      this.visible = status;
    },

    check(form) {
      for (let item in form)
        if (form[item] === "") return false;
      return true;
    },
    check_equal(obj1, obj2) {
      for (let item in obj1) if (obj1[item] !== obj2[item]) return false;
      for (let item in obj2) if (obj1[item] !== obj2[item]) return false;
      return true;
    },
    ruleUpdateSubmit() {
      if (!this.check(this.copy(this.form))) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "信息为空。");
        return;
      }
      if (this.check_equal(this.form, this.oldInfo)) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "未进行修改。");
        return;
      }
      this.$http.put("http://localhost:8010/example/api/rule/update", this.copy(this.form)).then((res) => {
        if (res.body !== "") {
          let updateList = [];
          updateList.push(this.copy(this.oldInfo))
          updateList.push(this.copy(res.body))
          this.$store.commit("ruleListUpdate", updateList);
          this.$emit("parentMethod");
        }
      })

      this.ruleUpdateCancel();
    },
    ruleUpdateCancel() {
      for (let item in this.form) this.form[item] = "";
      this.visible = false;
    },
  }
}
</script>

<style scoped>

</style>