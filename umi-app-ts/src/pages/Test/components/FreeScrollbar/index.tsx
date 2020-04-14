import React from 'react';
import FreeScrollBar from 'react-free-scrollbar';
// 文档：https://github.com/fuermosi777/react-free-scrollbar

const FreeScrollbar = () => {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: 300, flex: 'auto' }}>
        <FreeScrollBar autohide={true} timeout={1000}>
          <h1>The title</h1>
          <p style={{ height: 200 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p style={{ height: 350 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p style={{ height: 130 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p style={{ height: 220 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p style={{ height: 80 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </FreeScrollBar>
      </div>
      {/* 不滚动时即使鼠标在滚动条上，滚动条也会消失 */}
      <div style={{ width: 300, height: 300, border: '1px solid #E7E9EC' }}>
        <FreeScrollBar autohide={true} timeout={1000}>
          <div style={{ padding: 10 }}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </FreeScrollBar>
      </div>
    </div>
  );
};

export default FreeScrollbar;
