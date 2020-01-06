// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportCar = require('../../../app/service/car');
import ExportHome = require('../../../app/service/home');
import ExportSearch = require('../../../app/service/search');
import ExportShop = require('../../../app/service/shop');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    car: ExportCar;
    home: ExportHome;
    search: ExportSearch;
    shop: ExportShop;
    user: ExportUser;
  }
}
