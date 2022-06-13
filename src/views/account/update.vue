<template>
  <div>
    <el-dialog title="修改账户" :visible.sync="visible" center width="40vw">
      <el-form label-position="left" ref="form" :model="form" label-width="100px" style="width: 30vw;padding-left: 2vw">
        <el-form-item label="账户类型">
          <el-select class="form-item-width" v-model="form.type" placeholder="请选择账户类型">
            <el-option label="账户类型1" value="账户类型1"></el-option>
            <el-option label="账户类型2" value="账户类型2"></el-option>
            <el-option label="账户类型3" value="账户类型3"></el-option>
            <el-option label="账户类型4" value="账户类型4"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="开户银行">
          <el-input class="form-item-width" v-model="form.bank"></el-input>
        </el-form-item>

        <el-form-item label="商户id">
          <el-input class="form-item-width" v-model="form.business"></el-input>
        </el-form-item>

        <el-form-item label="账户状态">
          <el-select class="form-item-width" v-model="form.status" placeholder="请选择账户状态">
            <el-option label="正常" value="0"></el-option>
            <el-option label="注销" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="备注">
          <el-input class="form-item-width" v-model="form.remark"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="accountUpdateSubmit"
                     style="padding: 10px;margin-left: 4vw;margin-top: 10px"> 确 定
          </el-button>
          <el-button @click="accountUpdateCancel" style="padding: 10px">取 消</el-button>
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
    setAccountInfo(form) {
      this.oldInfo = this.copy(form);
      this.form = this.copy(form);
    },
    setVisible(status) {
      this.visible = status;
    },

    check(form) {
      for (let item in form)
        if (form[item] !== "") return true;
      return false;
    },
    check_equal(obj1, obj2) {
      for (let item in obj1) if (obj1[item] !== obj2[item]) return false;
      for (let item in obj2) if (obj1[item] !== obj2[item]) return false;
      return true;
    },
    accountUpdateSubmit() {
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
      this.$http.post("http://localhost:8010/example/api/account/update", this.copy(this.form)).then((res) => {
        if (res.body !== "") {
          let updateList = [];
          updateList.push(this.copy(this.oldInfo))
          updateList.push(this.copy(res.body))
          this.$store.commit("accountInfoUpdate", updateList);
          this.$emit("parentMethod");
        }
      })

      this.accountUpdateCancel();
    },
    accountUpdateCancel() {
      for (let item in this.form) this.form[item] = "";
      this.visible = false;
    },
  }
}
</script>

<style scoped>

</style>