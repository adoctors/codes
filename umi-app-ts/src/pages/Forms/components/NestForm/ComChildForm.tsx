import React from 'react';
import { connect } from 'dva';
import { Form, Switch, Radio, Slider, Button } from 'antd';
import { ConnectProps } from '@/models/connect';
interface IProps extends ConnectProps {
  [key: string]: any;
}
// form不能直接作为from的子元素
const ComChildForm = (props: IProps) => {
  // console.log(props);
  const { dispatch } = props;
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
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="Child-Switch">
        {getFieldDecorator('child-switch', { valuePropName: 'checked' })(<Switch />)}
      </Form.Item>
      <Form.Item label="Child-Slider">
        {getFieldDecorator('child-slider')(
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
      <Form.Item label="Child-Radio.Group">
        {getFieldDecorator('child-radio-group')(
          <Radio.Group>
            <Radio value="a">item 1</Radio>
            <Radio value="b">item 2</Radio>
            <Radio value="c">item 3</Radio>
          </Radio.Group>,
        )}
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(({ mform }) => ({
  formVals: mform.formVals,
}))(Form.create()(ComChildForm));
