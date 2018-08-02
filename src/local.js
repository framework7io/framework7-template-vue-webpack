import configs from './configs.js'

export default {
  set(key, value) {
    try {
      value = JSON.stringify(value);
    } catch (e) {
      value = value;
    }
    window.localStorage.setItem(configs.key_prefix + key, value);
  },
  get(key) {
    if (!key) {
      throw new Error('没有找到key。');
      return;
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。');
      return;
    }
    var value = window.localStorage.getItem(configs.key_prefix + key);
    if (value !== null) {
      try {
        value = JSON.parse(value);
      } catch (e) {
        value = value;
      }
    }
    return value;
  },
  remove(key) {
    window.localStorage.removeItem(configs.key_prefix + key);
  },
  setSession(key, value) {
    try {
      value = JSON.stringify(value);
    } catch (e) {
      value = value;
    }
    window.sessionStorage.setItem(configs.key_prefix + key, value);
  },
  getSession(key) {
    if (!key) {
      throw new Error('没有找到key。');
      return;
    }
    if (typeof key === 'object') {
      throw new Error('key不能是一个对象。');
      return;
    }
    var value = window.sessionStorage.getItem(configs.key_prefix + key);
    if (value !== null) {
      try {
        value = JSON.parse(value);
      } catch (e) {
        value = value;
      }
    }
    return value;
  },
  removeSession(key) {
    window.sessionStorage.removeItem(configs.key_prefix + key);
  }
}
