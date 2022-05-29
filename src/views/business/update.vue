<template>
  <div>
    <el-dialog title="修改商户信息" :visible.sync="visible" center width="40vw">
      <el-form label-position="left" ref="form" :model="form" label-width="100px" style="width: 30vw;padding-left: 2vw">
        <el-form-item label="商户名称">
          <el-input class="form-item-width" v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="商户状态">
          <el-select class="form-item-width" v-model="form.status" placeholder="请选择商户状态">
            <el-option label="正常" value="正常"></el-option>
            <el-option label="注销" value="注销"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商户类型">
          <el-select class="form-item-width" v-model="form.type" placeholder="请选择商户类型">
            <el-option label="有限责任公司" value="有限责任公司"></el-option>
            <el-option label="个体户" value="个体户"></el-option>
            <el-option label="股份公司" value="股份公司"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="商户地址">
          <el-input class="form-item-width" v-model="form.address"></el-input>
        </el-form-item>

        <el-form-item label="商户联系方式">
          <el-input class="form-item-width" v-model="form.phone"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="businessUpdateSubmit"
                     style="padding: 10px;margin-left: 4vw;margin-top: 10px"> 确认修改
          </el-button>
          <el-button @click="businessUpdateCancel" style="padding: 10px">取 消</el-button>
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
    setBusinessInfo(form) {
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
    businessUpdateSubmit() {
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
      let updateList = [];
      updateList.push(this.copy(this.oldInfo))
      updateList.push(this.copy(this.form))
      this.$store.commit("businessInfoUpdate", updateList)
      this.businessUpdateCancel();
    },
    businessUpdateCancel() {
      for (let item in this.form) this.form[item] = "";
      this.visible = false;
    },
  }
}
</script>

<style scoped>

.form-item-width {
  width: 23vw;
}
</style>