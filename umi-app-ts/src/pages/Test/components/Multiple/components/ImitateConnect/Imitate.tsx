
// 本文件是一个独立的文件，与排序无关
// 仿照connect方式

import React from 'react';

export const Imitate = (props) => {
  const PropsVal = props();
  return (Components) => {
    // 此处注意返回数据的类型
    // return <Components {...PropsVal}/>
    // 下面的方式
    return () => {
      return <Components {...PropsVal}/>
    };
  }
}
