import React, { useState } from 'react';
import classNames from 'classnames';
import { Button, Icon } from 'antd';

import styles from './KeyList.less';

const KeyList = props => {
  const [numFlag, setNumFlag] = useState<boolean>(false);

  const numHandle = () => {
    setNumFlag(!numFlag);
  };

  return (
    <div className={styles.wrap}>
      setup
    </div>
  );
};

export default KeyList;
