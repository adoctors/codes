import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import { Avatar, Menu, Dropdown, Icon } from 'antd';
import styles from './Header.less';
import logo from '@/assets/dt_logo.png';

const Header = props => {
  const userName = 'test';

  const menu = (
    <Menu>
      <Menu.Item>
        <div className={styles.dropdownMunuItem}>
          <Icon type="logout" />
          <Link to="/login" style={{color:'#666', marginLeft: 8}}>退出登陆</Link>
        </div>
      </Menu.Item>
    </Menu>
  );




  return (
    <div className={styles.LayoutHeaderWrap}>
      <img src={logo} alt="" className={styles.logo} />
      <div className={styles.LayoutHeaderRight}>
        <Dropdown overlay={menu} placement="bottomLeft">
          <div className={styles.LayoutHeaderUserWrap}>
            <Avatar style={{ backgroundColor: '#009688', verticalAlign: 'middle', marginRight: 10 }} size="small">
              {userName.charAt(0)}
            </Avatar>
            {userName}
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
