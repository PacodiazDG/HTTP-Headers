/*

*/
/** ***********************************************/
let golb = 0;
let params;
/** ***********************************************/
function gos() {
  document.getElementById('url').value = params.split('?')[0] + '?';
  for (let i = 1; i <= golb; i++) {
    if (i % 2 == 0) {
      console.log(document.getElementById(i));
      document.getElementById('url').value +=
      `${encodeURIComponent(document.getElementById(i).value)}`;
    } else {
      if (i > 2) {
        document.getElementById('url').value +=
         `&${document.getElementById(i).innerText}=`;
      } else {
        document.getElementById('url').value +=
        `${document.getElementById(i).innerText}=`;
      }
    }
  }
}
/** ***********************************************/

function getSearchParameters() {
  const prmstr = window.location.search.substr(1);
  return prmstr != null && prmstr != '' ? transformToAssocArray(prmstr) : {};
}
/** ***********************************************/

function transformToAssocArray(prmstr) {
  const params = {};
  const prmarr = prmstr.split('&');
  for (let i = 0; i < prmarr.length; i++) {
    const tmparr = prmarr[i].split('=');
    params[tmparr[0]] = tmparr[1];
  }
  return params;
}
/** ***********************************************/
// eslint-disable-next-line max-len
const getUrlParams = (url) => `${url}?`.split('?')[1].split('&').reduce((params, pair) => ((key, val) => key ? {
  ...params,
  [key]: val,
} : params)(...`${pair}=`.split('=').map(decodeURIComponent)), {});
/** ***********************************************/
chrome.tabs.query({
  'active': true,
  'lastFocusedWindow': true,
}, function(tabs) {
  params = getSearchParameters();
  params = atob(params.q);
  document.getElementById('root').innerHTML =
   `<div class="alert alert-light" role="alert"><p class="text">
 ${xssFilters.inHTMLData(params)}</p>
</div>`;
  document.getElementById('url').value = params.split('?')[0] + '?';
  const params2 = getUrlParams(params);
  console.log(params2);
  let jsonparams = JSON.stringify(params2);
  jsonparams = JSON.parse(jsonparams);
  let n = 0;
  // eslint-disable-next-line guard-for-in
  for (const k in jsonparams) {
    document.getElementById('root').innerHTML +=
     `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="${golb = golb + 1}">
    ${xssFilters.inUnQuotedAttr(Object.keys(params2)[n])}</span>
  </div>
  <input type="text" class="form-control" value="${
  xssFilters.inUnQuotedAttr(jsonparams[k])}" id="${golb = golb + 1}">
  <div class="input-group-append">
  </div>
</div>
   `;
    n++;
  }
  /** ***********************************************/

  const go = document.getElementById('Go');
  go.addEventListener('click', () => {
    gos();
  }, false);
  const Changeurl = document.getElementById('Changeurl');
  Changeurl.addEventListener('click', () => {
    const url = prompt('Url:', '');
    if (url!='') {
      window.location.href = '/Change%20URL%20parameters.html?q=' + btoa(url);
    }
  }, false);
});
/** ***********************************************/
/** ***********************************************/
