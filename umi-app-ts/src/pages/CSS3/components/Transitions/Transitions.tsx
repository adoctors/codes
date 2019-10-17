import React, { useState } from 'react';
import classNames from 'classnames';
import { Button, Icon } from 'antd';

import styles from './Transitions.less';

const Transitions = props => {
  const [numFlag, setNumFlag] = useState<boolean>(false);

  const numHandle = () => {
    setNumFlag(!numFlag);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.likeWrap}>
        <Icon type="like" className={styles.likeBtn} onClick={numHandle} />
        <span
          className={classNames(styles.num, {
            [styles.numActive]: numFlag,
          })}
        >
          + 1
        </span>
      </div>
    </div>
  );
};

export default Transitions;
