/**
 * 缓存
 */

class oneCardStorage {
  constructor(options) {
    if(!window.localStorage) {
      return false
    } else {
      this.storage = window.localStorage
    }
  }

  // expires 过期时间单位为天
  setStorage(key, value, expires) {
    const curtime = Date.now();
    const storagetime = curtime + expires * 24 * 60 * 60 * 1000;

    this.storage.setItem(key, JSON.stringify({
      data: value,
      expirestime: storagetime
    }))
  }

  getStorage(key) {
    const data = JSON.parse(this.storage.getItem(key));
    const gettime = Date.now()

    if(data) {
      if(gettime > data.expirestime) {
        console.warn('缓存超时')
      } else {
        return data
      }
    } else {
      return false
    }
  }

  removeStorage(key) {
    this.removeItem(key)
  }
}

export default oneCardStorage