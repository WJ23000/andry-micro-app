/**
 * Created by toony on 2017/8/13.
 */
/**
 *  获取本地储存内容(sessionStorage和localStorage)
 * @param storageName String (需要获取的名字)
 * @param type String (获取类型： session或者local)
 */
const storeType = "local";
const getStorage = function(storageName: string, type = storeType) {
  if (type === "session") {
    if (window.sessionStorage.getItem(storageName)) {
      if (/{|\[/.test(window.sessionStorage.getItem(storageName) as string)) {
        return JSON.parse(window.sessionStorage.getItem(storageName) as string);
      } else return window.sessionStorage.getItem(storageName);
    } else {
      return false;
    }
  } else {
    const item = localStorage.getItem(storageName);
    if (item && item != "null") {
      if (/{|\[/.test(window.localStorage.getItem(storageName) as string)) {
        return JSON.parse(window.localStorage.getItem(storageName) as string);
      } else {
        return window.localStorage.getItem(storageName);
      }
    } else {
      return false;
    }
  }
};

/**
 *  储存到本地储存
 * @param storageName String (本地储存名称)
 * @param params Object (需要储存的数据)
 * @param type String (储存类型 session或者local)
 */
const setStorage = function(
  storageName: string,
  params: any,
  type = storeType
) {
  let str: any;
  // 判断params是否为字符串
  if (Object.prototype.toString.call(params) === "[object String]") {
    str = params;
  } else {
    str = JSON.stringify(params);
  }
  if (type === "session") {
    window.sessionStorage.setItem(storageName, str);
  } else {
    window.localStorage.setItem(storageName, str);
  }
};

const removeStorage = function(storageName: string, type = storeType) {
  if (type === "session") {
    window.sessionStorage.removeItem(storageName);
  } else {
    window.localStorage.removeItem(storageName);
  }
};
export { getStorage, setStorage, removeStorage };
