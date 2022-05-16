<template>

  <el-form ref="form" :model="form" label-width="80px" style="width: 25vw;padding-left: 10vw;padding-top: 1vw;font-size: 20px">
    <div style="height: 5vh;text-align: center;color: red">商户新增</div>
    <el-form-item label="商户名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="商户状态">
      <el-select v-model="form.status" placeholder="请选择商户状态">
        <el-option label="正常" value="True"></el-option>
        <el-option label="注销" value="False"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="商户类型">
      <el-select v-model="form.type" placeholder="请选择商户类型">
        <el-option label="有限责任公司" value="有限责任公司"></el-option>
        <el-option label="个体户" value="个体户"></el-option>
        <el-option label="股份公司" value="股份公司"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item label="商户名称">
      <el-input v-model="form.address"></el-input>
    </el-form-item>

    <el-form-item label="商户名称">
      <el-input v-model="form.phone"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit" style="padding: 10px">立即创建</el-button>
      <el-button style="padding: 10px">取消</el-button>
    </el-form-item>

  </el-form>
</template>

<style scoped>

</style>

<script>
export default {
  /* eslint-disable */
  name: "add",
  data() {
    return {
      form: {
        name: '',
        status: '',
        type: '',
        address: '',
        phone: '',
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('新增商户成功!');
    }
  }
}
</script>