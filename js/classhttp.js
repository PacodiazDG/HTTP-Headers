class httprequest {
  constructor(url, methods) {
    this.url = url;
    this.methods = methods;
  }
  httpsend(url, methods) {
    var url2 = this.url;
    var methods2 = this.methods;
    return new Promise(function(resolve, reject, url) {
      let xhr = new XMLHttpRequest();
      xhr.open(methods2, url2);
      xhr.onload = function() {
        if (this.readyState === 4) {
          resolve(xhr);
        } else {
          reject("Error");
        }
      };
      xhr.onerror = function() {
        reject("Error");
      };
      xhr.timeout = 4000;
      xhr.ontimeout = function() {
        reject("Timed out!!!");
      }
      xhr.send(null);
    });
  }
}