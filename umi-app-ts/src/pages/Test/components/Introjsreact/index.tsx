import React, { useState, useEffect, useRef } from 'react';
import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';

import styles from './style.less';
import './introstyle.css';

const Introjs = () => {
  useEffect(() => {}, []);

  const [stepsEnabled, setStepsEnabled] = useState<boolean>(true);
  const [initialStep, setInitialStep] = useState<number>(0);
  const setpEle = useRef();

  const steps = [
    {
      element: '.test3',
      intro: '我是描述：test3',
    },
    {
      element: '#setp5',
      intro: '描述是我：test-5',
    },
    {
      element: '.test9',
      intro: 'test9-------------------',
    },
  ];

  const options = {
    prevLabel: '上一步',
    nextLabel: '下一步',
    skipLabel: '跳过',
    doneLabel: '我知道了',
    hidePrev: true,
    hideNext: true,
  };

  const hints = [
    {
      element: '.test3',
      hint: '我是描述：test3',
    },
    {
      element: '#setp5',
      hint: '描述是我：test-5',
    },
    {
      element: '.test9',
      hint: 'test9-------------------',
    },
  ];

  const onExit = () => {
    setStepsEnabled(false);
  };

  return (
    <div className={styles.wrap}>
      {/* 元素遮罩弹窗 */}
      <Steps
        ref={setpEle}
        enabled={stepsEnabled}
        steps={steps}
        initialStep={initialStep}
        options={options}
        onExit={onExit}
        // onChange={nextStepIndex => {
        //   console.log(nextStepIndex);
        //   setInitialStep(nextStepIndex);
        // }}
        onBeforeExit={() => {
          // console.log('xxx', steps.length - 1, initialStep, setpEle);
          // 跳过改为下一条，暂未成功
          // if (setpEle && setpEle.current && initialStep < steps.length - 1) {
          //   setInitialStep(initialStep + 1);
          //   setpEle.current.updateStepElement(initialStep + 1);
          //   return false;
          // }
        }}
        // onComplete={() => {
        //   console.log('onComplete', steps.length, initialStep);
        // }}
      />

      {/* 元素浮球提示 */}
      {/* <Hints
        enabled={stepsEnabled}
        hints={hints}
        options={options}
      /> */}
      <div>Introjs</div>
      <div>test-1</div>
      <div className="test3">test-3</div>
      <div id="setp5">test-5</div>
      <div>test-7</div>
      <div className="test9">test-9</div>
    </div>
  );
};

export default Introjs;
