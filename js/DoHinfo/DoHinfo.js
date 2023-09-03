'use strict';

/** **************************************************************/
async function getip(hostname) {
  const resolver = new doh.DohResolver('https://1.1.1.1/dns-query');
  let ipdoh = await resolver.query(hostname, 'A')
    .then(response => {
      return response;
    })
    .catch(err => { throw new Error(err); });
    for (let ipdohinfo of ipdoh.answers) {
      if (ipdohinfo.type == "A") {
        console.log(ipdohinfo.data);
        return ipdohinfo.data;
      }
  }
}

/** ***********************************************************/
async function dnsget(hostname, keyshodan) {
  if (await chrome.storage.sync.get('Enableshodan1') === 'false') {
    document.getElementById('ip').innerHTML =
      `<span class="badge badge-warning">Shodan is disabled</span>`;
    return -1;
  }
  if (keyshodan === '') {
    document.getElementById('ip').innerHTML =
      `<span class="badge badge-warning">There is no api key</span>`;
    return -1;
  }
  let ipaddr=await getip(hostname);
  try {
    document.getElementById('ip').innerHTML =
      `<i class="oi oi-globe"></i> ${xssFilters.inHTMLData(ipaddr)}`;
    return ipaddr;
  } catch (e) {
    document.getElementById('ip').innerHTML =
      `<span class="badge badge-danger">Error</span>`;
  }
}
/** ***************************************************************/
async function getmyipaddres(keyshodan) {
  const respuestaclass = new Httprequest(`https://api.shodan.io/tools/myip?key=${keyshodan}`, 'GET');
  const rsq = await respuestaclass.httpsend();
  document.getElementById('my-ip').innerHTML =
    `<p>My ip addres: ${xssFilters.inHTMLData(rsq.responseText)}</p>`;
  return;
}

chrome.tabs.query({
  active: true,
  currentWindow: true,
}, async (tabs) => {
  const keyshodan = (await chrome.storage.local.get("keyshodan")).keyshodan;
  const url = tabs[0].url;
  const tabname = (new URL(url)).hostname;
  const ipad = dnsget(tabname, keyshodan);
  ipget(ipad, keyshodan);
  setTimeout(getmyipaddres(keyshodan), 2000);
});
/** ***************************************************************/
