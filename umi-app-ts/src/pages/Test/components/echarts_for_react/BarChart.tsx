// 柱状图 - 可拖拽区间-定制样式
import React, { useEffect, useRef } from 'react';
import ReactEcharts from 'echarts-for-react';
import { Button } from 'antd';

export default () => {
  const ReactEchartsRef: any = useRef(null);
  const areaMax = 200;
  const areaMin = 130;
  const averageLine = 80;
  const data = [120, 200, 150, 80, 70, 110, 130];

  const data2 = data.filter((item) => item > 130).map((op) => op - 130);

  const option = {
    tooltip: {
      trigger: 'item',
      padding: [5, 10],
      formatter: (params: IObject) => {
        const { seriesName, value, componentType } = params;
        console.log(params);
        console.log(seriesName, value);
        if (componentType === 'markLine') {
          if (value === averageLine) return `公司平均${value}%`;
          return '123';
        }

        if (seriesName && value) return `${seriesName}: ${value}`;
      },
    },
    xAxis: {
      name: '坐席',
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      // 刻度线设置
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      name: '处理不当比例(%)',
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
        name: '处理不当比例(%)',
        data,
        type: 'bar',
        stack: 2, // 这个属性很重要，他决定这些柱状图是否是拼接在一起的，拼接在一起的stack值必须相等
        // 设置bar的颜色，优先级高于父级的color
        color: ['#D5CECE'],
        barWidth: 16,
        itemStyle: {
          // barBorderRadius: 12,
          // opacity: 0.8,
          // 柱条的颜色
          // color: '#D5CECE',
          color: function (params) {
            var index_color = params.value;

            if (index_color > 130) {
              return '#fe4365';
            } else {
              return '#D5CECE';
            }
          },
        },
        // showBackground: true,
        // 区域背景色
        markArea: {
          data: [
            [
              {
                yAxis: areaMin,
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
                yAxis: areaMax,
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
          // label: {
          //   // 不显示label
          //   show: false,
          // },
          data: [
            {
              label: {
                formatter: `公司平均${averageLine}%`,
                position: 'middle',
              },
              lineStyle: {
                width: 2,
                color: 'green',
              },
              yAxis: averageLine,
            },
            {
              label: {
                formatter: `警示区`,
                position: 'insideEndTop',
              },
              lineStyle: {
                color: 'red',
                type: 'solid',
              },
              // 非data内的也可以设置
              yAxis: areaMax,
              // hover效果取消
            },
            {
              label: {
                // 不限时
                show: false,
              },
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
      {
        type: 'bar',
        name: '类目3',
        stack: 2,
        itemStyle: {
          // barBorderRadius: [12,12,0,0],
          color: 'lightblue',
        },
        barWidth: '20',
        data: data2,
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
    toolbox: {
      feature: {
        // dataZoom: {
        //   yAxisIndex: false,
        // },
        saveAsImage: {
          type: 'png', //png  jpeg
          name: '柱状图保存文件名',
          title: '我是放在下载icon上的文案',
          // 分辨率，默认跟容器相同，如果更高的分辨率，大于1
          pixelRatio: 2,
        },
      },
    },
  };

  const chartDownload = () => {
    if (ReactEchartsRef && ReactEchartsRef.current) {
      const echarts_instance = ReactEchartsRef.current.getEchartsInstance();
      if (echarts_instance) {
        // params.scheduler.ecInstance 获取图表实例，并配置生成图片的属性
        const dataSource = echarts_instance.getDataURL({
          type: 'png',
          pixelRatio: 2,
          backgroundColor: '#fff',
        });
        // 本地将canvas 图片导出成图片，并下载
        const MIME_TYPE = 'image/png';
        const dlLink = document.createElement('a');
        dlLink.download = 'Near Miss.png';
        dlLink.href = dataSource;
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
        document.body.appendChild(dlLink);
        dlLink.click();
        document.body.removeChild(dlLink);
      }
    }
  };

  // 根据容器的宽度来
  return (
    <div>
      <Button onClick={chartDownload}>外部点击触发下载</Button>
      <ReactEcharts ref={ReactEchartsRef} option={option} />
    </div>
  );
};

// markline -demo:https://echarts.apache.org/examples/zh/editor.html?c=line-markline
