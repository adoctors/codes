import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';
import { ConnectState } from './connect.d';

export const namespace = 'global';

export interface GlobalModelState {
  collapsed: boolean;
}

interface IEffect {
  [key: string]: Effect;
}

interface IReducer {
  [key: string]: Reducer<GlobalModelState>;
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: IEffect;
  reducers: IReducer;
  subscriptions: {};
}

const GlobalModel: GlobalModelType = {
  namespace,

  state: {
    collapsed: false,
  },

  effects: {},

  reducers: {
    changeLayoutCollapsed(state = { collapsed: true }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
  },

  subscriptions: {},
};

export default GlobalModel;
