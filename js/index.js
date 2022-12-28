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

// 第三部分表格
var shirenData = document.getElementsByClassName('shirenData');
shirenData[0].style.display = "block"
// 李白
var libai = echarts.init(document.getElementById('libai'), 'vintage');

// 指定图表的配置项和数据
var optionlibai = {
  title: {
    text: '唐朝诗人诗中出现的食物占比',
    left: 'center',
    top: '10%',
    textStyle: {
      fontSize: 26,
      color: "rgba(230, 106, 93, 1)",
      fontStyle: "normal"
    },
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: '30%',
    left: "10%",
    selectedMode: true,
    icon: "circle"
  },
  series: [{
    name: '该字出现次数',
    type: 'pie',
    radius: '70%',
    legendHoverLink: true,
    legendHoverLink: true,
    roseType: "area",
    fontWeight: "bold",
    top: '20%',
    data: [{
        value: 152,
        name: '酒'
      },
      {
        value: 46,
        name: '鱼'
      },
      {
        value: 46,
        name: '鸡'
      },
      {
        value: 18,
        name: '面'
      },
      {
        value: 15,
        name: '羊'
      }
    ],
    emphasis: {
      itemStyle: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]

};

// 使用刚指定的配置项和数据显示图表。
libai.setOption(optionlibai);
window.onresize = function () {
  libai.resize();
}

// 第四部分表格
var myfourChart = echarts.init(document.getElementById('fourmain'), 'vintage');
const formatUtil = echarts.format;
var optionfour = {
  title: {
    left: 'center',
    text: '唐朝建筑在唐诗中出现次数',
    top: "3%",
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
    formatter: function (info) {
      if (info.data.name == "亭 1396") {
        return [
          '<img width="300" height="200" src="../image/fourPart/亭.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "台 2809") {
        return [
          '<img width="300" height="200" src="../image/fourPart/台.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "楼 3254") {
        return [
          '<img width="300" height="200" src="../image/fourPart/楼.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "阁 1571") {
        return [
          '<img width="300" height="200" src="../image/fourPart/阁.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "殿 1142") {
        return [
          '<img width="300" height="200" src="../image/fourPart/殿.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "寺 1449") {
        return [
          '<img width="300" height="200" src="../image/fourPart/寺.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "观 898") {
        return [
          '<img width="300" height="200" src="../image/fourPart/观.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "池 2337") {
        return [
          '<img width="300" height="200" src="../image/fourPart/池.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "市 563") {
        return [
          '<img width="300" height="200" src="../image/fourPart/市.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "宫 2342") {
        return [
          '<img width="300" height="200" src="../image/fourPart/宫.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "阙 1135") {
        return [
          '<img width="300" height="200" src="../image/fourPart/阙.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "坊 110") {
        return [
          '<img width="300" height="200" src="../image/fourPart/坊.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "府 881") {
        return [
          '<img width="300" height="200" src="../image/fourPart/府.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "城 4641") {
        return [
          '<img width="300" height="200" src="../image/fourPart/城.png">' +
          '</img>',
        ].join('');
      } else if (info.data.name == "轩 1072") {
        return [
          '<img width="300" height="200" src="../image/fourPart/轩.png">' +
          '</img>',
        ].join('');
      }
    }
  },

  series: [{
    type: 'treemap',
    data: [{
        name: '1',
        value: 1396,
        children: [{
            name: '亭 1396',
            value: 1396
          },

        ]
      },
      {
        name: '2',
        value: 2809,
        children: [{
            name: '台 2809',
            value: 2809
          },

        ]
      },
      {
        name: '3',
        value: 3254,
        children: [{
            name: '楼 3254',
            value: 3254
          },

        ]
      },
      {
        name: '4',
        value: 1571,
        children: [{
            name: '阁 1571',
            value: 1571
          },

        ]
      },
      {
        name: '3',
        value: 3254,
        children: [{
            name: '轩 1072',
            value: 3254
          },

        ]
      },
      {
        name: '6',
        value: 1142,
        children: [{
            name: '殿 1142',
            value: 1142
          },

        ]
      },
      {
        name: '7',
        value: 1449,
        children: [{
            name: '寺 1449',
            value: 1449
          },

        ]
      },
      {
        name: '8',
        value: 898,
        children: [{
            name: '观 898',
            value: 898
          },

        ]
      },
      {
        name: '9',
        value: 2337,
        children: [{
            name: '池 2337',
            value: 2337
          },

        ]
      },
      {
        name: '10',
        value: 563,
        children: [{
            name: '市 563',
            value: 563
          },

        ]
      },
      {
        name: '11',
        value: 2342,
        children: [{
            name: '宫 2342',
            value: 2342
          },

        ]
      },
      {
        name: '12',
        value: 1135,
        children: [{
            name: '阙 1135',
            value: 1135
          },

        ]
      },
      {
        name: '13',
        value: 110,
        children: [{
            name: '坊 110',
            value: 110
          },

        ]
      },
      {
        name: '14',
        value: 881,
        children: [{
            name: '府 881',
            value: 881
          },

        ]
      },
      {
        name: '15',
        value: 4641,
        children: [{
            name: '城 4641',
            value: 4641
          },

        ]
      }
    ]
  }]
};

myfourChart.setOption(optionfour);
window.onresize = function () {
  myfourChart.resize();
}

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

var btn = document.getElementsByTagName('button');
btn[0].style.backgroundColor = "#e8776a"

for (var i = 0; i < btn.length; i++) {
  //这里使用的立即执行函数来实现的
  (function (n) {
    btn[n].onclick = function () {
      //  同类的class属性为null
      for (var j = 0; j < btn.length; j++) {
        btn[j].style.backgroundColor = '';
        btn[j].style.color = '#000';
        shirenData[j].style.display = "none";
      }
      this.style.backgroundColor = '#e8776a';
      this.style.color = '#fff';
      shirenData[n].style.display = "block";
      if (n == 1) {
        // 杜甫
        var dufu = echarts.init(document.getElementById('dufu'), 'vintage');

        // 指定图表的配置项和数据
        var optiondf = {
          title: {
            text: '唐朝诗人诗中出现的食物占比',
            left: 'center',
            top: '10%',
            textStyle: {
              fontSize: 26,
              color: "rgba(230, 106, 93, 1)",
              fontStyle: "normal"
            },
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            top: '30%',
            left: "10%",
            selectedMode: true,
            icon: "circle"
          },
          series: [{
            name: '该字出现次数',
            type: 'pie',
            radius: '70%',
            legendHoverLink: true,
            legendHoverLink: true,
            roseType: "area",
            fontWeight: "bold",
            top: '20%',
            data: [{
                value: 166,
                name: '酒'
              },
              {
                value: 102,
                name: '鱼'
              },
              {
                value: 39,
                name: '鸡'
              },
              {
                value: 60,
                name: '面'
              },
              {
                value: 15,
                name: '羊'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]

        };

        // 使用刚指定的配置项和数据显示图表。
        dufu.setOption(optiondf);
        window.onresize = function () {
          dufu.resize();
        }
      } else if (n == 2) {
        // 白居易
        var baijuyi = echarts.init(document.getElementById('baijuyi'), 'vintage');

        // 指定图表的配置项和数据
        var optionbjy = {
          title: {
            text: '唐朝诗人诗中出现的食物占比',
            left: 'center',
            top: '10%',
            textStyle: {
              fontSize: 26,
              color: "rgba(230, 106, 93, 1)",
              fontStyle: "normal"
            },
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            top: '30%',
            left: "10%",
            selectedMode: true,
            icon: "circle"
          },
          series: [{
            name: '该字出现次数',
            type: 'pie',
            radius: '70%',
            legendHoverLink: true,
            legendHoverLink: true,
            roseType: "area",
            fontWeight: "bold",
            top: '20%',
            data: [{
                value: 562,
                name: '酒'
              },
              {
                value: 135,
                name: '鱼'
              },
              {
                value: 63,
                name: '鸡'
              },
              {
                value: 133,
                name: '面'
              },
              {
                value: 19,
                name: '羊'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]

        };

        // 使用刚指定的配置项和数据显示图表。
        baijuyi.setOption(optionbjy);
        window.onresize = function () {
          baijuyi.resize();
        }
      } else if (n == 3) {
        // 李商隐
        var lishangyin = echarts.init(document.getElementById('lishangyin'), 'vintage');

        // 指定图表的配置项和数据
        var optionlsy = {
          title: {
            text: '唐朝诗人诗中出现的食物占比',
            left: 'center',
            top: '10%',
            textStyle: {
              fontSize: 26,
              color: "rgba(230, 106, 93, 1)",
              fontStyle: "normal"
            },
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            top: '30%',
            left: "10%",
            selectedMode: true,
            icon: "circle"
          },
          series: [{
            name: '该字出现次数',
            type: 'pie',
            radius: '70%',
            legendHoverLink: true,
            legendHoverLink: true,
            roseType: "area",
            fontWeight: "bold",
            top: '20%',
            data: [{
                value: 59,
                name: '酒'
              },
              {
                value: 34,
                name: '鱼'
              },
              {
                value: 25,
                name: '鸡'
              },
              {
                value: 12,
                name: '面'
              },
              {
                value: 7,
                name: '羊'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]

        };

        // 使用刚指定的配置项和数据显示图表。
        lishangyin.setOption(optionlsy);
        window.onresize = function () {
          lishangyin.resize();
        }
      } else if (n == 4) {
        // 刘禹锡
        var liuyuxi = echarts.init(document.getElementById('liuyuxi'), 'vintage');

        // 指定图表的配置项和数据
        var optionlyx = {
          title: {
            text: '唐朝诗人诗中出现的食物占比',
            left: 'center',
            top: '10%',
            textStyle: {
              fontSize: 26,
              color: "rgba(230, 106, 93, 1)",
              fontStyle: "normal"
            },
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            top: '30%',
            left: "10%",
            selectedMode: true,
            icon: "circle"
          },
          series: [{
            name: '该字出现次数',
            type: 'pie',
            radius: '70%',
            legendHoverLink: true,
            legendHoverLink: true,
            roseType: "area",
            fontWeight: "bold",
            top: '20%',
            data: [{
                value: 79,
                name: '酒'
              },
              {
                value: 28,
                name: '鱼'
              },
              {
                value: 35,
                name: '鸡'
              },
              {
                value: 21,
                name: '面'
              },
              {
                value: 9,
                name: '羊'
              }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }]

        };

        // 使用刚指定的配置项和数据显示图表。
        liuyuxi.setOption(optionlyx);
        window.onresize = function () {
          liuyuxi.resize();
        }
      }



    }
  }(i))
}