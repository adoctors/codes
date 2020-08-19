// 散点图
import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
const median = 11.0;

// 用于计算不同象限不用颜色的逻辑---start
// const xSeparate = median
// const ySeparate = 0
// const getAreaPointColor = (value = [0, 0]) => {
//   const [x, y] = value
//   switch ([x, y]) {
//     case (x >= xSeparate && y >= ySeparate):
//       return '#3583FF'
//     case (x < xSeparate && y >= ySeparate):
//       return '#33BB7B'
//     case (x < xSeparate && y < ySeparate):
//       return '#FB7962'
//     case (x >= xSeparate && y < ySeparate):
//       return '#8560C5'
//   }
// }
// data = data.map(d => ({
//   ...d,
//   itemStyle: {
//     color: getAreaPointColor(d.value)
//   }
// }))
// 用于计算不同象限不用颜色的逻辑---end

export default () => {
  const ReactEchartsRef: any = useRef(null);

  // 中心点作为markArea.data[x][1]的值，其余每个象限值为象限斜对角的点
  const midpoint = {
    yAxis: 0,
    xAxis: 11,
  };

  const option = {
    title: {
      text: '象限散点图',
    },
    toolbox: {
      // icon大小
      itemSize: 16,
      // icon间距
      itemGap: 80,
      // 工具栏据容器右侧的距离
      right: 80,
      // hover时显示title
      showTitle: false,
      feature: {
        // 区域缩放与回退
        dataZoom: {
          // title: {
          //   zoom: '区域缩放',
          //   back: '缩放还原',
          // },
          // iconStyle: {
          //   // color: 'red',
          // },
          // emphasis: {
          //   iconStyle: {
          //     textPosition: 'right',
          //     // textAlign: 'left',
          //     // textPadding: 20,
          //   },
          // },
        },
        // brush: {
        //   type: ['rect', 'polygon', 'clear'],
        // },
      },
    },
    xAxis: {
      // 取数据在该轴上的最小值作为最小刻度
      min: 'dataMin',
      // 不显示坐标轴,测试的时候可以自己打开
      // show: false,
      axisLine: {
        lineStyle: {
          color: '#ebebeb',
        },
      },
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },

      splitLine: {
        lineStyle: {
          color: '#ebebeb',
          type: 'dashed',
        },
      },
    },
    yAxis: {
      // 不显示坐标轴,测试的时候可以自己打开
      // show: false,
      // 坐标轴线
      axisLine: {
        show: false,
        lineStyle: {
          color: '#ebebeb',
        },
      },
      // 坐标轴label
      axisLabel: {
        show: false,
      },
      // 刻度值
      axisTick: {
        show: false,
      },
      // 分割线
      splitLine: {
        lineStyle: {
          color: '#ebebeb',
          type: 'dashed',
        },
      },
    },
    // 原生图形元素组件，目前问题无法关联到具体的坐标值
    graphic: {
      id: 'abc',
      elements: [
        // {
        //   type: 'rect',
        //   // 相对于容器的位置
        // //   position: [200, 200],
        //   shape: {
        //     x: 10,
        //     y: 3,
        //     width: 200,
        //     height: 50,
        //   },
        //   style: {
        //     fill: '#ffd033',
        //   },
        // },
        // {
        //   type: 'text',
        //   style: {
        //     text: 'hello world',
        //     x: 200,
        //     y: 200,
        //     fill: '#ffd033',
        //     textAligin: 'middle',
        //   },
        // },
        {
          type: 'text',
          right: 30,
          top: 11,
          style: {
            text: '缩放还原',
            fill: '#999',
            textAligin: 'right',
          },
        },
        {
          type: 'text',
          right: 130,
          top: 11,
          style: {
            text: '区域缩放',
            fill: '#999',
            textAligin: 'right',
          },
        },
      ],
    },

    series: [
      {
        label: {
          show: true,
          formatter: (param) => param.name || '未命名',
        },
        // 散点大小
        symbolSize: 50,
        // 将散点层级调高至不被markLine遮挡
        z: 9,
        type: 'scatter',
        // hover是否提示动画效果
        hoverAnimation: false,
        data: [
          {
            name: '三星',
            value: [10.0, -6.04],
            itemStyle: {
              color: '#FB7962',
            },
          },
          {
            name: '一加',
            value: [8.0, 1.95],
            itemStyle: {
              color: '#33BB7B',
            },
          },
          {
            name: '华为',
            value: [12.0, 7.58],
            itemStyle: {
              color: '#3583FF',
            },
          },
          {
            name: '苹果',
            value: [15.0, -7.81],
            itemStyle: {
              color: '#8560C5',
            },
          },

          //   {
          //     name: 'OPPO',
          //     value: [-2.0, -7.81],
          //     itemStyle: {
          //       color: '#8560C5',
          //     },
          //   },
        ],
        // 模拟坐标轴
        markLine: {
          silent: true,
          lineStyle: {
            color: '#ccc',
            type: 'solid',
          },
          data: [
            {
              xAxis: median,
              label: {
                // 强制设置一个label
                formatter: '成交多',
                color: '#4d4d4d',
              },
            },
            {
              yAxis: 0,
              label: {
                formatter: '执行分高',
                color: '#4d4d4d',
              },
            },
          ],
        },
        markArea: {
          // 不响应鼠标事件
          // 响应时，鼠标移动到该区域，label会移动到区域外部
          silent: true,
          data: [
            // 设置第四象限
            [
              {
                // name: '第四象限',
                yAxis: -9,
                xAxis: 0,
                // 设置背景的颜色
                itemStyle: {
                  color: 'rgba(255,120,117,0.15)',
                  //   opacity: 0.15,
                },
                label: {
                  show: true,
                  formatter: ['{a|重点关注区}', '{b|成交少，执行分低}'].join('\n'),
                  // 相对于区域左上角的位置
                  position: ['96%', '10%'],
                  align: 'right',
                  rich: {
                    a: {
                      color: 'red',
                      fontSize: 18,
                      lineHeight: 30,
                    },
                    b: {
                      color: '#999',
                      lineHeight: 18,
                    },
                  },
                },
              },
              {
                yAxis: 0,
                xAxis: 11,
              },
            ],
            // 设置第二象限
            [
              {
                yAxis: 9,
                xAxis: 15,
                // 设置背景的颜色
                itemStyle: {
                  color: 'rgba(56, 158, 13, 0.2)',
                  // opacity: 0.15,
                },
                label: {
                  show: true,
                  formatter: ['{a|优秀坐席区}', '{b|成交多，执行分高}'].join('\n'),
                  position: ['3%', '10%'],
                  rich: {
                    a: {
                      color: 'rgba(56, 158, 13, 1)',
                      fontSize: 18,
                      lineHeight: 30,
                    },
                    b: {
                      color: '#999',
                      lineHeight: 18,
                    },
                  },
                },
              },
              {
                yAxis: 0,
                xAxis: 11,
              },
            ],
            // 设置第一象限
            [
              {
                yAxis: 9,
                xAxis: 8,
                itemStyle: {
                  color: 'rgba(255, 255,255, 0)',
                },
                label: {
                  show: true,
                  formatter: ['{a|负向监督挖掘区}', '{b|成交少，执行分高}'].join('\n'),
                  position: ['96%', '10%'],
                  align: 'right',
                  rich: {
                    a: {
                      color: '#ddd',
                      fontSize: 18,
                      lineHeight: 30,
                    },
                    b: {
                      color: '#999',
                      lineHeight: 18,
                    },
                  },
                },
              },
              {
                yAxis: 0,
                xAxis: 11,
              },
            ],
            // 设置第三象限
            [
              {
                yAxis: -9,
                xAxis: 15,
                itemStyle: {
                  color: 'rgba(255, 255,255, 0)',
                },
                label: {
                  show: true,
                  formatter: ['{a|正向监督挖掘区}', '{b|成交多，执行分低}'].join('\n'),
                  position: ['3%', '10%'],
                  rich: {
                    a: {
                      color: '#ddd',
                      fontSize: 18,
                      lineHeight: 30,
                    },
                    b: {
                      color: '#999',
                      lineHeight: 18,
                    },
                  },
                },
              },
              {
                yAxis: 0,
                xAxis: 11,
              },
            ],
          ],
        },
      },
    ],
  };

  return (
    <div>
      <ReactEcharts ref={ReactEchartsRef} option={option} />
    </div>
  );
};
