import React, { useState, useEffect, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './style.less';

const CustomScrollbars = () => {
  return (
    <div className={styles.scrollbarsWrap}>
      <div className={styles.s1}>
        <Scrollbars style={{ width: 500, height: 300 }}>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
        </Scrollbars>
      </div>

      <div className={styles.s2}>
        <Scrollbars style={{ width: 200, height:'100%' }} autoHeight={true}>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
          <p>Some great content...</p>
        </Scrollbars>
      </div>
    </div>
  );
};

export default CustomScrollbars;
