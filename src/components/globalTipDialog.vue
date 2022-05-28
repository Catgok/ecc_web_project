<template>
  <el-dialog title="提示" :visible.sync="tipDialogVisible" width="30%" :before-close="handleClose">
    <span>{{ this.$store.state.tab.globalTip }}</span>
  </el-dialog>
</template>
<script>
export default {
  name: "globalTipDialog",
  data() {
    return {};
  }
  ,
  methods: {
    handleClose() {
      this.$store.commit("changeGlobalTipDialogVisible");
    }
  },
  computed: {
    tipDialogVisible() {
      return this.$store.state.tab.globalTipDialogVisible;
    }
  },
}
;
</script>
