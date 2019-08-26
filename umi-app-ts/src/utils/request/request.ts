import React from 'react';
import request, { extend } from 'umi-request';
import { message } from 'antd';
import { getLocalItem, setLocalItem } from '@/utils/storage/index';

interface ICode {
  [key: number]: string;
}

const codeMessage: ICode = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const customCodeMsg: ICode = {
  10003: '服务内部错误',
  10004: '没有权限',
  10005: '非法的请求方式',
  10001: '参数错误',
  10002: 'json解析错误',
  10101: 'business不存在',
  10102: 'staff不存在',
  10103: 'rule不存在',
  10104: '上传文件失败',
  10105: '文件不存在',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: any) => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const { status, url, type } = response;
  if (type === 'opaqueredirect') window.open(url);
  console.log(`请求错误 ${status}:${url}，${errortext}`);
};

/**
 * 配置request请求时的默认参数
 */
const extendRequest = extend({
  errorHandler, // 默认错误处理
  prefix: '/api',
  redirect: 'manual',
  // credentials: 'include', // 默认请求是否带上cookie
});

request.interceptors.request.use((url, options) => {
  const Authorization = getLocalItem('token');
  if (!Authorization) options.headers = { Authorization };
  return { options };
});

request.interceptors.response.use(response => {
  const disposition = response.headers && response.headers.get('content-disposition');
  if (disposition) {
    const filename = disposition.split('=')[1];
    response
      .clone()
      .blob()
      .then(blob => {
        const eleLink = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        eleLink.href = url;
        eleLink.download = decodeURIComponent(filename);
        document.body.appendChild(eleLink);
        eleLink.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(eleLink);
      });
  }
  return response;
});

export default async (url: string, option: any) => {
  interface isObject {
    [key: string]: any;
  }
  const data: isObject = (await extendRequest(url, option)) || {};
  if (data.code) console.log(customCodeMsg[data.code]);
  switch (data.code) {
    case 10003:
      message.warn('数据异常，请刷新重试', 10);
      if (!data.data) data.data = {};
      break;
    case 10004:
    case 10005:
      setLocalItem('logout', true);
      break;
    default:
      break;
  }
  return { data };
};
