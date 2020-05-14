import React from 'react';
import LineChart from './LineChart';
import PieChart from './PieChart';
import BarChart from './BarChart';

import styles from './style.less';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.border} />
      <p>echarts_for_react</p>
      <div>
        <p>柱状图效果</p>
        <BarChart />
      </div>
      <div>
        <p>饼图</p>
        <PieChart />
      </div>
      <div>
        <p>折线图效果</p>
        <LineChart />
      </div>
    </div>
  );
};
