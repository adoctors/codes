// 本文件是一个独立的文件，与排序无关
// 仿照connect方式

import React from 'react';
import { Imitate } from './Imitate';

// connect使用方式
// connect(({ annotator, common }: IConnectState) => {
//   const {
//     completedAnnotationsByThisWeek,
//     completedAnnotationsByTotay,
//     unqualifiedNumberByThisWeek,
//   } = annotator;
//   const { labelList, staff } = common;
//   return {
//     completedAnnotationsByThisWeek,
//     completedAnnotationsByTotay,
//     unqualifiedNumberByThisWeek,
//     labelList,
//     memberId: staff.id,
//   };
// })(Layout);

// connect(() => ({
//   listLoading: false,
// }))(ClusterIndex);

// 使用
const Layout = props => {
  // console.log('Layout-props:', props);
  return <div>Layout-components-Content</div>;
};

export default Imitate(() => {
  return {
    name: 'Imitate-props-val',
    age: '12',
  };
})(Layout);

// export default Imitate(() => ({
//   listLoading: false,
// }))(Layout);
