// 散点图
import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';

export default () => {
  const ReactEchartsRef: any = useRef(null);
  const option = {
    title: {
      text: '一个简单的散点图',
    },
    xAxis: {},
    yAxis: {},
    series: [
      {
        type: 'scatter',
        // 散点大小
        symbolSize: 20,

        data: [
          [-10.0, -6.04],
          [10.0, -6.04],
          [8.0, 1.95],
          [12.0, 7.58],
          [15.0, -7.81],
        ],
      },
    ],
  };

  return (
    <div>
      <ReactEcharts ref={ReactEchartsRef} option={option} />
    </div>
  );
};
