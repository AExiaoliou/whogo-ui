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
      chart: null
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
  },
  methods: {
    init () {
      var chart = echarts.init(this.$el, 'macarons')
      // init chart
      var option = {
        xAxis: {
          type: 'category'
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            symbol: 'none',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
          }
        ]
      }

      chart.setOption(option)

      return chart
    }
  }
}
</script>

<style></style>
