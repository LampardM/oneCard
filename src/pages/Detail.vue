<template>
  <div>
    <ve-line 
      :data="chartData" 
      :extend="chartExtend" 
      height="10rem">
    </ve-line>
  </div>
</template>

<script>

import VeLine from 'v-charts/lib/line.common';
import oneCardStorage from '../utils/storage.js';

export default {
  name: 'detail',
  components: { VeLine },
  data () {
    return {
      chartExtend: {
        legend: {
          show: false
        },
        grid: {
          bottom: 0
        },
        yAxis: {
          axisLabel: {
            show: false
          }
        },
        series: {
          smooth: false,
          itemStyle: {
            color: 'red'
          },
          label: {
            show: true,
            color: '#000',
            formatter: function(params) {
              return '￥' + params.data[1]
            }
          }
        }
      },
      chartData: {
        columns: ['date', '￥'],
        rows: [
          { 'date': '01-01', '￥': 1231 },
          { 'date': '01-02', '￥': 1223 },
          { 'date': '01-03', '￥': 2123 },
          { 'date': '01-04', '￥': 4123 },
          { 'date': '01-05', '￥': 3123 },
          { 'date': '01-06', '￥': 123 },
          { 'date': '01-07', '￥': 1231 },
          { 'date': '01-08', '￥': 1223 },
          { 'date': '01-09', '￥': 2123 },
          { 'date': '01-10', '￥': 4123 }
        ]
      }
    }
  },
  mounted() {},
}
</script>