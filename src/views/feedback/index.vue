<template>
  <div class="feedback-main">
    <div class="feedback-main-header">信息反馈</div>
    <el-select v-model="type" placeholder="请选择反馈类型">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <br><br>

    <el-input
        style="width: 80%; text-align: center"
        type="textarea"
        :rows="15"
        maxlength="100"
        placeholder="请输入内容"
        show-word-limit
        v-model="feedbackInformation">
    </el-input>
    <br><br>
    <el-row class="submit">
      <el-button>取消</el-button>
      <el-button type="primary">确定</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "index",
  data() {
    return {
      feedbackInformation: '',
      type: '',
      options: [
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
    onSubmit() {
      console.log('反馈成功!');
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
  color: rgb(102,177,255);
  font-size: 35px;
  font-weight: bolder
}

.submit {
  width: 80%;
  text-align: center;
}
</style>