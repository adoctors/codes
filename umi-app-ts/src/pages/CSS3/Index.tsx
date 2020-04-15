import React, { useEffect, useState } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'umi';
import routerConfig from '../../../config/router.config';
import styles from './Index.less';

const Index = (props: any): JSX.Element => {
  const {
    location: { pathname },
  } = props;
  const [currentName, setCurrentName] = useState<string>('');

  const currentMaps = () => {
    const baseUrl = '/css3/';
    const { routes } = routerConfig[1];
    return routes
      ? (routes as any[]).filter(item => item.path && item.path.indexOf(baseUrl) > -1)[0].routes
      : [];
  };

  const munu = (
    <Menu>
      {currentMaps().map((item: any) => (
        <Menu.Item key={item.path}>
          <Link to={item.path as string}>{item.name}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  useEffect(() => {
    setCurrentName(currentMaps().filter((item: any) => item.path === pathname)[0].name);
  }, [pathname]);

  return (
    <div className={styles.FormsWrap}>
      <div className={styles.headers}>
        <Dropdown overlay={munu}>
          <span style={{ color: '#2fe1a8' }}>
            <span style={{ display: 'inline-block', width: 140 }}>{currentName}</span>
            <Icon type="down" />
          </span>
        </Dropdown>
      </div>
      <div className={styles.FormsCon}>{props.children}</div>
    </div>
  );
};

export default Index;
