import React, { useEffect } from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';
import classNames from 'classnames';
import { ModalProps } from 'antd/lib/modal/Modal.d';
import styles from './MyModal.less';

interface IProps extends ModalProps {
  /** 对话框内容*/
  content?: JSX.Element;
  [key: string]: any;
}

let ModalWidth: number = 480;

const setWidth = () => {
  const { offsetWidth } = document.body;
  switch (true) {
    case offsetWidth > 1920:
      ModalWidth = 750;
      break;
    case offsetWidth > 1600 && offsetWidth < 1920:
      ModalWidth = 650;
      break;
    case offsetWidth > 1366 && offsetWidth < 1600:
      ModalWidth = 540;
      break;
    case offsetWidth > 1280 && offsetWidth < 1366:
      break;
    case offsetWidth > 768 && offsetWidth < 1280:
      break;
    default:
      ModalWidth = 480;
      break;
  }
  // console.log(document.body.offsetWidth);
  return ModalWidth;
};

const MyModal = (props: IProps): JSX.Element => {
  const { collapsed, content, wrapClassName } = props;

  // useEffect(()=>{
  //   window.addEventListener('resize', setWidth);
  //   return ()=>{
  //     window.removeEventListener('resize', setWidth);
  //   }
  // });

  return (
    <Modal
      width={setWidth()}
      maskStyle={{
        top: 64,
        left: collapsed ? 50 : 200,
      }}
      {...props}
      wrapClassName={classNames(
        styles.MyModal,
        collapsed ? styles.MyModalCollapsedT : styles.MyModalCollapsedF,
        { [props.wrapClassName as string]: !!props.wrapClassName },
      )}
    >
      {content}
      {/* label.width=80 */}
    </Modal>
  );
};

export default connect(({ global }: any) => ({
  collapsed: global.collapsed,
}))(MyModal);
