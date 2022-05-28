<template>
  <div>
    <el-dialog
        title="新增清分规则"
        :visible.sync="visible"
        width="40%">
      <span>
        <!--todo style 样式修改-->
          <el-form ref="form" :model="form" label-width="80px" style="">

            <el-form-item label="交易渠道">
              <el-select v-model="form.transChannel" placeholder="请选择">
                <el-option v-for="item in transChannelList" :index="item.label" :key="item.label" :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="交易类型">
              <el-select v-model="form.transType" placeholder="请选择">
                <el-option v-for="item in transTypeList" :index="item.label" :key="item.label" :label="item.label"
                           :value="item.value"></el-option>
              </el-select>
            </el-form-item>


            <div style="border: 1px red solid;">
              <div>
                <el-select v-model="form.businessName" placeholder="请选择商户" style="">
                  <el-option v-for="item in businessList" :index="item.label" :key="item.label" :label="item.label"
                             :value="item.value"></el-option>
                </el-select>
                <el-input v-model="form.businessPercent" placeholder="10%"
                          style="width:100px; padding-left: 20px "></el-input>
                <el-button class="fa fa-plus fa-2x"
                           style="padding-top: 10px; height:40px ; width:40px;color: blue;border: 10px;text-align: center"
                           @click="clearingRuleAddOne()"></el-button>
              </div>

              <div v-for="item in clearingRuleList" :key="item.businessName">
                {{ item.businessName }}
                {{ item.businessPercent }}
              </div>
            </div>

          </el-form>
        </span>
      <span slot="footer" class="dialog-footer">
          <el-button @click="visible = false" style="padding: 10px">取 消</el-button>
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
      transChannelList: [
        {label: "支付宝", value: "支付宝"},
        {label: "微信", value: "微信"},
        {label: "网银", value: "网银"},
      ],
      transTypeList: [
        {label: "类型一", value: "类型一"},
        {label: "类型二", value: "类型二"},
      ],
      businessList: [
        {label: "商户一", value: "商户一"},
        {label: "商户二", value: "商户二"},
      ],
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

    clearingRuleAddSubmit() {
      this.visible = false;
      console.log('新增rule成功!');
      console.log(this.clearingRuleList);
    },
    clearingRuleAddOne() {
      this.clearingRuleList.push(this.copy(this.form));
      console.log(this.clearingRuleList);
    },
    setVisible(status) {
      this.visible = status;
    }
  }
}
</script>

<style scoped>

</style>