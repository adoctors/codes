// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportConfigs from '../../../app/controller/configs';
import ExportHome from '../../../app/controller/home';
import ExportRule2 from '../../../app/controller/rule2';

declare module 'egg' {
  interface IController {
    configs: ExportConfigs;
    home: ExportHome;
    rule2: ExportRule2;
  }
}
