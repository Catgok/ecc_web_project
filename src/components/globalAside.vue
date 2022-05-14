<template>
  <div class="global-aside">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
             active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h3>ECC</h3>

      <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="clickMenu(item)">
        <i :class="'  el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu v-for="item in hasChildren" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="'  el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="subItem in item.children" :index="subItem.path" :key="subItem.path">
          <el-menu-item :index=subItem.path>{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<style>

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: auto;
  height: auto;
}

.global-aside {
  width: auto;
  height: auto;
}

el-menu {
  height: 100%;
  border: none;
}

h3 {
  color: #fff;
  text-align: center;
  line-height: 48px;
  margin: 0;
  height: 8vh;
}
</style>

<script>
export default {
  data() {
    return {
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/home',
        },
        {
          label: '商户管理',
          icon: 'user-solid',
          path: '/1212',
          children: [
            {
              path: '/business/add',
              name: 'businessAdd',
              label: '商户新增',
              icon: 'edit',
              // url: 'Home/home'
            },
            {
              path: '/business/delete',
              name: 'businessDelete',
              label: '商户注销',
              // icon:''
              // url: 'Home/home'
            },
            {
              path: '/business/update',
              name: 'businessUpdate',
              label: '商户信息修改',
              // icon:''
              // url: 'Home/home'
            },
            {
              path: '/business/query',
              name: 'businessQuery',
              label: '商户信息查询',
              // icon:''
              // url: 'Home/home'
            },
          ]
        },
        {
          path: '/34',
          name: 'clearingRuleManage',
          label: '清分规则管理',
          icon: 's-tools',
          // url: 'Home/home'
        }, {
          path: '/12',
          name: 'clearingProcess',
          label: '清分处理',
          // icon:''
          // url: 'Home/home'
        },
      ],
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name
      })
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    }
  }
}
</script>