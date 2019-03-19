import axios from 'axios';
import _ from 'lodash';

/** 
 * 获取微信网页授权access_token
*/

class accessModel {
  constructor() {
    this.ajaxLoading = true;
    this.url = '/sns/oauth2/access_token';
    this.method = 'get';
  }

  //设置全局参数
  setParams(params) {
    if(this.method == 'get') {
      this.params = _.extend(this.params, params);
    } else {
      this.data = _.extend(this.data, params);
    }
    return this;
  }

  execute() {
    this.axiosInstance = axios.create({
      url: this.url,
      method: this.method,
      params: this.params, // get
      data: this.data, // post
      baseURL: 'https://api.weixin.qq.com',
      headers: {'X-Requested-With': 'XMLHttpRequest'},
    })
    
    return new Promise((resolve, reject) => {
      this.axiosInstance().then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}

export {
  accessModel
}