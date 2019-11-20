// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRule from '../../../app/service/Rule';

declare module 'egg' {
  interface IService {
    rule: ExportRule;
  }
}
