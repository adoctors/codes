import router from 'umi/router';
import { parse } from 'qs';

export const getPageQuery = (key = '') => {
  let params = parse(window.location.href.split('?')[1]);
  return key ? params[key] : params;
};

export const updateRoute = (params: object, ifReplace = true, method?: string): void => {
  let query = { ...params };
  if (!ifReplace) {
    const queryParams = getPageQuery();
    query = { ...queryParams, ...params };
  }
  
  (router as any)[method || 'replace']({
    pathname: location ? location.pathname : '',
    query,
  });
};
