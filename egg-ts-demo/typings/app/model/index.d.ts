// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCalls from '../../../app/model/Calls';
import ExportConfigs from '../../../app/model/Configs';
import ExportRule from '../../../app/model/Rule';
import ExportRule2 from '../../../app/model/Rule2';

declare module 'egg' {
  interface IModel {
    Calls: ReturnType<typeof ExportCalls>;
    Configs: ReturnType<typeof ExportConfigs>;
    Rule: ReturnType<typeof ExportRule>;
    Rule2: ReturnType<typeof ExportRule2>;
  }
}
