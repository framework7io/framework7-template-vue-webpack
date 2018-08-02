export default {
  data() {
    return {
      chartLegend: {
        type: 'scroll',
        orient: 'vertical',
        left: 10,
        top: 20,
        bottom: 20,
      },
      color: ['#26C6DA', '#1E88E5', '#745AF2', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
    }
  },
  methods: {
    _setPie({
              title = '',
              legend = [],
              seriesData = [],
              titleX = 'center',
              seriesName = '占比',
              titleTextStyle = {},
              chartLegend = {},
              seriesRadius = ['30%', '50%'],
              activeLegend = 3,
              color = this.color,
              seriesLabelPosition = 'outside',
              seriesLabelLine = true,
              seriesLabelLineLength = 5
            } = {}) {
      var setLegend = {};
      if (Object.keys(chartLegend).length > 0) {
        Object.assign(setLegend, chartLegend)
      } else {
        Object.assign(setLegend, this.chartLegend)
      }
      if (legend.length > activeLegend) {
        var select = {};
        legend.forEach(function (el, index) {
          if (index < activeLegend) {
            select[el] = true
          } else {
            select[el] = false
          }
        });
        Object.assign(setLegend, {selected: select})
      }
      Object.assign(setLegend, {data: legend});
      return {
        color,
        title: {
          text: title,
          subtext: legend.length > 0 ? '' : '暂无数据',
          x: titleX,
          textStyle: titleTextStyle
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: setLegend,
        series: [{
          name: seriesName,
          type: 'pie',
          label: {
            normal: {
              position: seriesLabelPosition
            }
          },
          labelLine: {
            normal: {
              show: seriesLabelLine,
              length: seriesLabelLineLength
            }
          },
          radius: seriesRadius,
          data: seriesData
        }]
      }
    },
    _setLine({
               title = '',
               titleX = 'center',
               legend = [],
               xAxisData = [],
               yAxisType = 'value',
               seriesData = [],
               smooth = true,
               titleTextStyle = {},
               color = this.color,
               yAxis = []
             } = {}) {
      var _seriesData = seriesData;
      _seriesData.forEach(function (el) {
        Object.assign(el, {
          type: 'line',
          smooth: smooth
        })
      });
      var _yAxis = null;
      if (yAxis.length > 0) {
        _yAxis = yAxis
      } else {
        _yAxis = {
          type: yAxisType
        }
      }
      return {
        color,
        title: {
          text: title,
          x: titleX,
          textStyle: titleTextStyle
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: Object.assign(this.chartLegend, {data: legend}),
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: xAxisData
        },
        yAxis: _yAxis,
        series: _seriesData
      }
    },
    _setBar({
              title = '',
              titleX = 'center',
              legend = [],
              xAxisData = [],
              yAxisType = 'value',
              seriesData = [],
              color = this.color,
              chartLegend = {},
              yAxis = []
            } = {}) {
      var _seriesData = seriesData;
      _seriesData.forEach(function (el) {
        Object.assign(el, {
          type: 'bar',
        })
      });
      var setLegend = {};
      if (Object.keys(chartLegend).length > 0) {
        Object.assign(setLegend, chartLegend)
      } else {
        Object.assign(setLegend, this.chartLegend)
      }
      Object.assign(setLegend, {data: legend});
      var _yAxis = null;
      if (yAxis.length > 0) {
        _yAxis = yAxis
      } else {
        _yAxis = {
          type: yAxisType
        }
      }
      return {
        color,
        tooltip: {
          trigger: 'axis'
        },
        title: {
          text: title,
          x: titleX
        },
        legend: setLegend,
        xAxis: {
          type: 'category',
          data: xAxisData
        },
        yAxis: _yAxis,
        series: _seriesData
      }
    }
  },
}
