<template>
  <div>
    <el-dialog title="新增商户" :visible.sync="visible" center width="40vw">
      <el-form label-position="left" ref="form" :model="form" label-width="100px" style="width: 30vw;padding-left: 2vw">
        <el-form-item label="商户类型">
          <el-select class="form-item-width" v-model="form.type" placeholder="请选择商户类型">
            <el-option label="有限责任公司" value="有限责任公司"></el-option>
            <el-option label="个体户" value="个体户"></el-option>
            <el-option label="股份公司" value="股份公司"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商户名称">
          <el-input class="form-item-width" v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商户密码">
          <el-input class="form-item-width" v-model="form.pass" show-password></el-input>
        </el-form-item>
        <el-form-item label="商户状态">
          <el-select class="form-item-width" v-model="form.status" placeholder="请选择商户状态">
            <el-option label="正常" value="0"></el-option>
            <el-option label="注销" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="上级商户编号">
          <el-input class="form-item-width" v-model="form.parent"></el-input>
        </el-form-item>
        <el-form-item label="商户地址">
          <el-input class="form-item-width" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input class="form-item-width" v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input class="form-item-width" v-model="form.remark"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="businessAddSubmit" style="padding: 10px;margin-left: 4vw;margin-top: 10px">
            立即创建
          </el-button>
          <el-button @click="businessAddCancel" style="padding: 10px">取 消</el-button>
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
        id: null,
        type: "",
        name: "",
        pass: "",
        parent: null,
        address: "",
        phone: "",
        status: "0",
        createBy: null,
        createTime: null,
        updateBy: null,
        updateTime: null,
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
    businessAddSubmit() {
      if (!this.check(this.form)) {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "信息为空。");
      }
      this.$http.post("http://localhost:8010/example/api/business/add", this.form).then((res) => {
        if (res.body !== "") {
          this.$store.commit("changeGlobalTipDialogVisible");
          this.$store.commit("setGlobalTip", "添加成功");
          this.$store.state.business.businessInfoList.push(this.copy(res.body));
          this.$emit("parentMethod");
        } else {
          this.$store.commit("changeGlobalTipDialogVisible");
          this.$store.commit("setGlobalTip", "添加失败");
        }
      })
      this.businessAddCancel();
    },
    businessAddCancel() {
      for (let item in this.form) this.form[item] = "";
      this.visible = false;
    },
    setVisible(status) {
      this.visible = status;
    },
  }
}
</script>