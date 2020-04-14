import React, { useState, useEffect, Fragment } from 'react';
import ScrollArea from 'react-scrollbar';

import styles from './style.less';

const CustomScrollbars = () => {
  return (
    <div className={styles.scrollbarsWrap}>
      <ScrollArea speed={0.8} className={styles.area} contentClassName={styles.content} horizontal={false}>
        <p>Some long content.</p>
        <p>Some long content.</p>
        <p>Some long content.</p>
        <p>Some long content.</p>
        <p>Some long content.</p>
        <p>Some long content.</p>
      </ScrollArea>

      {/* contentClassName不设置高度则不会出现滚动条 */}
    </div>
  );
};

export default CustomScrollbars;
