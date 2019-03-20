import axios from 'axios';
import _ from 'lodash';
import Vue from 'vue';
import { LoadingPlugin } from 'vux';

Vue.use(LoadingPlugin);

class baseModel {
  constructor() {
    this.ajaxLoading = true;
    this.url = '';
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
    this.ajaxLoading && this._showLoading();
    this.axiosInstance = axios.create({
      url: this.url,
      method: this.method,
      params: this.params, // get
      data: this.data, // post
      baseURL: '',
      headers: {'X-Requested-With': 'XMLHttpRequest'},
    })
    
    return new Promise((resolve, reject) => {
      this.axiosInstance().then((res) => {
        this.ajaxLoading && this._hideLoading()
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  _showLoading(title = '加载中..') {
    Vue.$vux.loading.show()
  }

  _hideLoading() {
    Vue.$vux.loading.hide()
  }
}

export {
  baseModel
}