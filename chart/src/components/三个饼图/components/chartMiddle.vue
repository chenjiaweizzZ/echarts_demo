<template>
    <div class="chart-left">
        <div class="chart" id="chartRef2"></div>
    </div>
</template>
  
<script setup>
import { onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts'

onMounted(() => {
  draw()
})

const draw = () => {
  const chartRef = document.getElementById('chartRef2');
  const myChart = echarts.init(chartRef);
  let drawConfig = reactive({
    data: [
          { value: 1048, name: '100分' },
          { value: 735, name: '90-99分' },
          { value: 580, name: '80-89分' },
          { value: 484, name: '70-79分' },
          { value: 300, name: '60-69分' },
          { value: 300, name: '60分以下' }
        ]
  })
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '10%',
      left: 'center'
    },
    series: [
      {
        name: '满意度',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
        show: true,
        formatter(param) {
          // correct the percentage
          return param.name + ' (' + param.value * 2 + '%)';
        }
      },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: 'bold'
          }
        },
        data: drawConfig. data
      }
    ]
  };
  option && myChart.setOption(option);
}
</script>
  
<style scoped>
.chart-left {
    width: 100%;
    height: 100%;
}
.chart {
    width: 100%;
    height: 100%;
}
</style>