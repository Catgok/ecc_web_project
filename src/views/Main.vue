<template>
  <div class="main">
    <global-tip-dialog></global-tip-dialog>
    <el-container style="height: 100%">
      <el-aside width="auto">
        <global-aside></global-aside>
      </el-aside>
      <el-container>
        <el-header style="height: auto">
          <global-header/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import GlobalAside from '../components/globalAside'
import GlobalHeader from "../components/globalHeader";
import GlobalTipDialog from "../components/globalTipDialog";

export default {
  name: "Main",
  components: {
    GlobalAside,
    GlobalHeader,
    GlobalTipDialog
  },
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

.el-header {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main { /*todo*/
  /*background-color: #E9EEF3;*/
  /*color: #333;*/
  /*text-align: center;*/
  /*line-height: 160px;*/
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