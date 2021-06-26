<template>
  <div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import * as echarts from 'echarts'
export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '75%'
    },
    height: {
      type: String,
      default: '300px'
    }
  },
  data () {
    return {
      // 下面这行只是为了给个类型提示
      // chart: echarts.init(this.$el)
      chart: null,
      data: new Array(60),
      id: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.chart = this.init()
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
    clearInterval(this.id)
  },
  methods: {
    init () {
      var chart = echarts.init(this.$el, 'macarons')
      // init chart
      var option = {
        animation: false,
        xAxis: {
          type: 'category',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          axisLabel: {
            formatter: '{value}%'
          }
        },
        series: [
          {
            symbol: 'none',
            data: [0],
            type: 'line',
            areaStyle: {}
          }
        ]
      }

      chart.setOption(option)

      this.id = setInterval(() => {
        let shift = this.data.length >= 60
        this.addData(shift)
        chart.setOption({
          series: [{
            data: this.data
          }]
        })
      }, 1000)

      return chart
    },
    addData (shift) {
      // get memory data from remote server
      let memory = Math.random() * 100
      this.data.push(memory)

      if (shift) {
        this.data.shift()
      }
    }
  }
}
</script>

<style></style>
