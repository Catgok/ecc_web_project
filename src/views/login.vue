<template>
  <div v-on="start" style="margin: 34vh 37vw 30vh 37vw">
    <global-tip-dialog></global-tip-dialog>
    <div style="margin: 1vw auto; text-align: center">欢迎使用ECC清分平台</div>
    <el-input v-model="business.name" placeholder="请输入用户名"></el-input>
    <br/> <br/>
    <el-input v-model="business.pass" placeholder="请输入密码" show-password></el-input>

    <div style="margin: 1vw auto; text-align: center">
      <el-button @click="login" type="primary" round>登录</el-button>
      <el-button @click="register" round>注册</el-button>
    </div>
  </div>
</template>

<script>
import GlobalTipDialog from "../components/globalTipDialog";

export default {
  name: "login",
  components: {
    GlobalTipDialog,
  },
  data() {
    return {
      business: {
        name: '商户名称1',
        pass: '123',
      },
    }
  },
  methods: {
    login() {
      this.$http.post("http://localhost:8010/example/api/business/login", this.business).then((res) => {
        console.log(res);
        if (res.data !== "") {
          this.$store.state.tab.businessId = res.data.id;
          this.$http.put("http://localhost:8010/example/api/business/get/" + res.data.id).then((resu) => {
            let businessList = resu.data;
            for (let i = 0; i < businessList.length; i++) this.$store.state.business.businessInfoList.push(businessList[i]);
          })
          this.$http.put("http://localhost:8010/example/api/account/get/by/" + res.data.id).then((resu) => {
            let accountList = resu.data;
            for (let i = 0; i < accountList.length; i++) this.$store.state.business.accountList.push(accountList[i]);
          })
          this.$http.put("http://localhost:8010/example/api/rule/get/by/" + res.data.id).then((resu) => {
            let ruleList = resu.data;
            for (let i = 0; i < ruleList.length; i++) this.$store.state.rule.ruleList.push(ruleList[i]);
          })
          this.$http.put("http://localhost:8010/example/api/result/get/by/business/" + res.data.id).then((resu) => {
            let resultList = resu.data;
            for (let i = 0; i < resultList.length; i++) this.$store.state.result.resultList.push(resultList[i]);
          })
          this.$router.push({name: 'Main', path: '/main'});
        } else {
          this.$store.commit("changeGlobalTipDialogVisible");
          this.$store.commit("setGlobalTip", "用户名或密码错误。");
        }
      })
    },
    register() {

    }
  },
  computed: {
    start() {
      // this.login();
    }
  }
}
</script>

<style scoped>

</style>