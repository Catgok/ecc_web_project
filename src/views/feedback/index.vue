<template>
  <div class="feedback-main">
    <div class="feedback-main-header">信息反馈</div>
    <el-select v-model="feedbackType" placeholder="请选择反馈类型">
      <el-option v-for="item in feedbackOptions" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    <br><br>

    <el-input style="width: 80%; text-align: center" type="textarea" :rows="15" maxlength="100" placeholder="请输入内容"
              show-word-limit v-model="feedbackInformation">
    </el-input>
    <br><br>
    <el-row class="submit">
      <el-button>取 消</el-button>
      <el-button @click="onSubmit" type="primary">确 定</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      feedbackInformation: "",
      feedbackType: "",
      feedbackOptions: [
        {
          value: '选项1',
          label: '反馈类型1'
        },
        {
          value: '选项2',
          label: '反馈类型2'
        },
        {
          value: '选项3',
          label: '反馈类型3'
        },
        {
          value: '选项4',
          label: '反馈类型4'
        },
      ],
    }
  },
  methods: {
    check() {
      return this.feedbackInformation === "" || this.feedbackType === "";
    },
    onSubmit() {
      this.$store.commit("changeGlobalTipDialogVisible");
      if (!this.check()) {
        this.$store.commit("setGlobalTip", "反馈成功！");
      } else {
        this.$store.commit("setGlobalTip", "反馈类型或内容不能为空。");
      }
    }
  }
}
</script>

<style scoped>

.feedback-main {
  padding-left: 10%;
}

.feedback-main-header {
  height: 7vh;
  width: 80%;
  text-align: center;
  color: rgb(102, 177, 255);
  font-size: 35px;
  font-weight: bolder
}

.submit {
  width: 80%;
  text-align: center;
}
</style>