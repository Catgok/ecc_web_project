<template>
  <div class="12">
    <el-row class="home" :gutter="20">
      <el-col :span="3" style="margin-top: 20px">

        <el-card class="box-card">
          <div class="item">Finished：</div>
          <div class="item">feedback</div>
          <div class="item">business/add</div>
          <div class="item">Todo:</div>
          <div class="item">business/delete</div>
          <div class="item">business/query:</div>
          <div class="item">business/update:</div>
          <div class="item">login</div>
          <div class="item">clearing/process</div>
          <div class="item">clearing/rulerManage</div>
        </el-card>
      </el-col>

    </el-row>

  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "home",
  components: {},

  data() {
    return {
      x: 'a',
    };
  }
}
</script>

<style scoped>

.item {
  color: blueviolet;
  display: flex;
  top: 0;
  height: 50px;
  width: 200px;
}

.box-card {
  height: 500px;
  width: 40vw;
  padding: 0;
}

.card-1 {
  height: 500px;
  width: 40vw;
}

.top11 {
  height: 0;

}
</style>