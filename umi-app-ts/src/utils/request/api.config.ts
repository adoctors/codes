interface IApiConfig {
  [key: string]: {
    [key: string]: string;
  };
}

const ApiConfig: IApiConfig = {
  global: {},
  common: {
    login: '/login',
  },
  login: {},
};

export default ApiConfig;
