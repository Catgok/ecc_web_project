<template>
  <div v-on="start">
    <div class="grid-content bg-purple" style="height: 14vw;font-size: 1.2vw;">
      <el-row style="display: flex;flex-direction: row">
        <div class="search-item">商户名称
          <el-input class="search-item-input" v-model="queryList.name" placeholder="请输入商户名称"></el-input>
        </div>

        <div class="search-item">商户状态
          <el-select class="search-item-select" v-model="queryList.status" placeholder="请选择">
            <el-option v-for="item in statusList" :key="item.status" :label="item.status"
                       :value="item.status"></el-option>
          </el-select>
        </div>

        <div class="search-item">归属区域
          <el-select class="search-item-select" v-model="queryList.region" placeholder="请选择">
            <el-option v-for="item in regionList" :key="item.region" :label="item.region"
                       :value="item.region"></el-option>
          </el-select>
        </div>
      </el-row>

      <el-row style="display: flex;flex-direction: row">
        <div class="search-item">商户层级
          <el-select class="search-item-select" v-model="queryList.level" placeholder="请选择">
            <el-option v-for="item in levelList" :key="item.level" :label="item.level" :value="item.level"></el-option>
          </el-select>
        </div>
        <el-button class="search-item-button" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="search-item-button" @click="reset" type="primary" icon="el-icon-refresh">重置</el-button>
      </el-row>

      <el-row style="display: flex;flex-direction: row">
        <el-button @click="businessAdd" class="search-item-button" type="primary" plain>新增</el-button>
        <business-add ref="businessAdd"></business-add>
        <el-button @click="businessChange" class="search-item-button" type="primary" plain style="color: lawngreen">修改
        </el-button>
        <business-update ref="businessUpdate"></business-update>
        <el-button @click="businessCancellation" class=" search-item-button" type="primary" plain style="color: red">注销
        </el-button>
      </el-row>

    </div>
    <div>
      <sub-business-info ref="subBusinessInfo"></sub-business-info>
    </div>
  </div>
</template>

<script>
import BusinessAdd from './add'
import SubBusinessInfo from "./subBusinessInfo";
import BusinessUpdate from "./update";

export default {
  name: "index",
  components: {
    SubBusinessInfo,
    BusinessAdd,
    BusinessUpdate,
  },
  data() {
    return {
      regionList: [],
      statusList: [
        {status: "正常"},
        {status: "注销"},
      ],
      levelList: [
        {level: "第一层"},
        {level: "第二层"},
        {level: "第三层"},
      ],
      queryList: {
        name: "",
        region: "",
        status: "",
        level: "",
      },
    }
  },
  methods: {
    copy(obj) {
      let tmp = JSON.stringify(obj);
      return JSON.parse(tmp);
    },
    search() {
      this.$refs.subBusinessInfo.businessQuery(this.copy(this.queryList));
    },
    reset() {
      for (let item in this.queryList) this.queryList[item] = "";
      this.$refs.subBusinessInfo.businessInfoList = this.$store.state.business.businessInfoList;
    },

    businessAdd() {
      this.$refs.businessAdd.setVisible(true);
    },
    businessChange() {
      let form = this.$refs.subBusinessInfo.businessChange();
      if (form === "") {
        this.$store.commit("changeGlobalTipDialogVisible");
        this.$store.commit("setGlobalTip", "只能修改一条。");
        return;
      }
      this.$refs.businessUpdate.setBusinessInfo(form);
      this.$refs.businessUpdate.setVisible(true);
    },
    businessCancellation() {
      this.$refs.subBusinessInfo.businessCancellation();
    }
  },
  computed: {
    start() {
      let tmp = this.$store.state.business.businessInfoList;
      for (let i = 0; i < tmp.length; i++) {
        let flag = true;
        for (let j = 0; j < this.regionList.length; j++)
          if (this.regionList[j]["region"] === tmp[i]["region"]) flag = false;
        if (flag) this.regionList.push({"region": tmp[i]["region"]});
      }
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