import React from 'react';
import { Icon } from 'antd';
import { ModalProps } from 'antd/lib/modal/Modal.d';
import MyModal from '@/components/MyModal/MyModal';
import styles from './DelModal.less';

interface IProps extends ModalProps {
  /** 对话框内容*/
  content: string;
  /** true为删除代码块,false为Modal*/
  isContent?: boolean;
  [key: string]: any;
}

const DelModal = (props: IProps) => {
  const DelCon = (
    <div className={styles._modalDelCon}>
      <div className="fz24" style={{ color: '#999' }}>
        <Icon type="exclamation-circle" />
      </div>
      <div style={{ marginBottom: 30 }}>{props.content}</div>
    </div>
  );

  if (props.isContent) return DelCon;

  return <MyModal {...props} content={DelCon} wrapClassName={styles.DelModal} />;
};

export default DelModal;
