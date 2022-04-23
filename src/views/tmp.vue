<template>
  <div>
    <div>tmp</div>
    <div class="input">
      <div v-for="(item,index) in input_information" :key="index">
        <div>
          <el-input class="input-name"
                    placeholder="请输入收益方名称"
                    v-model="item.input_name"
                    maxlength="20"
                    show-word-limit>
          </el-input>
          <el-input class="input-percent"
                    placeholder="请输入收益方收益比例(小数)"
                    v-model="item.input_percent"
                    show-word-limit>
          </el-input>
          <button type="button" @click="downObj(item)">删除</button>
          <button v-if="index===input_information.length-1" type="button" @click="addObj()">添加</button>
        </div>
      </div>

      <button type="button" @click="clac()">开始计算</button>
    </div>

    <div class="pie" style="width:40%">
      <canvas id="pieChart"></canvas>
    </div>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "tmp",
  data() {
    return {
      input_information: [
        {input_name: '', input_percent: ''},
      ],
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
      pieChart: '',
    }
  },

  methods: {
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
        let tmp = parseFloat(this.input_information[i].input_percent);
        sum += tmp;
        if (tmp < 0 || tmp > 1) error_type = 2;
        if (this.input_information[i].input_name===null) error_type = 3;
      }
      if (this.input_information.length === 1) error_type = 4;
      if (this.abs(sum - 1) > this.epx) error_type = 5;
      if (error_type !== 0) {
        alert("error" + error_type);
        return;
      }
      this.drawPie("pieChart");
    },

    drawPie(id) {
      let labels_ = [], data_ = [], backgroundColor_ = [];
      for (let i = 0; i < this.input_information.length; i++) {
        labels_.push(this.input_information[i].input_name);
        data_.push(this.input_information[i].input_percent)
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


<style scoped>
.input-name {
  width: 50vw;
}

.input-percent {
  width: 20vw;
}

.pie {
  margin: 0 auto;
  text-align: center
}

#pieChart {
  /*border: solid red 1px;*/
  width: 30vw;
  height: 50vh;
}
</style>