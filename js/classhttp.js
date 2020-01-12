class httprequest {
  constructor(url, methods) {
    this.url = url;
    this.methods = methods;
  }
  isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };
  httpsend(url, methods) {
    var url2 = this.url;
    var methods2 = this.methods;
    if (!this.isValidURL(url2)) {
      throw "No Valid URL";
      return;
    }
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
      xhr.onerror = () => {
        reject("Error");
      };
      xhr.timeout = 9000;
      xhr.ontimeout = () => {
        reject("Timed out!!!");
      }
      xhr.send(null);
    });
  }
}