<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple" style="height: 260px">
          <!-- todo  css -->
          <ul>
            <div>商户名称</div>
            <el-input style="width: 200px" v-model="queryList.name" placeholder="请输入商户名称"></el-input>
          </ul>

          <ul>
            <div>商户状态</div>
            <el-select v-model="queryList.status" placeholder="请选择">
              <el-option v-for="item in statusList" :key="item.status" :label="item.status"
                         :value="item.status"></el-option>
            </el-select>
          </ul>

          <ul>
            <div>归属区域</div>
            <el-select v-model="queryList.status" placeholder="请选择">
              <el-option v-for="item in addressList" :key="item.address" :label="item.address"
                         :value="item.address"></el-option>
            </el-select>
          </ul>

          <ul>
            <div>商户层级</div>
            <el-select v-model="queryList.status" placeholder="请选择">
              <el-option v-for="item in levelList" :key="item.level" :label="item.level"
                         :value="item.level"></el-option>
            </el-select>
          </ul>

          <el-button @click="search" type="primary" icon="el-icon-search">搜索</el-button>
          <el-button @click="reset" type="primary" icon="el-icon-refresh">重置</el-button>

        </div>
      </el-col>
    </el-row>


  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "query",
  data() {
    return {
      addressList: [
        {address: "add1"},
        {address: "add2"},
      ],
      statusList: [
        {status: "0"},
        {status: "1"},
      ],
      levelList: [
        {level: "0"},
        {level: "1"},
      ],
      queryList: {
        name: "",
        address: "",
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
      console.log('search');
    },
    reset() {
      console.log('reset');
    }
  }
}
</script>

<style scoped lang="less">
.el-row {
  margin-bottom: 20px;

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
</style>