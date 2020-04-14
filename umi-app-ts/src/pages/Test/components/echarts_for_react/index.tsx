import React, { useState, useEffect, Fragment, useRef } from 'react';
import { IObject } from '@/models/common.d';

import ReactEcharts from 'echarts-for-react';

import styles from './style.less';

const Index = () => {
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
    },
    // 图例
    legend: {
      top: 0,
      left: '3%',
      data: ['top20%成单率', '整体成单率'],
      textStyle: {
        fontSize: 18,
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
      data: [
        '2020-01-01',
        '2020-01-02',
        '2020-01-03',
        '2020-01-04',
        '2020-01-05',
        '2020-01-06',
        '2020-01-07',
        '2020-01-08',
        '2020-01-09',
        '2020-01-10',
        '2020-01-11',
        '2020-01-12',
        '2020-01-13',
        '2020-01-14',
        '2020-01-15',
        '2020-01-16',
        '2020-01-17',
        '2020-01-18',
        '2020-01-19',
        '2020-01-21',
        '2020-01-22',
        '2020-01-23',
        '2020-01-24',
        '2020-01-25',
        '2020-01-26',
        '2020-01-27',
        '2020-01-28',
        '2020-01-29',
        '2020-01-30',
      ],
    },
    // （直角坐标系 Y 轴）
    yAxis: {
      name: '成单率(%)',
      type: 'value',
      nameTextStyle: {
        fontWeight: 'bold',
        align: 'right',
      },
      // 坐标轴的分割段数，需要注意的是这个分割段数只是个预估值
      // splitNumber: 6,
      // 坐标轴名称与轴线之间的距离。
      nameGap: 15,
      // 坐标轴轴线相关设置
      axisLine: {
        show: false,
      },
      // 坐标轴刻度相关设置
      axisTick: {
        show: false,
      },
    },
    series: [
      {
        name: 'top20%成单率',
        type: 'line',
        // stack: '总量',
        data: [
          120,
          1320,
          101,
          1340,
          990,
          230,
          210,
          120,
          132,
          101,
          134,
          90,
          230,
          2100,
          120,
          132,
          101,
          134,
          90,
          230,
          210,
          120,
          132,
          1010,
          134,
          90,
          230,
          210,
          120,
          132,
        ],
        color: ['#ff9000'],
      },
      {
        name: '整体成单率',
        type: 'line',
        // 数据堆叠，同个类目轴上系列配置相同的stack值后，后一个系列的值会在前一个系列的值上相加
        // stack: '总量',
        data: [
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
          934,
          1290,
          1330,
          1320,
          820,
          932,
          901,
        ],
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
