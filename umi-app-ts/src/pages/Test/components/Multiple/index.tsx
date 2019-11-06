import React, { useState, useEffect, Fragment } from 'react';
import isEqual from 'lodash/isEqual';
import { IObject } from '@/models/common.d';

import ReactDOM from 'react-dom';
import Demo from './demo';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ImitateConnect from './components/ImitateConnect';

const Index = () => {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Demo />
      </DndProvider>
      <ImitateConnect />
    </div>
  );
};

export default Index;
