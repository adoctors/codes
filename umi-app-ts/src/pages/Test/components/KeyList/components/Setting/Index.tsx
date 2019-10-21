import React, { useState, useEffect, Fragment } from 'react';
import isEqual from 'lodash/isEqual';
import { IObject } from '@/models/common.d';
import { Modal, Icon, Button } from 'antd';
import { KeyListListItemProps } from './KeyListInterface';
import KeyList from './components/KeyList/KeyList';
import MyModal from '@/components/MyModal/MyModal';
import styles from './Index.less';

import dataHeader from './dataHeader';

const propsData = {
  dataHeader,
  bookName:'',
  sheetName:'',
  level:'',
  title:'',
  settingType: 'header_visible',
};


interface IProps {
   /** 接口参数需要值*/
   bookName: string,
   /** 接口参数需要值*/
   sheetName: string,
   /** 接口参数需要值*/
   level: 'business' | 'staff',
   /** Modal的title*/
   title: string,
   /** 设置哪个类型的字段*/
   settingType: 'header_visible' | 'searchbar_visible',
}

const Index = (props: any) => {
  const [currentTab, setCurrentTab] = useState<string>('header_visible');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const { dataHeader, settingType } = propsData;

  const tabList = [
    {
      title: '显示字段',
      key: 'header_visible',
    },
    {
      title: '筛选字段',
      key: 'searchbar_visible',
    },
  ];

  let showKeyListResult: KeyListListItemProps[] = [];
  let hideKeyListResult: KeyListListItemProps[] = [];

  const ifTabToggle = () => {
    // 判断
    const FormatHeaderData = (list: IObject[]): KeyListListItemProps[] =>
      list.map((op: IObject) => ({
        name: op.name,
        key: op.key,
        visible: op[settingType],
      }));

    const ResShowKeyList = FormatHeaderData(
      dataHeader.filter((item: IObject) => item[settingType]),
    );
    // console.log(showKeyListResult, ResShowKeyList);
    return showKeyListResult.length === 0 || isEqual(showKeyListResult, ResShowKeyList);
  };

  const getResult = (
    showKeyList: KeyListListItemProps[],
    hideKeyList: KeyListListItemProps[],
  ): void => {
    showKeyListResult = showKeyList;
    hideKeyListResult = hideKeyList;
  };

  const getDataHeader = (): void => {
    // 用于获取dataHeader
  };

  useEffect(() => {
    setCurrentTab(settingType);
  }, []);

  const tabClick = (key: string): void => {
    // console.log(ifTabToggle());
    if (ifTabToggle()) {
      setCurrentTab(key);
    } else {
      Modal.confirm({
        title: '提示',
        content: '显示字段有数据未保存，请保存',
        maskClosable: true,
        mask: false,
        cancelText: '取消',
        okText: '保存',
        onOk: () => {
          // console.log('xxx');
          setCurrentTab(key);
        },
      });
    }
  };

  const modalOk = (): void => {
    setModalVisible(false);
  };

  const modalCancel = (): void => {
    setModalVisible(false);
  };

  const reset = ():void => {
    // console.log('reset')
    setModalVisible(false);
  }

  const SettingContent: React.ReactNode = (
    <div className={styles.settingConWrap}>
      <div className={styles.tabWrap}>
        {tabList.map(item => (
          <div
            className={item.key === currentTab ? styles.tabActive : styles.tabDefault}
            key={item.key}
            onClick={() => tabClick(item.key)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <KeyList
        dataHeader={dataHeader}
        settingType={currentTab as 'header_visible' | 'searchbar_visible'}
        getResult={getResult}
      />
    </div>
  );

  const ModalFooter: React.ReactNode = (
    <div className={styles.modalFooterWrap}>
      <span className={styles.resetBtn} onClick={reset}>重置显示字段</span>
      <div>
        <Button onClick={modalOk}>取消</Button>
        <Button type="primary" onClick={modalCancel}>
          保存
        </Button>
      </div>
    </div>
  );

  return (
    <Fragment>
      <Icon
        type="setting"
        onClick={() => {
          setModalVisible(true);
        }}
      />
      <MyModal
        title={`分组`}
        width="560px"
        visible={modalVisible}
        footer={ModalFooter}
        content={SettingContent}
        onCancel={modalCancel}
        wrapClassName={styles.SettingModalWrap}
      />
    </Fragment>
  );
};

export default Index;
