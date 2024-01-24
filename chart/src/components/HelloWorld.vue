<template>
  <div class="chartBox" id="chartRef"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts'

onMounted(() => {
  draw()
})

const draw = () => {
  const chartRef = document.getElementById('chartRef');
  const myChart = echarts.init(chartRef);
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }
    ]
  };
  option && myChart.setOption(option);
}
</script>

<style scoped>
.chartBox {
  height: 100px;
  width: 100px;
}
</style>
