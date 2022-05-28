<template>
  <header>
    <div class="l-content">
      <el-button @click="handleMenu()" plain icon="el-icon-menu" size="mini"></el-button>
      <h3 style="color: #000">首页</h3><!--todo-->
    </div>

    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <div class="user">
           用户名
          </div>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      a: '1',
    }
  },
  methods: {
    handleMenu() {
      this.$store.commit('collapseMenu')
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.l-content {
  display: flex;
  align-items: center;
}

.el-button {
  margin-right: 20px;
}

.user {
  width: auto;
  height: 40px;

}
</style>