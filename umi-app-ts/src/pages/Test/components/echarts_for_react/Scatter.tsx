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
  const option = {
    title: {
      text: '品牌健康度分析',
    },
    xAxis: {
      // 取数据在该轴上的最小值作为最小刻度
      min: 'dataMin',
      // 不显示坐标轴,测试的时候可以自己打开
      //   show: false,
    },
    yAxis: {
      // 不显示坐标轴,测试的时候可以自己打开
      //   show: false,
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
        type: 'scatter',
        // 模拟坐标轴
        markLine: {
          lineStyle: {
            normal: {
              color: '#555555',
              type: 'solid',
            },
          },
          data: [
            {
              xAxis: median,
              label: {
                normal: {
                  show: true,
                  formatter: '品牌净流入量',
                },
              },
            },
            {
              yAxis: 0,
              label: {
                normal: {
                  show: true,
                  formatter: '品牌持机量',
                },
              },
            },
          ],
        },
        markArea: {
          data: [
            // 设置第四象限
            [
              {
                // name: '第四象限',
                yAxis: 0,
                xAxis: 8,
                // 设置背景的颜色
                itemStyle: {
                  color: 'rgba(255,120,117,0.15)',
                  //   opacity: 0.15,
                },
                label: {
                  show: true,
                  formatter: ['{a|重点关注区}', '{b|成交少，执行分低}'].join('\n'),
                  position: ['80%',"10%"],
                  rich: {
                    b: {
                      color: '#ccc',
                      lineHeight: 18,
                    },
                    a: {
                      color: 'red',
                      fontSize: 18,
                    },
                  },
                },
              },
              {
                yAxis: -9,
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
                  color: '#FF7875',
                  opacity: 0.15,
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
