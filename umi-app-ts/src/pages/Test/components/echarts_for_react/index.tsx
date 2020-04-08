import React, { useState, useEffect, Fragment } from 'react';
import { IObject } from '@/models/common.d';

import ReactEcharts from 'echarts-for-react';

import styles from './style.less';

const Index = () => {
  const option = {
    title: {
      text: '折线图堆叠',
    },
    // 提示框组件
    tooltip: {
      trigger: 'axis',
    },
    // 图例
    legend: {
      data: ['邮件营销', '搜索引擎'],
    },
    // （直角坐标系底板）
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    // （工具栏组件）
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    // （直角坐标系 X 轴）
    xAxis: {
      
      type: 'category',
      boundaryGap: false,
      data: [
        '2020-01-01',
        '2020-02-01',
        '2020-03-01',
        '2020-04-01',
        '2020-05-01',
        '2020-06-01',
        '2020-07-01',
      ],
    },
    // （直角坐标系 Y 轴）
    yAxis: {
      name:'成单率(%)',
      type: 'value',
    },
    series: [
      {
        name: '邮件营销',
        type: 'line',
        stack: '总量',
        data: [120, 132, 101, 134, 90, 230, 210],
        color: ['#ff9000'],
      },
      {
        name: '搜索引擎',
        type: 'line',
        stack: '总量',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
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
        <ReactEcharts
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
