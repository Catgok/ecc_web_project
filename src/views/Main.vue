<template>
  <div class="main">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <global-aside></global-aside>
      </el-aside>
      <el-container>
        <el-header>
          <global-header/>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import globalAside from '../components/globalAside'
import globalHeader from "../components/globalHeader";

export default {
  /* eslint-disable */
  name: "Home",
  components: {
    globalAside,
    globalHeader
  }
}
</script>

<style scoped>
.main {
  height: 100vh;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
/*.el-header{*/
/*  background-color: #B3C0D1;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 60px;*/
/*}*/
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>