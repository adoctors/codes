import React, { useState, useEffect } from 'react';
import { IObject } from '@/models/common.d';
import { Switch, message } from 'antd';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { KeyListProps, KeyListListItemProps } from '../../KeyListInterface';
import ListItem from './ListItem';

import styles from './KeyList.less';

const KeyList = (props: KeyListProps) => {
  const { dataHeader, settingType, getResult } = props;

  const [showKeyList, setShowKeyList] = useState<KeyListListItemProps[]>([]);
  const [hideKeyList, setHideKeyList] = useState<KeyListListItemProps[]>([]);

  useEffect(() => {
    const FormatHeaderData = (list: IObject[]): KeyListListItemProps[] =>
      list.map((op: IObject) => ({
        name: op.name,
        key: op.key,
        visible: op[settingType],
      }));

    setShowKeyList(FormatHeaderData(dataHeader.filter((item: IObject) => item[settingType])));
    setHideKeyList(FormatHeaderData(dataHeader.filter((item: IObject) => !item[settingType])));
  }, [dataHeader, settingType]);

  const ifMinFormatData = (list: KeyListListItemProps[]): KeyListListItemProps[] =>
    list.map(op => {
      op.visible = list.length === 1 ? false : true;
      return op;
    });

  const showChange = (item: KeyListListItemProps, checked: boolean, e: Event): void => {
    if (showKeyList.length === 1) {
      const showList: KeyListListItemProps[] = [{ ...item, visible: false }];
      setShowKeyList(showList);
      getResult(showList, hideKeyList);
    } else {
      const showList: KeyListListItemProps[] = ifMinFormatData(
        showKeyList.filter(op => op.name !== item.name),
      );
      const hideList: KeyListListItemProps[] = [{ ...item, visible: false }, ...hideKeyList];
      setHideKeyList(hideList);
      setShowKeyList(showList);
      getResult(showList, hideList);
    }
  };

  const hideChange = (item: KeyListListItemProps, checked: boolean, e: Event): void => {
    if (showKeyList.length < 10) {
      // 正常切换
      const showList: KeyListListItemProps[] = ifMinFormatData([
        ...showKeyList,
        { ...item, visible: true },
      ]);
      const hideList: KeyListListItemProps[] = hideKeyList.filter(op => op.name !== item.name);
      setShowKeyList(showList);
      setHideKeyList(hideList);
      getResult(showList, hideList);
    } else {
      message.warning('显示字段最多10个');
    }
  };

  const itemMove = (dragIndex: number, hoverIndex: number) => {
    const dragRow = showKeyList[dragIndex];
    const changedShowKeyList: KeyListListItemProps[] = update(showKeyList, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
    });
    setShowKeyList(changedShowKeyList);
    getResult(changedShowKeyList, hideKeyList);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.showListWrap}>
        <div className={styles.title}>
          <span>显示字段</span>
          <span>最多10个字段</span>
        </div>
        <div className={styles.listWrap}>
          <DndProvider backend={HTML5Backend}>
            {showKeyList.map((item, index) => (
              <ListItem
                key={item.key}
                index={index}
                styles={styles}
                item={item}
                itemMove={itemMove}
                showChange={showChange}
                length={showKeyList.length}
              />
            ))}
          </DndProvider>
        </div>
      </div>

      <div className={styles.hideListWrap}>
        <div className={styles.title}>
          <span>隐藏字段</span>
        </div>
        <div className={styles.listWrap}>
          {hideKeyList.map(item => (
            <div className={styles.optionWrap} key={item.name}>
              <span>{item.name}</span>
              <Switch
                checkedChildren="开"
                unCheckedChildren="关"
                checked={item.visible}
                onChange={(checked, eve) => hideChange(item, checked, eve)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyList;
