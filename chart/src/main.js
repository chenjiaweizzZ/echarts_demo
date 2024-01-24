import { createApp } from 'vue'
import App from './App.vue'
import './style.css'


// Vue.prototype.$echarts = echarts

const app = createApp(App)

// app.config.globalProperties.$echarts = echarts;

app.mount('#app')
