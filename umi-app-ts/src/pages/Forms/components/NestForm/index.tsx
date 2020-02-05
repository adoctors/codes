import React from 'react';
import { Form, Select, Switch, Button, Rate } from 'antd';
import ComFormItem from './ComFormItem';
import ComChildForm from './ComChildForm';

const { Option } = Select;

const NestForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  return (
    <Form {...formItemLayout} style={{width:500}} onSubmit={handleSubmit}>
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

      <Form.Item label="Switch">
        {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
      </Form.Item>

      <Form.Item label="Rate">
        {getFieldDecorator('rate', {
          initialValue: 3.5,
        })(<Rate />)}
      </Form.Item>

      <ComFormItem form={props.form} />

      {/* Warning: validateDOMNesting(...): <form> cannot appear as a descendant of <form>. */}
      {/* <ComChildForm /> */}

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: 'validate_other' })(NestForm);
