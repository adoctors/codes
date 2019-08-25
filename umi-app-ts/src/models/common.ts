import { Reducer } from 'redux';
import { Effect } from 'dva';
import { ConnectState } from './connect.d';
import requestApi from '../utils/request/serviceApi';

export const namespace = 'common';

export interface CommonModelState {
  collapsed: boolean;
}

interface IEffect {
  [key: string]: Effect;
}

interface IReducer {
  [key: string]: Reducer<CommonModelState>;
}

export interface CommonModelType {
  namespace: 'common';
  state: CommonModelState;
  effects: IEffect;
  reducers: IReducer;
}

const CommonModel: CommonModelType = {
  namespace,

  state: {
    collapsed: false,
  },

  effects: {
    *login({ payload, successCallback, failCallback }, { call, put }) {
      console.log(payload)
      const { data } = yield call(requestApi, { ...payload, namespace });
      console.log(data)
      // if (data.code === 0) {
      //   successCallback();
      // } else {
      //   const errMsg = data.message || data.code;
      //   failCallback && failCallback(errMsg);
      // }
    },
  },

  reducers: {
    save(state: any, { payload = {} }) {
      return { ...state, ...payload };
    },
  },
};

export default CommonModel;
