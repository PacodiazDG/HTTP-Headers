'use strict';
/** **************************************************************************/
async function CheckDebugger(params) {
  console.log((await chrome.storage.local.get(['status'])).status);
  if (((await chrome.storage.local.get(['status'])).status)  === false) {
    document.getElementById('Debugger').checked = false;
  } else {
    document.getElementById('Debugger').checked = true;
  }
}

/** *************************************************************************/
chrome.tabs.query({
  active: true,
  currentWindow: true,
}, async (tabs) => {
  CheckDebugger();
  const hostname = getHostname(tabs[0].url);
  const CDN = document.getElementById('CDN');

  hostname
  CDN.addEventListener('click', () => {
    window.open(`https://www.shodan.io/search?query=${hostname}`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://securitytrails.com/domain/${hostname}/dns`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://dnsdumpster.com/`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://censys.io/ipv4?q=${hostname}&`, '_blank', 'toolbar=0,menubar=0,location=0');
    window.open(`https://www.zoomeye.org/searchResult?q=${hostname}`, '_blank', 'toolbar=0,menubar=0,location=0');
  }, false);
  /** ********************************************************************/
  const whois = document.getElementById('Whois');
  whois.addEventListener('click', () => {
    ipapi(hostname);
  }, false);
  /** *************************************************************************/
  const parms = document.getElementById('parms');
  parms.addEventListener('click', () => {
    window.open(`Change URL parameters.html?q=${btoa(tabs[0].url)}`, '_blank');
  }, false);

  /** ***********************************************************************/

  const browsingData = document.getElementById('browsingData');
  browsingData.addEventListener('click', () => {
    const url = new URL(tabs[0].url);
    const domain = `${url.origin}`;
    chrome.browsingData.remove({
      'origins': [domain],
    }, {
      'cacheStorage': true,
      'cookies': true,
      'fileSystems': true,
      'indexedDB': true,
      'localStorage': true,
      'pluginData': true,
      'serviceWorkers': true,
      'webSQL': true,
    });
  }, false);

  /** ************************************************************************/

  const Debugger = document.getElementById('Debugger');
  Debugger.addEventListener('click', () => {
    const ok = document.getElementById('Debugger');
    if (ok.checked) {
      chrome.storage.local.set({status: true});
    } else {
      chrome.storage.local.set({status: false});
    }
  }, false);
});

/** ***********************************************************************/

chrome.tabs.query({
  active: true,
  currentWindow: true,
}, (tabs) => {
  const url0 = tabs[0].url;
  if (localStorage.getItem('DisclaimerAlert') == 'ok') {
    document.getElementById('DisclaimerAlert').remove();
  }
  // HEADHeaders
  const tabname = url0.hostname;
  console.log(tabname);
  header(url0);
  // fun dis
  /** **********************************************************************/
  const Firewall = document.getElementById('WAF');
  Firewall.addEventListener('click', () => {
    let wafurl = tabs[0].url;
    wafurl = wafurl.split('#')[0];
    const local = localStorage.getItem('waflevel');
    const wafpayload1 = '?a=<a>alert();</a>';
    const wafpayload2 = '?<script>alert(document.cookie);</script>';
    const wafpayload3 =
      // eslint-disable-next-line max-len
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
        console.error('Error localstorage is not defined');
    }
  }, false);
  /** **********************************************************************/
});
/** ************************************************************************/

function getHostname(url) {
  return new URL(url).hostname;
}
/** ***********************************************************************/

async function header(url) {
  try {
    document.getElementById('info').innerHTML =
    `<div class="loader">Loading...</div>`;
    const httpmethods = localStorage.getItem('httpmethods');
    const respuestaclass = new Httprequest(url, httpmethods);
    let respuesta = await respuestaclass.httpsend();
    respuesta = xssFilters.inHTMLData(respuesta.getAllResponseHeaders());
    respuesta = respuesta.replace(
        new RegExp('\r?\n', 'g'), '<hr class="style-one">');
    document.getElementById('info').innerHTML = (respuesta);
  } catch (e) {
    document.getElementById('info').innerHTML = (e);
  }
}
/** *****************************************************************/

async function ipapi(host) {
  const respuestaclass = new Httprequest(`http://demo.ip-api.com/json/${host}`, 'GET');
  let rsq = await respuestaclass.httpsend();
  rsq = JSON.parse(rsq.responseText);
  document.getElementById('info').innerHTML =
  `ISP: ${xssFilters.inHTMLData(rsq.isp)}<hr class="style-one">`;
  document.getElementById('info').innerHTML +=
  `Country: ${xssFilters.inHTMLData(rsq.country)}<hr class="style-one">`;
  document.getElementById('info').innerHTML +=
  `RegionName: ${xssFilters.inHTMLData(rsq.regionName)}<hr class="style-one">`;
  document.getElementById('info').innerHTML +=
  `ISP: ${xssFilters.inHTMLData(rsq.country)}<hr class="style-one">`;
  return;
}
