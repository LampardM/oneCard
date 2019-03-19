import { baseModel } from './baseModel';
import { accessModel } from './accessModel';

class Getaccess extends accessModel {
  constructor(options) {
    super(options);
    this.method = 'get';
    this.desc = '获取微信授权网页access_token';
  }
}
class Pipe extends baseModel {
  constructor(options) {
    super(options);
    this.url = '15045/json/pipe';
    this.method = 'get';
    this.desc = '通用pipe接口';
    this.ajaxLoading = true;
  }
}

export {
  Pipe,
  Getaccess
}