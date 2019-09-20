// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportRule from '../../../app/model/Rule';

declare module 'egg' {
  interface IModel {
    Rule: ReturnType<typeof ExportRule>;
  }
}
