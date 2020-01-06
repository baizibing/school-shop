// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCar = require('../../../app/controller/car');
import ExportHome = require('../../../app/controller/home');
import ExportSearch = require('../../../app/controller/search');
import ExportShop = require('../../../app/controller/shop');
import ExportUeditor = require('../../../app/controller/ueditor');
import ExportUpload = require('../../../app/controller/upload');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    car: ExportCar;
    home: ExportHome;
    search: ExportSearch;
    shop: ExportShop;
    ueditor: ExportUeditor;
    upload: ExportUpload;
    user: ExportUser;
  }
}
