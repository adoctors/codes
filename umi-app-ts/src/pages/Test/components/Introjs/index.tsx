import React, { useState, useEffect, Fragment } from 'react';
import isEqual from 'lodash/isEqual';
import { IObject } from '@/models/common.d';

import introJs from 'intro.js';
import 'intro.js/introjs.css';
import styles from './style.less';

const Introjs = () => {
  useEffect(() => {
    const options = {
      prevLabel: '上一步',
      nextLabel: '下一步',
      skipLabel: '跳过',
      doneLabel: '我知道了',
      hidePrev: true,
      hideNext: true,
    };

    // 如果不存一个变量只能链式，很多不方便，变量后则可以直接单独的跟方法或者属性
    const x = introJs();

    const setpTotal = 3;
    let currentStep = 1;

    x.setOptions(options)
      .start()
      .onbeforeexit(function() {
        // console.log('on before exit');
        // 此处要判断是否最后一步，不然要炸了
        if (currentStep < setpTotal) {
          x.nextStep();
          return false;
        }
      });

    // x.onbeforechange(function(ele){
    //   console.log(ele,ele.getAttribute('data-step'))
    // })

    x.onchange(function(ele) {
      currentStep = +ele.getAttribute('data-step');
      // console.log(+ele.getAttribute('data-step'))
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <div>Introjs</div>
      <div data-step="1" data-intro="我是描述：test1">
        test-1
      </div>
      <div>test-3</div>
      <div data-step="2" data-intro="我是描述：test5">
        test-5
      </div>
      <div>test-7</div>
      <div data-step="3" data-intro="我是描述：test9">
        test-9
      </div>
    </div>
  );
};

export default Introjs;
