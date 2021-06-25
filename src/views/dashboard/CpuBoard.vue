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
      data: 0
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
      this.updateData()
      var option = {
        series: [
          {
            type: 'gauge',
            axisLine: {
              lineStyle: {
                width: 15,
                color: [
                  [0.3, '#67e0e3'],
                  [0.7, '#37a2da'],
                  [1, '#fd666d']
                ]
              }
            },
            pointer: {
              itemStyle: {
                color: 'auto'
              }
            },
            axisTick: {
              distance: -30,
              length: 8,
              lineStyle: {
                color: '#fff',
                width: 2
              }
            },
            splitLine: {
              distance: -30,
              length: 30,
              lineStyle: {
                color: '#fff',
                width: 4
              }
            },
            axisLabel: {
              color: 'auto',
              distance: 20,
              fontSize: 15
            },
            detail: {
              valueAnimation: true,
              formatter: (value, index) => {
                let warn = 'unknown'
                if (value < 30) warn = '低利用率'
                else if (value < 70) warn = '中利用率'
                else if (value < 100) warn = '高利用率'
                else warn = '负载过高'
                return warn
              },
              color: 'auto',
              fontSize: 15
            },
            data: [
              {
                value: this.data
              }
            ]
          }
        ]
      }

      chart.setOption(option)

      setInterval(() => {
        this.updateData()
        chart.setOption({
          series: [
            {
              name: '成交',
              data: this.data
            }
          ]
        })
      }, 1000)

      return chart
    },
    updateData () {
      // get data from remote
      let cpuload = Math.random() * 100
      this.data = cpuload
    }
  }
}
</script>

<style></style>
