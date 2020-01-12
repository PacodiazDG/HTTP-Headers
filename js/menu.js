"use strict";
/******************************************************************************/
if (localStorage.getItem("status") === "false") {
  document.getElementById("Debugger").checked = false;
} else {
  document.getElementById("Debugger").checked = true;
}
/******************************************************************************/
function url2(host) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = host;
  input.focus();
  input.select();
  document.execCommand('Copy');
  input.remove();
}
/******************************************************************************/
chrome.tabs.query({
  active: true,
  currentWindow: true
}, (tabs) => {
  const hostname = getHostname(tabs[0].url);
  var CDN = document.getElementById('CDN');
  CDN.addEventListener('click', () => {
    window.open(`https://www.shodan.io/search?query=${hostname}`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://securitytrails.com/domain/${hostname}/dns`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://dnsdumpster.com/`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://censys.io/ipv4?q=${hostname}&`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://www.zoomeye.org/searchResult?q=${hostname}`, '_blank', 'toolbar=0,menubar=0,location=0');
  }, false);
  /******************************************************************************/
  var url = document.getElementById('url');
  url.addEventListener('click', () => {
    url2(hostname);
  }, false);
  /******************************************************************************/
  var parms = document.getElementById('parms');
  parms.addEventListener('click', () => {
    window.open(`param.html?q=${btoa(tabs[0].url)}`, '_blank');
  }, false);
  /******************************************************************************/
  var nmap = document.getElementById('Nmap');
  nmap.addEventListener('click', () => {
    hackertarget(hostname);
  }, false);
  /******************************************************************************/
  var Debugger = document.getElementById('Debugger');
  Debugger.addEventListener('click', () => {
    var ok = document.getElementById("Debugger");
    if (ok.checked) {
      localStorage.setItem("status", "true");
    } else {
      localStorage.setItem("status", "false");
    }
  }, false);
  /******************************************************************************/
  var DisclaimerAlert = document.getElementById('dis');
  DisclaimerAlert.addEventListener('click', () => {
    localStorage.setItem("DisclaimerAlert", "ok");
  }, false);
});
/******************************************************************************/
chrome.tabs.query({
  active: true,
  currentWindow: true
}, (tabs) => {

   var url0 = tabs[0].url;
console.log(url0)
   var url0 = tabs[0].url;

  if (localStorage.getItem("DisclaimerAlert") == "ok") {
    document.getElementById("DisclaimerAlert").remove();
  }
  //HEADHeaders
  var tabname = url0.hostname;
  console.log(tabname)

  header(url0);
  // fun dis
  /******************************************************************************/
  var Firewall = document.getElementById('WAF');
  Firewall.addEventListener('click', () => {
    var wafurl = tabs[0].url;
    wafurl = wafurl.split('#')[0];
    var local = localStorage.getItem("waflevel");
    var wafpayload1 = '?a=<a>alert();</a>';
    var wafpayload2 = '?<script>alert(document.cookie);</script>';
    var wafpayload3 =
      `?firewalltest?=env x=\'() { :;}; echo IDS/IPS\' bash -c \\\"IPStest\\\"///&&&&WAF=\\\"\\\"),NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL)%20waitfor%20delay%20\'0:0:20\'%20/*\\\"&&XSS=<script>alert(1)</script>&&`;
    switch (local) {
      case '1':
        window.open(`${wafurl}/${wafpayload1}`, '_blank', 'noopener');
        break;
      case '2':
        window.open(`${wafurl}/${wafpayload2}`, '_blank', 'noopener');
        break;
      case '3':
        window.open(`${wafurl}/${wafpayload3}`, '_blank', 'noopener');
        break;
      default:
        console.error("Error localstorage is not defined");
    }
  }, false);
  /******************************************************************************/
});
/******************************************************************************/
function getHostname(url) {
  var url = new URL(url);
  return url.hostname;
}
/******************************************************************************/
async function hackertarget(host) {
  let respuestaclass = new httprequest(`http://api.hackertarget.com/nmap/?q=${host}`, "GET");
  var rsq = await respuestaclass.httpsend();
  document.getElementById("info").innerHTML = xssFilters.inHTMLData(rsq.responseText);
}
/******************************************************************************/
async function header(url) {
  try {
    document.getElementById("info").innerHTML = `<div class="loader">Loading...</div>`;
    var httpmethods = localStorage.getItem("httpmethods");
    var respuestaclass = new httprequest(url, httpmethods);
    var respuesta = await respuestaclass.httpsend();
    respuesta = xssFilters.inHTMLData(respuesta.getAllResponseHeaders());
    respuesta = respuesta.replace(new RegExp('\r?\n', 'g'), '<hr class="style-one">');
    document.getElementById("info").innerHTML = (respuesta);
  }
  catch (e) {
    document.getElementById("info").innerHTML = (e);
  }
}
/*******************************************************************/

