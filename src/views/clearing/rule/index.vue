<template>
  <div>
    <div>
      <el-row style="display: flex;flex-direction: row">
        <el-button @click="ruleAdd" class="search-item-button" type="primary" plain>新增</el-button>
        <rule-add @parentMethod="update" ref="ruleAdd"></rule-add>
        <el-button @click="ruleChange" class="search-item-button" type="primary" plain style="color: lawngreen">修改
        </el-button>
        <rule-update @parentMethod="update" ref="ruleUpdate"></rule-update>
      </el-row>
    </div>
    <div>
      <rule-info ref="ruleInfo"></rule-info>
    </div>
  </div>

</template>

<script>
import ruleAdd from './add'
import ruleUpdate from './update'
import ruleInfo from './ruleInfo'

export default {
  name: "index",
  components: {
    ruleAdd,
    ruleUpdate,
    ruleInfo,
  },
  data() {
    return {
      clearingRules: [
        {
          id: 1,
          channel: "交易渠道1",
          type: "交易类型1",
          from: 1,
          to: 2,
          subject: 1,
          percent: 10,
          status: 0,
          create_by: null,
          create_time: null,
          update_by: null,
          update_time: null,
          remark: null
        }
      ],
    }
  },

  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    ruleAdd() {
      this.$refs.ruleAdd.setVisible(true);
    },
    ruleChange() {
      let form = this.$refs.ruleInfo.ruleChange();
      if (form === "") {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "只能修改一条。");
        return;
      }
      this.$refs.ruleUpdate.setRuleInfo(form);
      this.$refs.ruleUpdate.setVisible(true);
    },
    update() {
      this.$refs.ruleInfo.update();
    },

  }
}
</script>

<style scoped lang="less">
.el-row {
  padding-top: 0.8vw;
  padding-left: 20px;
  margin-bottom: 0.5vw;

  &:last-child {
    margin-bottom: 0;
  }
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purple {
  background: rgb(245, 245, 245);
}

.search-item {
  //border: 1px red solid;
  width: 26vw;
  height: 3vw;
}

.search-item-button {
  //border: 1px red solid;
  width: 6.5vw;
  height: 3vw;
  margin-right: 2vw;
}

.search-item-select {
  margin-left: 13px;
  width: 18vw;
  height: 3vw;
}

.search-item-input {
  margin-left: 13px;
  width: 18vw;
  height: 3vw;
}

</style>