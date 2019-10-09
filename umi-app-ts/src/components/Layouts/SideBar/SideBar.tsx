import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Menu, Icon } from 'antd';
import { ConnectState, ConnectProps } from '@/models/connect';

import styles from './SideBar.less';

interface isObject {
  [key: string]: any;
}

const SideBar = (props: isObject): JSX.Element => {
  const {
    collapsed,
    route,
    location: { pathname },
  } = props;

  const navList: any = [];
  const NavMap = (list: any) => {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].routes && list[i].routes.length) {
        NavMap(list[i].routes);
        if (list[i].isNavigate) navList.push(list[i]);
      } else if (list[i].isNavigate) {
        navList.push(list[i]);
      }
    }
  };

  NavMap(route.routes || []);

  const currentPath =
    navList.filter((item: any) => item.path.split('/')[1] === pathname.split('/')[1]) || [];

  const currentNav: string = currentPath.length ? currentPath[0].path : '';

  return (
    <div className={styles.SideBarWrap}>
      <Menu selectedKeys={[currentNav]} mode="inline" theme="dark">
        {navList.map(
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
