// 基于准备好的dom，初始化echarts实例
var mytwoChart = echarts.init(document.getElementById('twomain'), 'vintage');

// 指定图表的配置项和数据
var optiontwo = {
  title: [{
    text: '各种服饰词在唐诗中出现的频率',
    top: 0,
    left: 'center',
    textStyle: {
      fontSize: 26,
      color: "rgba(230, 106, 93, 1)",
      fontStyle: "normal"
    },
  }],
  polar: {
    radius: [20, '80%']
  },
  angleAxis: {
    max: 650,
    startAngle: 90
  },
  radiusAxis: {
    type: 'category',
    data: ['裙', '衫', '袍', '履', '簪', '襟']
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: {
    legendMode: 'single',
    selectedOffset: 20,
    clockwise: true,
    coordinateSystem: 'polar',
    legendHoverLink: true,
    type: 'bar',
    data: [{
        value: 208,
        name: '裙'
      },
      {
        value: 230,
        name: '衫'
      },
      {
        value: 289,
        name: '袍'
      },
      {
        value: 434,
        name: '履'
      },
      {
        value: 480,
        name: '簪'
      },
      {
        value: 630,
        name: '襟'
      }
    ],
    enphasis: {
      emphasis: {
        disabled: true,
        focus: 'self'
      },
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetx: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
      }
    },

    colorBy: "data",
    label: {
      show: true,
      color: 'white',
      fontWeight: 'blod',
      position: 'middle',
      formatter: '{b}: {c}次'
    }
  }
};

// 使用刚指定的配置项和数据显示图表。
mytwoChart.setOption(optiontwo);

window.onresize = function () {
  mytwoChart.resize();
}

let imgLists = document.getElementsByClassName("main_img");
let poemLists = document.getElementsByClassName("poem");

for (var i = 0; i < imgLists.length; i++) {
  imgLists[i].setAttribute("index", i);
  imgLists[i].onmouseover = function () {
    poemLists[this.getAttribute("index")].style.display = "block";
  }
  imgLists[i].onmouseout = function () {
    poemLists[this.getAttribute("index")].style.display = "none";
  }
}