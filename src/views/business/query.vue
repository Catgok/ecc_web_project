<template>
  <div>
    <div class="grid-content bg-purple" style="height: 13vw">
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
          <el-select class="search-item-select" v-model="queryList.status" placeholder="请选择">
            <el-option v-for="item in addressList" :key="item.address" :label="item.address"
                       :value="item.address"></el-option>
          </el-select>
        </div>
      </el-row>

      <el-row style="display: flex;flex-direction: row">
        <div class="search-item">商户层级
          <el-select class="search-item-select" v-model="queryList.status" placeholder="请选择">
            <el-option v-for="item in levelList" :key="item.level" :label="item.level" :value="item.level"></el-option>
          </el-select>
        </div>
        <el-button class="search-item-button" @click="search" type="primary" icon="el-icon-search">搜索</el-button>
        <el-button class="search-item-button" @click="reset" type="primary" icon="el-icon-refresh">重置</el-button>
      </el-row>

      <el-row style="display: flex;flex-direction: row">
        <el-button @click="businessAdd" class="search-item-button" type="primary" plain>新增</el-button>
        <el-button @click="businessChange" class="search-item-button" type="primary" plain style="color: lawngreen">修改
        </el-button>
        <el-button @click="businessCancellation" class=" search-item-button" type="primary" plain style="color: red">注销
        </el-button>
      </el-row>

    </div>
    <div>
      <div>
        <el-table ref="singleTable" :data="businessInfoList" highlight-current-row @current-change="handleCurrentChange"
                  style="width: 100%">
          <el-table-column type="index" width="50"></el-table-column>
          <el-table-column property="name" label="商户名称" width="120"></el-table-column>
          <el-table-column property="status" label="商户状态" width="120"></el-table-column>
          <el-table-column property="type" label="商户类型" width="120"></el-table-column>
          <el-table-column property="address" label="地址" width="220"></el-table-column>
          <el-table-column property="phone" label="联系电话"></el-table-column>
        </el-table>
      </div>
    </div>
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

      businessInfoList: [
        {
          name: '玉龙山景区',
          status: '正常',
          type: '有限责任公司',
          address: '云南省丽江市龙纳西族自治县',
          phone: '13529219181',
        },
        {
          name: '古城驿站区',
          status: '注销',
          type: '个体户',
          address: '云南省丽江市龙纳西族自治县',
          phone: '13529219181',
        },
      ],
      currentRow: null,
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
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      this.currentRow = val;
    },
    businessAdd() {
      this.$router.push('/business/add');
    },
    businessChange() {
      console.log(this.currentRow);
    },
    businessCancellation() {
      console.log(this.currentRow);
      this.currentRow.status = '注销'
    }
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