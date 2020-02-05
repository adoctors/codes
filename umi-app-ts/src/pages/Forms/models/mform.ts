import { Reducer } from 'redux';
import { Effect } from 'dva';
import { IObject } from '@/models/connect.d';
import requestApi from '@/utils/request/serviceApi';

export const namespace = 'mform';

export interface MformModelState {
  formVals: IObject;
}

interface IEffect {
  [key: string]: Effect;
}

interface IReducer {
  [key: string]: Reducer<MformModelState>;
}

export interface MformModelType {
  namespace: 'mform';
  state: MformModelState;
  effects: IEffect;
  reducers: IReducer;
}

const MformModel: MformModelType = {
  namespace,

  state: {
    formVals: {},
  },

  effects: {},

  reducers: {
    save(state: any, { payload = {} }) {
      return { ...state, ...payload };
    },
  },
};

export default MformModel;
