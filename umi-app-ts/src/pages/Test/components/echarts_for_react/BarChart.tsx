// 柱状图 - 可拖拽区间-定制样式
import React, { useEffect, useRef } from 'react';
import moment from 'moment';
import { IObject } from '@/models/common.d';
import ReactEcharts from 'echarts-for-react';

export default () => {
  const option = {
    tooltip: {
      trigger: 'item',
      padding: [5, 10],
      // formatter: (params = []) => {
      //   const x: IObject = params[0];
      //   const y: IObject = params[1];
      //   return `${x.name} <br />${x.marker} ${x.seriesName}: ${x.data}% <br />${y.marker} ${y.seriesName}: ${y.data}`;
      // },
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      // 刻度线设置
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      // 分隔线设置，类似于刻度线的反向的延长
      splitLine: {
        show: false,
      },
      // 刻度线设置
      axisTick: {
        show: false,
      },
    },
    color: ['pink'],
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        // 设置bar的颜色，优先级高于父级的color
        color: ['#D5CECE'],
        barWidth: 16,
        itemStyle: {
          barBorderRadius: 12,
          // opacity: 0.8,
          // 柱条的颜色
          color: '#D5CECE',
        },
        // showBackground: true,
        // 区域背景色
        markArea: {
          data: [
            [
              {
                yAxis: 130,
                // 设置背景的颜色
                itemStyle: {
                  color: '#FF7875',
                  opacity: 0.15,
                  borderColor: 'red',
                  // borderWidth: 2,
                  // borderType: 'dashed',
                },
              },
              {
                yAxis: 200,
              },
            ],
          ],
        },
      },
      // 平行辅助线
      {
        // name: 'abc',
        type: 'line',
        markLine: {
          // 去掉箭头
          symbol: 'none',
          label: {
            // 不显示label
            show: false,
          },
          data: [
            {
              lineStyle: {
                width: 2,
                color: 'green',
              },
              yAxis: 80,
            },
            {
              lineStyle: {
                color: 'red',
                type: 'solid',
              },
              // 非data内的也可以设置
              yAxis: 200,
              // hover效果取消
            },
            {
              lineStyle: {
                color: 'red',
                type: 'dotted',
              },
              yAxis: 130,
            },
            // },
          ],
        },
      },
    ],
    // 区域缩放控制器
    dataZoom: {
      // orient: 'horizontal',         // 布局方式，默认为水平布局，可选为：'horizontal' ¦ 'vertical'
      // x: {number},              // 水平安放位置，默认为根据grid参数适配，可选为： {number}（x坐标，单位px）
      // y: {number},              // 垂直安放位置，默认为根据grid参数适配，可选为： {number}（y坐标，单位px）
      // width: {number},           // 指定宽度，横向布局时默认为根据grid参数适配
      // height: {number},          // 指定高度，纵向布局时默认为根据grid参数适配
      backgroundColor: 'rgba(0,0,0,0)', // 背景颜色
      dataBackgroundColor: '#eee', // 数据背景颜色
      fillerColor: 'rgba(144,197,237,0.2)', // 填充颜色
      handleColor: 'rgba(70,130,180,0.8)', // 手柄颜色
    },
  };

  // 根据容器的宽度来
  return <ReactEcharts option={option} />;
};
