<template>
  <div class="global-aside" v-on="start">
    <el-menu class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
             active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <h3>{{ isCollapse ? 'ECC' : 'ECC平台' }}</h3>

      <el-menu-item style="padding: 0;" v-for="item in noChildren" :index="item.path" :key="item.path"
                    @click="clickMenu(item)">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>

      <el-submenu style="padding: 0" v-for="item in hasChildren" :index="item.path" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>

        <el-menu-item-group style="padding: 0" v-for="subItem in item.children" :index="subItem.path"
                            :key="subItem.path">
          <el-menu-item style="padding: 0; min-width: 180px" :index=subItem.path @click="clickMenu(subItem)">
            {{ subItem.label }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-menu-item style="padding: 0;" index="4" @click="clickMenu({name:'feedback'})">
        <i class="el-icon-message"></i>
        <span slot="title">使用反馈</span>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<style scoped>
.el-menu-vertical-demo {
  width: 65px;
  height: 100vh;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 185px;
  height: 100vh;

}

.global-aside {
  width: auto;
  height: auto;
}

el-menu {
  height: 100vh;
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
          name: 'Home',
          label: '首页',
          icon: 's-home',
          url: '/home',
        },
        {
          path: '/business/index',
          name: 'business',
          label: '商户管理',
          icon: 'user-solid',
          url: '/business/index',
        },
        {
          path: '/account/index',
          name: 'account',
          label: '账户管理',
          icon: 'user-solid',
          url: '/account/index',
        },
        // {
        //   path: '/subject/index',
        //   name: 'subject',
        //   label: '科目管理',
        //   icon: 'user-solid',
        //   url: '/subject/index',
        // },
        {
          path: '/clearing',
          name: 'clearingRuleManage',
          label: '清分管理',
          icon: 's-tools',
          url: '/clearing',
          children: [
            {
              path: '/clearing/rule/index',
              name: 'clearingRule',
              label: '清分规则管理',
              icon: 's-tools',
              url: '/clearing/rule/index',
            },
            {
              path: '/clearing/process',
              name: 'clearingProcess',
              label: '清分处理',
              icon: 'takeaway-box',
              url: '/clearing/process',
            },
          ]
        },
      ],
      hasOpen: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name
      })
    },
  },
  computed: {
    start() {
      // start
      this.clickMenu({name: 'Home'});
    },
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  },

}
</script>