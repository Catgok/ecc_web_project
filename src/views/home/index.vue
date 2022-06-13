<template>
  <div>
    <el-row class="home" :gutter="10">
      <el-col :span="2" style="margin: 3vw 0 0 22vw">

        <el-card class="box-card">
          <div class="item">Finished：</div>
          <div class="item">feedback</div>
          <div class="item">business</div>
          <div class="item">clearing/rulerManage</div>
          <div class="item">Todo:</div>
          <div class="item">clearing/process</div>
        </el-card>
      </el-col>

    </el-row>

  </div>
</template>

<script>
export default {
  name: "index",
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
  color: #0b25b4;
  display: flex;
  top: 0;
  height: 50px;
  width: 200px;
}

.box-card {
  height: 350px;
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