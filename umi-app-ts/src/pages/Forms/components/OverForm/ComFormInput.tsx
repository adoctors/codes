import React from 'react';

import { Input, } from 'antd';


class ComFormInput extends React.Component {

  static getDerivedStateFromProps(nextProps) {
    // console.log(nextProps)
    // Should be a controlled component.
    if ('value' in nextProps) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    const value = props.value || {};
    this.state = {
      number: value.number || 0,
    };
  }

  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (isNaN(number)) {
      return;
    }
    if (!('value' in this.props)) {
      this.setState({ number });
    }
    this.triggerChange({ number });
  };


  triggerChange = changedValue => {
    // console.log(changedValue)
    // Should provide an event to pass value to Form.
    const { onChange } = this.props;
    if (onChange) {
      onChange({
        ...this.state,
        ...changedValue,
      });
    }
  };

  render() {
    const {  number } = this.state;
    return (
      <span>
        <Input
          type="text"
          value={number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
      </span>
    );
  }
}

export default ComFormInput;
