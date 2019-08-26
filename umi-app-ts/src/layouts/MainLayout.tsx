import React from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import { Icon } from 'antd';
import { ConnectState, ConnectProps } from '@/models/connect';
import Header from '@/components/Layouts/Header/Header';
import SideBar from '@/components/Layouts/SideBar/SideBar';

import styles from './MainLayout.less';

interface IProps extends ConnectProps {
  collapsed: boolean;
  [key: string]: any;
}

const MainLayout: React.FC<IProps> = props => {
  const { dispatch, children, collapsed } = props;
  // const [collapsed, setCollapsed] = useState(false);

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  };

  return (
    <div className={styles.MainLayoutWrap}>
      <div className={styles.MainLayoutHeader}>
        <Header />
      </div>
      <div className={styles.MainLayoutConWrap}>
        <div
          className={classNames(
            styles.MainLayoutSidebar,
            collapsed ? styles.MainLayoutSidebarMin : styles.MainLayoutSidebarMax,
          )}
        >
          <div>
            <SideBar {...props} />
          </div>
          <div className={styles.MainLayoutSidebarFooter}>
            <div></div>
            <div className={styles.munuBtn}>
              <Icon
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => handleMenuCollapse(!collapsed)}
              />
            </div>
          </div>
        </div>
        <div className={styles.MainLayoutCon}>
          <div className={styles.MainLayoutConBg}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default connect(({ global }: ConnectState) => ({
  collapsed: global.collapsed,
}))(MainLayout);
