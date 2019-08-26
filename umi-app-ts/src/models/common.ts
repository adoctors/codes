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
      const { data } = yield call(requestApi, { ...payload, namespace });
      if (data.code === 0) {
        successCallback(data.message);
      } else {
        const errMsg = data.message || data.code;
        failCallback && failCallback(errMsg);
      }
    },
  },

  reducers: {
    save(state: any, { payload = {} }) {
      return { ...state, ...payload };
    },
  },
};

export default CommonModel;
