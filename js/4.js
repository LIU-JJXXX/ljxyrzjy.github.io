
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