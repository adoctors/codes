import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Rate,
  Checkbox,
  Row,
  Col,
} from 'antd';

import styles from './BaseForm.less';

const { Option } = Select;

const BaseForm = props => {
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
    <div className={styles.BaseFormWrap}>
      <Form {...formItemLayout} onSubmit={handleSubmit}>
        <Form.Item label="Plain Text">
          <span className="ant-form-text">China</span>
        </Form.Item>
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

        <Form.Item label="Select[multiple]">
          {getFieldDecorator('select-multiple', {
            rules: [
              { required: true, message: 'Please select your favourite colors!', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Please select favourite colors">
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item label="InputNumber">
          {getFieldDecorator('input-number', { initialValue: 3 })(<InputNumber min={1} max={10} />)}
          <span className="ant-form-text"> machines</span>
        </Form.Item>

        <Form.Item label="Switch">
          {getFieldDecorator('switch', { valuePropName: 'checked' })(<Switch />)}
        </Form.Item>

        <Form.Item label="Slider">
          {getFieldDecorator('slider')(
            <Slider
              marks={{
                0: 'A',
                20: 'B',
                40: 'C',
                60: 'D',
                80: 'E',
                100: 'F',
              }}
            />,
          )}
        </Form.Item>

        <Form.Item label="Radio.Group">
          {getFieldDecorator('radio-group')(
            <Radio.Group>
              <Radio value="a">item 1</Radio>
              <Radio value="b">item 2</Radio>
              <Radio value="c">item 3</Radio>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="Radio.Button">
          {getFieldDecorator('radio-button')(
            <Radio.Group>
              <Radio.Button value="a">item 1</Radio.Button>
              <Radio.Button value="b">item 2</Radio.Button>
              <Radio.Button value="c">item 3</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item label="Checkbox.Group">
          {getFieldDecorator('checkbox-group', {
            initialValue: ['A', 'B'],
          })(
            <Checkbox.Group style={{ width: '100%' }}>
              <Row>
                <Col span={8}>
                  <Checkbox value="A">A</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox disabled={true} value="B">
                    B
                  </Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">C</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">D</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">E</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>,
          )}
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

export default Form.create({ name: 'validate_other' })(BaseForm);
