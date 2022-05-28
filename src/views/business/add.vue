<template>
  <div>
    <el-dialog
        title="新增商户"
        :visible.sync="visible"
        center
        width="40vw">
      <el-form label-position="right" ref="form" :model="form" label-width="100px"
               style="width: 30vw;padding-left: 2vw">
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
          <el-button type="primary" @click="onSubmit" style="padding: 10px;margin-left: 4vw;margin-top: 10px">立即创建
          </el-button>
          <el-button @click="visible = false" style="padding: 10px">取 消</el-button>
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
        name: '',
        status: '',
        type: '',
        address: '',
        phone: '',
      },
      visible: false,
    }
  },
  methods: {
    onSubmit() {
      this.visible = false;
      console.log('新增商户成功!');
    },
    setVisible(status) {
      this.visible = status;
    },
  }
}
</script>