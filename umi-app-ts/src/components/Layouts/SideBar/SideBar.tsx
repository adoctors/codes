import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';
import { ConnectState, ConnectProps } from '@/models/connect';

import styles from './SideBar.less';

interface isObject {
  [key: string]: any;
}

const SideBar = (props: isObject):JSX.Element => {
  const {
    collapsed,
    route,
    location: { pathname },
  } = props;

  const menuMap = route.routes && route.routes.filter((item: isObject) => item.isNavigate);

  return (
    <div className={styles.SideBarWrap}>
      <Menu selectedKeys={[pathname]} mode="inline" theme="dark">
        {menuMap.map(
          (item: isObject): React.ReactNode => (
            <Menu.Item key={item.path}>
              <Icon type={item.icon} />
              <Link to={item.path}>{collapsed ? '' : item.name}</Link>
            </Menu.Item>
          ),
        )}
      </Menu>
    </div>
  );
};

export default connect(({ global }: ConnectState) => ({
  collapsed: global.collapsed,
}))(SideBar);
