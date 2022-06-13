<template>
  <div v-on="start" style="margin: 34vh 37vw 30vh 37vw">

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
export default {
  name: "login",
  data() {
    return {
      business: {
        name: '商家名称1',
        pass: '123',
      },
    }
  },
  methods: {
    login() {
      this.$http.post("http://localhost:8010/example/api/business/login", this.business).then((res) => {
        console.log(res);
        if (res.data === "") {
          alert("用户名或密码错误")
          return;
        } else {
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
          this.$router.push({name: 'Main', path: '/main'});
        }
      })
    },
    register() {

    }
  },
  computed: {
    start() {
      this.login();
    }
  }
}
</script>

<style scoped>

</style>