// eslint-disable-next-line no-unused-vars
class Httprequest {
  constructor(url, methods) {
    this.url = url;
    this.methods = methods;
  }
  isValidURL(str) {
    try {
      new URL(str);
      return true;
    } catch (_) {
      return false;
    }
  }
  httpsend(url, methods) {
    const url2 = this.url;
    const methods2 = this.methods;
    if (!this.isValidURL(url2)) {
      throw new Error("No Valid URL");
    }
    return new Promise(function (resolve, reject, url) {
      const xhr = new XMLHttpRequest();
      xhr.open(methods2, url2);
      xhr.onload = function () {
        if (this.readyState === 4) {
          resolve(xhr);
        } else {
          reject(new Error("The server rejected the connection"));
          re;
        }
      };
      xhr.onerror = () => {
        reject(new Error("The server rejected the connection (Pack level)"));
      };
      xhr.timeout = 9000;
      xhr.ontimeout = () => {
        reject(new Error("Request Timed Out"));
      };
      xhr.send(null);
    });
  }
}
