// 第五部分表格
var myfiveChart = echarts.init(document.getElementById('fivemain'), 'vintage');
var optionfive = {
  title: {
    left: 'center',
    text: '唐朝著名诗人其作品中出现地名次数统计',
    top: "15%",
    textStyle: {
      fontSize: 26,
      color: "rgba(230, 106, 93, 1)",
      fontStyle: "normal"
    },
    subtextStyle: {
      fontSize: 20
    },
    padding: [9, 9, 9, 9]
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    left: "85%",
    top: "30%",
    orient: "vertical",
    padding: [10, 10, 10, 10],
    textStyle: {
      color: "rgba(103, 163, 170, 1)"
    },
  },
  grid: {
    top: "30%",
    right: "35%",
    left: "20%",
    width: "64%",
    height: "60%"
  },
  xAxis: {
    color: "rgba(110, 163, 164, 1)",
    fontStyle: "italic",
    type: 'category',
    data: ['李白', '杜甫', '白居易', '王维', '刘禹锡', '杜牧', '李商隐'],
    name: "诗人",
    nameLocation: "end",
    nameTextStyle: {
      color: "rgba(230, 106, 93, 1)",
      fontStyle: "oblique",
      fontWeight: "lighter",
      fontFamily: "monospace",
      fontSize: 13
    }
  },
  yAxis: {
    name: "次数",
    type: 'value',
    nameTextStyle: {
      color: "rgba(230, 106, 93, 1)",
      fontStyle: "oblique",
      fontWeight: "lighter",
      fontFamily: "monospace",
      fontSize: 13
    }
  },
  series: [{
      name: '江南',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },

      data: [5, 8, 50, 3, 1, 9, 2]
    },
    {
      name: '长安',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [28, 27, 48, 7, 8, 4, 2]
    },
    {
      name: '洛阳',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [22, 13, 48, 11, 1, 3, 3]
    },
    {
      name: '长沙',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [11, 15, 8, 2, 0, 1, 1]
    },
    {
      name: '江城',
      type: 'bar',
      stack: 'total',
      label: {
        show: true
      },
      emphasis: {
        focus: 'series'
      },
      data: [5, 13, 11, 1, 0, 5, 0]
    }
  ]
};

myfiveChart.setOption(optionfive);
window.onresize = function () {
  myfiveChart.resize();
}