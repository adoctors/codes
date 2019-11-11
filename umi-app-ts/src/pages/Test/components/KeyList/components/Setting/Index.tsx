import React, { useState, useEffect, Fragment } from 'react';
import isEqual from 'lodash/isEqual';
import { IObject, ConnectProps } from '@/models/connect.d';
import { Modal, Icon, Button, message } from 'antd';
import { connect } from 'dva';
import { KeyListListItemProps } from './index.d';
import KeyList from './components/KeyList/KeyList';
import MyModal from '@/components/MyModal/MyModal';
import styles from './Index.less';

interface IProps extends ConnectProps, IObject {
  /** 接口参数需要值*/
  bookName: string;
  /** 接口参数需要值*/
  sheetName: string;
  /** 接口参数需要值*/
  level: 'business' | 'staff';
  /** Modal的title*/
  title: string;
  /** 当前资源类型*/
  resourceType: 'header' | 'searchbar';
  /** 设置数据源*/
  data: IObject[];
  /** 设置成功的回调*/
  onOkCallBack: () => void;
  /** 不同于Icon的触发器*/
  trigger?: React.ReactElement;
}

// 资源类型对应的字段
const resourceTypeMap = {
  header: 'header_visible',
  searchbar: 'searchbar_visible',
};

let showKeyListResult: KeyListListItemProps[] = [];
let hideKeyListResult: KeyListListItemProps[] = [];

const Index = (props: IProps): React.ReactElement => {
  const { dispatch, bookName, sheetName, level, title, resourceType, data, trigger } = props;
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  // console.log(data, resourceTypeMap[resourceType]);
  const getResult = (
    showKeyList: KeyListListItemProps[],
    hideKeyList: KeyListListItemProps[],
  ): void => {
    showKeyListResult = showKeyList;
    hideKeyListResult = hideKeyList;
  };

  const modalShow = (): void => {
    setModalVisible(true);
  };

  const modalOk = (): void => {
    message.success(`设置成功`);
    setModalVisible(false);
  };

  const modalCancel = (): void => {
    setModalVisible(false);
  };

  return (
    <Fragment>
      {trigger ? (
        <span onClick={modalShow}>{trigger}</span>
      ) : (
        <Icon type="setting" onClick={modalShow} />
      )}

      <MyModal
        title={title}
        width="560px"
        visible={modalVisible}
        content={
          // 排序插件版本问题
          <KeyList
            dataHeader={data}
            settingType={resourceTypeMap[resourceType] as 'header_visible' | 'searchbar_visible'}
            getResult={getResult}
          />
        }
        onCancel={modalCancel}
        onOk={modalOk}
        okText="确认"
        cancelText="取消"
        wrapClassName={styles.SettingModalWrap}
      />
    </Fragment>
  );
};

export default connect(() => ({}))(Index);
