import React, { useState, useEffect, Fragment, useRef } from 'react';
import moment from 'moment';
import { IObject } from '@/models/common.d';

import ReactEcharts from 'echarts-for-react';

import styles from './style.less';

const random = (min: number, max: number): number => Math.round(Math.random() * (max - min) + min);

const getDaysBefore = (num: number): string[] =>
  Array.from({ length: num }, (item, i) =>
    moment(new Date(new Date().setDate(new Date().getDate() - (num - i)))).format('YYYY-MM-DD'),
  );

const Index = () => {
  // tooltip时成单率带%
  // 昨天往前默认15天
  const ReactEchartsRef: any = useRef(null);
  const widthChange = () => {
    if (ReactEchartsRef && ReactEchartsRef.current) {
      const echarts_instance = ReactEchartsRef.current.getEchartsInstance();
      if (echarts_instance) echarts_instance.resize();
    }
  };

  useEffect(() => {
    window.addEventListener('resize', widthChange);
    return () => window.removeEventListener('resize', widthChange);
  }, []);

  const option = {
    // title: {
    //   text: '折线图堆叠',
    // },
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      padding: [5, 10],
      formatter: (params = []) => {
        const x: IObject = params[0];
        const y: IObject = params[1];
        return `${x.name} <br />${x.marker} ${x.seriesName}: ${x.data}% <br />${y.marker} ${y.seriesName}: ${y.data}`;
      },
    },
    // 图例
    legend: {
      top: 0,
      left: 'left',
      data: ['top20%成单率', '整体成单率'],
      textStyle: {
        fontSize: 14,
        fontWeight: 'bold',
      },
    },
    // （直角坐标系底板）
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      // top: '5%',
      containLabel: true,
    },
    // （工具栏组件）
    // toolbox: {
    //   feature: {
    //     saveAsImage: {},
    //   },
    // },
    // （直角坐标系 X 轴）
    xAxis: {
      name: '打分日期',
      nameTextStyle: {
        fontWeight: 'bold',
      },
      type: 'category',
      boundaryGap: false,
      // 坐标轴刻度标签的相关设置
      axisLabel: {
        // 设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』
        interval: 0,
        // label旋转45°
        rotate: 45,
      },
      data: Array.from(
        { length: 30 },
        (item, i) => `2020-01-${(i + 1).toString().padStart(2, '0')}`,
      ),
    },
    // （直角坐标系 Y 轴）
    yAxis: {
      name: '成单率(%)',
      type: 'value',
      // 默认无数据时展示data，去掉type
      // data: [0, 2, 4, 6, 8, 10],
      nameTextStyle: {
        fontWeight: 'bold',
        align: 'right',
      },
      // 坐标轴的分割段数，需要注意的是这个分割段数只是个预估值
      // splitNumber: 6,
      // 坐标轴名称与轴线之间的距离。
      nameGap: 15,
      // 坐标轴轴线相关设置
      // axisLine: {
      //   show: false,
      // },
      // 坐标轴刻度相关设置
      // axisTick: {
      //   show: false,
      // },
    },
    series: [
      {
        name: 'top20%成单率',
        type: 'line',
        // stack: '总量',
        // data: [],
        data: Array.from({ length: 30 }, (item, i) => random(150, 300)),
        color: ['#ff9000'],
      },
      {
        name: '整体成单率',
        type: 'line',
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        // stack: '总量',
        data: Array.from({ length: 30 }, (item, i) => random(50, 160)),
        color: ['#1890ff'],
      },
    ],
  };

  const onEchartsClick = (item, e) => {
    // console.log(item, e);
  };

  return (
    <div className={styles.wrapper}>
      <p>echarts_for_react</p>

      <div>
        {/* 根据容器的宽度来 */}
        <ReactEcharts
          ref={ReactEchartsRef}
          option={option}
          notMerge={true}
          lazyUpdate={true}
          // theme={'theme_name'}
          // onChartReady={this.onChartReadyCallback}
          onEvents={{
            click: onEchartsClick,
          }}
          // opts={}
          style={{ height: '500px', width: '100%' }}
        />
      </div>
    </div>
  );
};

export default Index;
