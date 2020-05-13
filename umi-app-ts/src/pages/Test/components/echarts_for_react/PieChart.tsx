// 饼图效果
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import styles from './style.less';

export default () => {
  const baseOption = () => ({
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['55%', '70%'],
        // 关闭鼠标触发时的效果
        silent: true,
        avoidLabelOverlap: false,
        label: {},
        // 鼠标放上的效果
        // emphasis: {
        //   label: {
        //     show: true,
        //     fontSize: '30',
        //     fontWeight: 'bold',
        //   },
        // },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 5,
            name: '搜索引擎',
            itemStyle: {
              color: '#76a2eb',
            },
          },
          {
            value: 10,
            // name: 'unused',
            itemStyle: {
              color: '#f0f2f4',
              // borderColor: 'white',
              // borderWidth: 5,
            },
          },
        ],
      },
    ],
  });

  const label1 = () => {
    const op = baseOption();
    op.series[0].label = {
      show: true,
      // 单独设置lable
      position: 'center',
      fontSize: '30',
      fontWeight: 'bold',
      color: '#76a2eb',
    };
    return op;
  };

  const label2 = () => {
    const op = baseOption();
    op.series[0].label = {
      formatter: [
        `{a|这段文本采用样式a}`,
        `{b|这段文本采用样式b}这段用默认样式{x|这段用样式x}`,
      ].join('\n'),

      rich: {
        a: {
          color: 'red',
          lineHeight: 10,
        },
        b: {
          color: '#449933',
          height: 40,
        },
        x: {
          fontSize: 18,
          fontFamily: 'Microsoft YaHei',
          borderColor: '#449933',
          borderRadius: 4,
        },
      },
    };
    return op;
  };

  const label3 = () => {
    const op = baseOption();
    op.series[0].label = {
      position: 'center',
      formatter: [`{a|70%}`, `{b|总处理不当比例}`].join('\n'),

      rich: {
        a: {
          color: '#000',
          fontSize: '18',
          lineHeight: '30',
        },
        b: {
          color: '#e1e1e1',
          fontSize: '14',
        },
      },
    };
    return op;
  };

  return (
    <div className={styles.pieWrap}>
      <div className={styles.pie}>
        <ReactEcharts option={label1()} />
      </div>
      <div className={styles.pie}>
        <ReactEcharts option={label2()} />
      </div>
      <div className={styles.pie}>
        <ReactEcharts option={label3()} />
      </div>
    </div>
  );
};
