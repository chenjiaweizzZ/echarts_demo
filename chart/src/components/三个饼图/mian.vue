<template>
    <div class="main">
        <div class="tab">tab</div>
        <div class="charts">
            <div class="chart-box"><chart-left></chart-left></div>
            <div class="chart-box"><chart-middle></chart-middle></div>
            <div class="chart-box"><chart-right></chart-right></div>
        </div>
    </div>
</template>
  
<script setup>
import chartLeft from './components/chartLeft.vue';
import chartMiddle from './components/chartMiddle.vue';
import chartRight from './components/chartRight.vue';

</script>
  
<style scoped>
.main {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.tab {
    height: 100px;
    background-color:cyan;
}
.charts {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: space-between;
}
.chart-box {
    width: 100%;
    /* margin: 30px; */
}
</style>