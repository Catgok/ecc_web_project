<template>
  <div>
    <div v-on="ff()">{{ info }}</div>
    <el-table :data="tableData" :show-header=false style="width: 100%">
      <el-table-column prop="date" width="180"></el-table-column>
      <el-table-column prop="name" width="180"></el-table-column>
      <el-table-column prop="address"></el-table-column>
    </el-table>
    <!--    <el-button type="primary" icon="el-icon-circle-plus-outline" circle size="large"></el-button>-->
    <!--    <div style="vertical-align: middle ;padding-left: 100px;padding-top: 100px">-->
    <!--      <el-button type="primary" style="padding: 10px" icon="el-icon-search">搜索</el-button>-->
    <!--      <el-button type="primary" style="padding: 10px">立即创建</el-button>-->
    <!--      <el-button type="primary" icon="el-icon-circle-plus-outline" circle size="large">1-->
    <!--      </el-button>-->
    <!--      <el-button type="primary" icon="el-icon-circle-plus-outline" circle size="mini">2-->
    <!--      </el-button>-->
    <!--      <el-button circle style="padding: 0" class="el-icon-circle-plus-outline"></el-button>-->
    <!--      <el-icon class="el-icon-circle-plus" large></el-icon>-->
    <!--      12-->
    <!--      <i class="fa fa-plus fa-2x" style="color: blue"></i> fa-5x-->
    <!--      12-->
  </div>
  <!--    <div>清分计算</div>-->
  <!--    <div class="input">-->
  <!--      <div v-for="(item,index) in input_information" :key="index">-->
  <!--        <div>-->
  <!--          <el-input class="input-name"-->
  <!--                    placeholder="收益方名称"-->
  <!--                    v-model="item.input_name"-->
  <!--                    maxlength="20"-->
  <!--                    show-word-limit>-->
  <!--          </el-input>-->
  <!--          <el-input class="input-percent"-->
  <!--                    placeholder="收益比例"-->
  <!--                    v-model="item.input_percent"-->
  <!--                    show-word-limit>-->
  <!--            &lt;!&ndash;             &ndash;&gt;-->
  <!--            <template slot="append">%</template>-->
  <!--          </el-input>-->

  <!--          <button type="button" @click="downObj(item)">删除</button>-->
  <!--          <button v-if="index===input_information.length-1" type="button" @click="addObj()">添加</button>-->
  <!--        </div>-->
  <!--      </div>-->

  <!--      <button type="button" @click="clac()">开始计算</button>-->
  <!--    </div>-->

  <!--    <div class="pie">-->
  <!--      <canvas id="pieChart"></canvas>-->
  <!--    </div>-->

</template>

<script>
import axios from "axios";

export default {
  name: "tmp",
  data() {
    return {
      input_information: [
        {
          input_name: '',
          input_percent: ''
        },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      color_lists: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(16, 195, 195,0.5)',
      ],
      epx: 1e-3,
      info: '',
      pieChart: '',
    }
  },

  methods: {
    //请求跨域问题 https://blog.csdn.net/qq_43647359/article/details/123041889
    ff() {
      this.$http.jsonp('http://www.baidu.com').then(
          (res) => {
            this.info = res;
          }
      )
    },
    addObj: function () {
      this.input_information.push({});
    },
    downObj: function (item) {
      if (this.input_information.length > 1) {
        let indexOf = this.input_information.indexOf(item);
        this.input_information.splice(indexOf, 1);
      } else {
        alert("必须保留一个");
      }
    },
    clac() {
      let sum = 0, error_type = 0;

      for (let i = 0; i < this.input_information.length; i++) {
        let tmp = -1;
        tmp = parseFloat(this.input_information[i].input_percent) / 100;
        sum += tmp;
        if (tmp <= 0 || tmp > 1) error_type = 2;
        if (this.input_information[i].input_name === "" || this.input_information[i].input_name.length === 0) error_type = 3;
      }
      if (this.input_information.length === 1) error_type = 4;
      if (this.abs(sum - 1) > this.epx) error_type = 5;
      if (error_type !== 0) {
        if (error_type === 1) alert("收益比例不合法")
        if (error_type === 2) alert("收益比例不合法")
        if (error_type === 3) alert("收益方名称不能为空")
        if (error_type === 4) alert("收益方个数至少为2个")
        if (error_type === 5) alert("收益比例总和不等于100%")
        // alert("error" + error_type);
        return;
      }
      this.drawPie("pieChart");
    },

    drawPie(id) {
      this.ctx = "";
      let labels_ = [], data_ = [], backgroundColor_ = [];
      for (let i = 0; i < this.input_information.length; i++) {
        labels_.push(this.input_information[i].input_name);
        data_.push(parseFloat(this.input_information[i].input_percent) / 100);
        backgroundColor_.push(this.color_lists[i]);
      }
      this.ctx = document.getElementById(id).getContext('2d');
      this.pieChart = new Chart(this.ctx, {
        type: 'pie',
        data: {
          labels: labels_,
          datasets: [{
            label: '# of Votes',
            data: data_,
            backgroundColor: backgroundColor_
          }]
        },
        options: {
          responsive: true
        }
      });
    },

    abs(x) {
      if (x > 0) return x;
      return -x;
    },

  }

}
</script>


<style>
.input-name {
  width: 33vw;
}

.input-percent {
  width: 25vw;
}

.pie {
  width: 85vw;
  /*height: 50vh;*/
  margin: auto;
  text-align: center;
  /*border: solid red 1px;*/
}

#pieChart {
  margin-top: 3vh;
  /*border: solid red 1px;*/
  text-align: center;
  /*width: 30vw;*/
  /*height: 40vh;*/
}

/*button {*/
/*  width: auto;*/
/*  height: 5vh;*/
/*  background-color: rgba(13, 255, 221, 0.45);*/
/*  border-radius: 22%;*/
/*  border: rgba(13, 255, 221, 0.45);*/
/*  margin-left: 1px;*/
/*  margin-right: 1px;*/
/*}*/

.el-input-group__append {
  padding: 2px;
}
</style>