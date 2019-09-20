import React from 'react';
import { Form, Select, Input, Switch, Button, Rate } from 'antd';
import ComForm from './ComForm';
import ComFormInput from './ComFormInput';
import ComFormHooks from './ComFormHooks';

// 自定义表单控件
// 自定义或第三方的表单控件，也可以与 Form 组件一起使用。只要该组件遵循以下的约定：
// 提供受控属性 value 或其它与 valuePropName 的值同名的属性。
// 提供 onChange 事件或 trigger 的值同名的事件。
// 支持 ref：
// React@16.3.0 之前只有 Class 组件支持。
// React@16.3.0 及之后可以通过 forwardRef 添加 ref 支持。

import styles from '../BaseForm/BaseForm.less';

const { Option } = Select;

const OverForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  };

  const checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };

  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <div className={styles.BaseFormWrap}>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Select" hasFeedback={true}>
          {getFieldDecorator('select', {
            rules: [{ required: true, message: 'Please select your country!' }],
          })(
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="姓名">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入姓名!' }],
            initialValue: '我是默认初始值',
          })(<Input placeholder="请输入姓名!" min={1} max={10} />)}
        </Form.Item>

        <Form.Item label="组件">
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: checkPrice }],
          })(<ComForm />)}
        </Form.Item>

        <Form.Item label="纯组件input">
          {getFieldDecorator('price', {
            initialValue: { number: 0 },
            rules: [{ validator: checkPrice }],
          })(<ComFormInput />)}
        </Form.Item>

        
        <Form.Item label="Hooks">
          {getFieldDecorator('hooks', {
            initialValue: { hookVal: 'parentVal' },
            // rules: [{ validator: checkPrice }],
          })(<ComFormHooks />)}
        </Form.Item>

        <Form.Item label="Switch">
          {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
        </Form.Item>

        <Form.Item label="Rate">
          {getFieldDecorator('rate', {
            initialValue: 3.5,
          })(<Rate />)}
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create({ name: 'validate_other' })(OverForm);
