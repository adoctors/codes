import React, { useEffect, useState } from 'react';

import { Input } from 'antd';

// 非class组件React.forwardRef可以访问到ref的用法
const ComFormHooks = React.forwardRef((props: any, ref: any) => {
  const { value } = props;  // form表单的初始值

  const [iptVal, setIptVal] = useState<string>('');

  const triggerChange = changedValue => {
    // 将值发送给父组件
    const { onChange } = props;
    if (onChange) {
      onChange({
        // iptVal,    // 也可传多余的值
        ...changedValue,
      });
    }

    // if(onChange) onChange(changedValue)

  };

  const iptChange = e => {
    const hookVal = e.target.value;
    setIptVal(hookVal);   // 本组建内赋值
    triggerChange({ hookVal });   // 传递给父组件
  };

  useEffect(() => {
    // 初始父级给的值
    const { hookVal } = value;
    setIptVal(hookVal);
  }, [value]);

  return (
    <div ref={ref}>
      <Input
        type="text"
        value={iptVal}
        onChange={iptChange}
        style={{ width: '65%', marginRight: '3%' }}
      />
    </div>
  );
});

export default ComFormHooks;

