export interface KeyListProps {
  /** 数据源*/
  dataHeader: Object[];
  /** 设置哪个类型的字段*/
  settingType: 'header_visible' | 'searchbar_visible';
  /** 获取显示和隐藏字段*/
  getResult: (showKeyList: KeyListListItemProps[], hideKeyList: KeyListListItemProps[]) => void;
}

export interface KeyListListItemProps {
  name: string;
  key: string;
  visible: boolean;
}
