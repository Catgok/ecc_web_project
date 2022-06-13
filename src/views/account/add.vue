<template>
  <div>
    <el-dialog title="新增账户" :visible.sync="visible" center width="40vw">
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
          <el-button type="primary" @click="accountAddSubmit" style="padding: 10px;margin-left: 4vw;margin-top: 10px">
            确 定
          </el-button>
          <el-button @click="accountAddCancel" style="padding: 10px">取 消</el-button>
        </el-form-item>

      </el-form>
    </el-dialog>
  </div>
</template>

<style scoped>
.form-item-width {
  width: 23vw;
}
</style>

<script>
export default {
  name: "add",
  data() {
    return {
      form: {
        no: null,
        type: null,
        bank: null,
        business: null,
        status: "0",
        balance: 0,
        create_by: null,
        create_time: null,
        update_by: null,
        update_time: null,
        remark: null
      },
      visible: false,
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },

    check(form) {
      for (let item in form)
        if (form[item] === "") return false;
      return true;
    },
    accountAddSubmit() {
      if (!this.check(this.form)) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "信息为空。");
      }
      this.$http.post("http://localhost:8010/example/api/account/add", this.copy(this.form)).then((res) => {
        if (res.body !== "") {
          this.$store.commit("changeGlobalTipDialogVisible");
          this.$store.commit("setGlobalTip", "添加成功");
          this.$store.state.business.accountList.push(this.copy(res.body));
          this.$emit("parentMethod");
        } else {
          this.$store.commit("changeGlobalTipDialogVisible");
          this.$store.commit("setGlobalTip", "添加失败");
        }
      })
      this.accountAddCancel();
    },
    accountAddCancel() {
      for (let item in this.form) this.form[item] = "";
      this.visible = false;
    },
    setVisible(status) {
      this.visible = status;
    },
  }
}
</script>