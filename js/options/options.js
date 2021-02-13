import {entrypoint} from './entrypoint.js'

document.addEventListener('DOMContentLoaded', () => {
  entrypoint();
  /*******************************************************************************************/
  var waflevel = document.getElementById('waflevel');
  waflevel.addEventListener('change', () => {
    localStorage.setItem("waflevel", (document.getElementById("waflevel").value));
  });
  /*******************************************************************************************/
  var Debugging1 = document.getElementById('Debugging1');
  Debugging1.addEventListener('click', () => {
    if (Debugging1.checked) {
      localStorage.setItem("Debugging1", "true");
    } else {
      localStorage.setItem("Debugging1", "false");
    }
  });
  /******************************************************************************************/
  /*******************************************************************************************/
  var Debugging2 = document.getElementById('Debugging2');
  Debugging2.addEventListener('click', () => {
    if (Debugging2.checked) {
      localStorage.setItem("Debugging2", "true");
    } else {
      localStorage.setItem("Debugging2", "false");
    }
  });
  /*******************************************************************************************/
  var Debugging3 = document.getElementById('Debugging3');
  Debugging3.addEventListener('click', () => {
    if (Debugging3.checked) {
      localStorage.setItem("Debugging3", "true");
    } else {
      localStorage.setItem("Debugging3", "false");
    }
  });
  /******************************************************************************************/
  var Debugging4 = document.getElementById('Debugging4');
  Debugging4.addEventListener('click', () => {
    if (Debugging4.checked) {
      localStorage.setItem("Debugging4", "true");
    } else {
      localStorage.setItem("Debugging4", "false");
    }
  });
  /******************************************************************************************/
  var apikeyshodan = document.getElementById('shodanapikeygo');
  apikeyshodan.addEventListener('click', () => {
    localStorage.setItem("keyshodan", (document.getElementById("shodanapikey").value));
    var apikeyi = document.getElementById('apikeyi');
    apikeyi.remove();
  });
  /******************************************************************************************/
  var _0x = document.getElementById('_0x');
  _0x.addEventListener('click', () => {
    var comm = document.getElementById("varcommand").value;
    try
    {
      var myobj = JSON.parse(comm);
      Object.keys(myobj.vars).forEach(function(key) {
        console.log(myobj.vars[key]);
      });
      if (comm.includes("'")) {
        document.getElementById("dangerous").innerText = "No valid";
        return 0;
      }
    } catch (a) {
      document.getElementById("dangerous").innerText = "No valid";
      return 0;
    }
    localStorage.setItem("varcommand", (comm));
    document.getElementById("dangerous").innerText = "";
  });
  /******************************************************************************************/
  var Enableshodan1 = document.getElementById('Enableshodan1');
  Enableshodan1.addEventListener('click', () => {
    if (Enableshodan1.checked) {
      localStorage.setItem("Enableshodan1", "true");
    } else {
      localStorage.setItem("Enableshodan1", "false");
    }
  });
/******************************************************************************************/
    var UserAgent1 = document.getElementById('UserAgent1');
  UserAgent1.addEventListener('click', () => {
    if (UserAgent1.checked) {
      localStorage.setItem("UserAgent1", "true");
    } else {
      localStorage.setItem("UserAgent1", "false");
    }
  });
/******************************************************************************************/
var UserAgent1javasc1 = document.getElementById('UserAgent1javasc1');
  UserAgent1javasc1.addEventListener('click', () => {
    if (UserAgent1javasc1.checked) {
      localStorage.setItem("UserAgent1javasc1", "true");
    } else {
      localStorage.setItem("UserAgent1javasc1", "false");
    }
  });

/******************************************************************************************/
   var UserAgentok = document.getElementById('UserAgentok');
  UserAgentok.addEventListener('click', () => {
    var comm = document.getElementById("UserAgents").value;
    localStorage.setItem("User-Agent", (comm));

  });
  /******************************************************************************************/
  document.getElementById('Methods').addEventListener('change', (e) => {
    localStorage.setItem("httpmethods", e.target.value);
    document.getElementById("currentmethods").textContent = e.target.value;
  });
  /******************************************************************************************/
  document.getElementById('Theme').addEventListener('change', (e) => {
    localStorage.setItem("Theme", e.target.value);
  });
  /******************************************************************************************/
  var ProxyEnable = document.getElementById('ProxyEnabe1');
  ProxyEnable.addEventListener('click', () => {
    if (ProxyEnable.checked) {
      localStorage.setItem("ProxyEnabe1", "true");
      var config = {
        mode: "fixed_servers",
        rules: {
          singleProxy: {
            scheme: "http",
            host: 	"localhost",		// Proxy IP or URL: type -> string
            port: 	8080		// Proxy port : type -> int
          },
          bypassList: ["localhost"]
        }
      };
     // chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
    } else {
      localStorage.setItem("ProxyEnabe1", "false");
      var config = {
        mode: "system"
      };
    //  chrome.proxy.settings.set({value: config, scope: "regular"}, function() {});
    }
  });
});
/******************************************************************************************/