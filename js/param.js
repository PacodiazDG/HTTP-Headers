/*

*/
/*************************************************/
var golb=0;
var params;
/*************************************************/
function gos(){
document.getElementById("url").value = params.split('?')[0]+"?";
  for (var i = 1; i <= golb; i++) {
      if(i % 2 == 0) {
            document.getElementById("url").value += `${encodeURIComponent(document.getElementById(i).value)}`;
  }else{
  if(i>2){
                  document.getElementById("url").value += `&${document.getElementById(i).innerText}=`;
      }
      else
      {
              document.getElementById("url").value += `${document.getElementById(i).innerText}=`;

}}}}
/*************************************************/
function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}
/*************************************************/
function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}
/*************************************************/
const getUrlParams = url => `${url}?`.split('?')[1]
  .split('&').reduce((params, pair) =>
    ((key, val) => key ? {...params, [key]: val} : params)
    (...`${pair}=`.split('=').map(decodeURIComponent)), {});
/*************************************************/
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
var url = tabs[0].url;
params=getSearchParameters();
params=atob(params.q);
document.getElementById("root").innerHTML = `<div class="alert alert-primary" role="alert"><p class="text">
 ${xssFilters.inHTMLData(params)}</p>
</div>`;
document.getElementById("url").value = params.split('?')[0]+"?";
var params2=getUrlParams(params);
console.log(params2);
var jsonparams=JSON.stringify(params2);
jsonparams=JSON.parse(jsonparams);
var n=0;
for (var k in jsonparams) {
	 document.getElementById("root").innerHTML += `<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="${golb=golb+1}">${xssFilters.inUnQuotedAttr(Object.keys(params2)[n])}</span>
  </div>
  <input type="text" class="form-control" value="${xssFilters.inUnQuotedAttr(jsonparams[k])}" id="${golb=golb+1}">
  <div class="input-group-append">
  </div>
</div>
	 `;
	 n++;
	}
var go = document.getElementById('Go');
go.addEventListener('click', () =>  {
  gos();
}, false);
});
/*************************************************/


