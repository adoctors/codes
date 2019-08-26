import request from './request';
import api from './api.config';

/**
 * 通用请求Api方法
 * @param apiName(String)：调用的api名称
 * @param reqType(String)：请求的类型：GET | POST | PUT | DELETE
 * @param placeholerData(Object)：放在占位符上的数据
 * @param queryData(Object)：放在url上的数据
 * @param bodyData(Object)：放在body里的数据
 */

interface IReq {
  method: string;
  params?: object;
  data?: string;
}

interface IObject {
  [key: string]: any;
}

interface IRequestApiParams {
  apiName: string;
  reqType: string;
  placeholerData?: IObject;
  queryData?: object;
  bodyData?: object;
  namespace: string;
}

export default ({
  apiName,
  reqType,
  placeholerData,
  queryData,
  bodyData,
  namespace,
}: IRequestApiParams) => {
  let url = api[namespace][apiName];
  const req: IReq = { method: reqType };

  let params = [];
  if (placeholerData) {
    params = Object.keys(placeholerData);
    for (let i = 0; i < params.length; i += 1) {
      url = url.replace(`:${params[i]}`, placeholerData[params[i]]);
    }
  }

  if (queryData && Object.keys(queryData).length) {
    req.params = queryData;
  }

  if (bodyData && Object.keys(bodyData).length) {
    req.data = JSON.stringify(bodyData);
  }
  return request(url, req);
};
