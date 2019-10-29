import path from 'path';
import fs from 'fs';
import moment from 'moment';

export default (config: any) => {
  // if (process.env.NODE_ENV === 'production') {
  //   config.plugin('define').tap(args => {
  //     const pkgPath = path.join(__dirname, '/../package.json');
  //     let pkg = fs.readFileSync(pkgPath);
  //     pkg = JSON.parse(pkg);
  //     const CurrentVersion = `${pkg.version}.${moment()
  //       .utcOffset(8)
  //       .format('YYMMDD.HHmmss')}`;
  //     args[0]['process.env.VERSION'] = JSON.stringify(CurrentVersion);
  //     return args;
  //   });
  // }

  // config.resolve.alias.set('components', path.resolve(__dirname, '../src/components'));

  config.resolve.modules.add(path.resolve(__dirname, '../src/style'));
};
