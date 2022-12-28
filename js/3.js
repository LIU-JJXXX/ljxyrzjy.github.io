
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