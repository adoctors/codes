// 将Form.Item包裹起来

import React from 'react';
import { Form, Switch, Rate } from 'antd';

const ComFormItem = props => {
  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <div>
      <Form.Item label="Switch-com" {...formItemLayout}>
        {getFieldDecorator('switch-com', { valuePropName: 'checked' })(<Switch />)}
      </Form.Item>

      <Form.Item label="Rate-com" {...formItemLayout}>
        {getFieldDecorator('rate-com', {
          initialValue: 3.5,
        })(<Rate />)}
      </Form.Item>
    </div>
  );
};

export default ComFormItem;
