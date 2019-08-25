import React from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button } from 'antd';
import { ConnectProps } from '@/models/connect';
import styles from './Login.less';

import logo from '../../assets/dt_logo.png';

interface IProps extends ConnectProps {
  [key: string]: any;
}

const Login = (props: IProps): React.ReactElement => {
  const {
    form: { getFieldDecorator, validateFields },
    dispatch,
  } = props;

  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values, dispatch);
        if (dispatch) {
          dispatch({
            type: 'common/login',
            payload: {
              apiName: 'login',
              reqType: 'POST',
              bodyData: values,
            },
            successCallback: res => {
              // console.log(res)
            },
          });
        }
      }
    });
  };

  return (
    <div className={styles.LoginWrap}>
      <div className={styles.LoginConWrap}>
        <div className={styles.LogoWrap}>
          <img src={logo} alt="" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="账户"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />,
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

// export default Form.create()(Login);
export default connect(({}) => ({}))(Form.create()(Login));
