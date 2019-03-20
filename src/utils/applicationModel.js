import { baseModel } from './baseModel';

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