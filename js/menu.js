"use strict";
const keyshodan=localStorage.getItem("keyshodan");
/******************************************************************************/
if(localStorage.getItem("status")==="false"){
document.getElementById("Debugger").checked = false;
}else{
document.getElementById("Debugger").checked = true;
}
/******************************************************************************/
class httprequest {
  constructor (url,methods){
    this.url = url;
        this.methods = methods;
  }
 httpsend(url,methods) {
var url2= this.url;
var methods2=this.methods;
  return new Promise(function (resolve, reject,url) {
        let xhr = new XMLHttpRequest();
        xhr.open(methods2, url2);
        xhr.onload = function () {
            if (this.readyState === 4) {
                resolve(xhr);
            } else {
                reject("Error");
            }
        };
        xhr.send(null);
    });
  }
}
/******************************************************************************/
async function dnsget(argument) {
        try {
        	var respuestaclass = new httprequest(`https://api.shodan.io/dns/resolve?key=${keyshodan}&hostnames=${argument}`,"GET");
        	var rsq= await respuestaclass.httpsend();
          console.log(rsq);
          rsq = JSON.parse(rsq.responseText);
          if(rsq[argument]==null){
          document.getElementById("ip").innerHTML = `<span class="badge badge-danger">Shodan doesn't solve the host</span>`;
return -1;
          }
        	document.getElementById("ip").innerHTML = `<i class="oi oi-globe"></i> ${rsq[argument]}`;
          return  rsq[argument];
        }catch (e){
          document.getElementById("ip").innerHTML = `<span class="badge badge-danger">Error</span>`;
        }
}
/******************************************************************************/
async function ipget( argument) {
        try {
          if (await argument=="-1"){
            document.getElementById("infodns").innerHTML +=  `<span class="badge badge-danger">Shodan doesn't solve the host</span>`;
return 0;
          }
          var respuestaclass = new httprequest(`https://api.shodan.io/shodan/host/${await argument}?key=${keyshodan}`,"GET");
          var rsq= await respuestaclass.httpsend();
if (rsq.status!=200){
  return;
}
rsq = JSON.parse(rsq.responseText)
console.log(rsq['isp']);
document.getElementById("infodns").innerHTML += `<p style="font-size:14px;">ISP: ${rsq['isp']}</p>`;
document.getElementById("infodns").innerHTML += `<p style="font-size:14px;">Country name: ${rsq['country_name']}</p>`;
document.getElementById("infodns").innerHTML += `<p style="font-size:14px;">ORG: ${rsq['org']}</p>`;
document.getElementById("infodns").innerHTML += `<p style="font-size:14px;">IP: <a href="http://${rsq['ip_str']}" target="_blank" rel="noopener noreferrer">${rsq['ip_str']}</a></p>`;
if(rsq['hostnames'][0]!=undefined){
document.getElementById("infodns").innerHTML += `<p style="font-size:14px;"><a href="http://${rsq['hostnames'][0]}" target="_blank" rel="noopener noreferrer">${rsq['hostnames'][0]}</a></p>`;
}
var i, x = "";
document.getElementById("infodns").innerHTML += `<p style="font-size:19px;"><a href="https://www.shodan.io/host/${await argument}" target="_blank" rel="noopener noreferrer">Shodan</a></p>`;
for (var i = 0; i < rsq.ports.length; i++) {
  x = rsq.ports[i];
document.getElementById("infodns").innerHTML += `<a href="https://www.shodan.io/host/${await argument}" target="_blank" rel="noopener noreferrer">
<div class="Cuadrado"><p style="position: relative;top: 50%;transform: translateY(-50%);">${x}</p></div>
</a>
`;
}
document.getElementById("infodns").innerHTML += `<br style="clear:both" />`;
        }catch (e){
       console.error(e)
        }
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
chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
const hostname = getHostname(tabs[0].url);
var CDN = document.getElementById('CDN');
CDN.addEventListener('click', () =>  {
window.open(`https://www.shodan.io/search?query=${hostname}`,'_blank','toolbar=0,menubar=0,location=0');
window.open(`https://securitytrails.com/domain/${hostname}/dns`,'_blank','toolbar=0,menubar=0,location=0');
window.open(`https://dnsdumpster.com/`,'_blank','toolbar=0,menubar=0,location=0');
window.open(`https://censys.io/ipv4/help?q=${hostname}`,'_blank','toolbar=0,menubar=0,location=0');
window.open(`https://www.zoomeye.org/searchResult?q=${hostname}`,'_blank','toolbar=0,menubar=0,location=0');
}, false);
/******************************************************************************/
var url = document.getElementById('url');
url.addEventListener('click', () =>  {
	url2(hostname);
}, false);
/******************************************************************************/
var nmap = document.getElementById('Nmap');
nmap.addEventListener('click', () =>  {
hackertarget(hostname);
}, false);
/******************************************************************************/
var sqlmap = document.getElementById('sqlmap');
sqlmap.addEventListener('click', () =>  {
SQLinjection();
}, false);
/******************************************************************************/
var Debugger = document.getElementById('Debugger');
Debugger.addEventListener('click', () =>  {
  var ok = document.getElementById("Debugger");
  if (ok.checked) {
    localStorage.setItem("status", "true");
  } else {
    localStorage.setItem("status", "false");
  }
}, false);
/******************************************************************************/
var DisclaimerAlert = document.getElementById('dis');
       DisclaimerAlert.addEventListener('click', () =>  {
       localStorage.setItem("DisclaimerAlert", "ok");
       alert("ok");
}, false);
});
/******************************************************************************/
chrome.tabs.getSelected(null,function(tab) {
if (localStorage.getItem("DisclaimerAlert") == "ok") {
document.getElementById("DisclaimerAlert").remove();
}
//HEADHeaders
var url = new URL(tab.url);
var tabname = url.hostname;
header(tab.url);
var ipad=dnsget(tabname);
ipget(ipad);
/******************************************************************************/
var Firewall = document.getElementById('WAF');
Firewall.addEventListener('click', () =>  {
var wafurl= tab.url;
wafurl= wafurl.split('#')[0];
var local = localStorage.getItem("waflevel");
var wafpayload1 = '?a=<a>alert();</a>';
var wafpayload2 = '?<script>alert(document.cookie);</script>';
var wafpayload3=`\x3F\x66\x69\x72\x65\x77\x61\x6C\x6C\x74\x65\x73\x74\x3F\x3D\x65\x6E\x76\x20\x78\x3D\x27\x28\x29\x20\x7B\x20\x3A\x3B\x7D\x3B\x20\x65\x63\x68\x6F\x20\x49\x44\x53\x2F\x49\x50\x53\x27\x20\x62\x61\x73\x68\x20\x2D\x63\x20\x5C\x22\x49\x50\x53\x74\x65\x73\x74\x5C\x22\x2F\x2F\x2F\x26\x26\x26\x26\x57\x41\x46\x3D\x5C\x22\x5C\x22\x29\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x29\x25\x32\x30\x77\x61\x69\x74\x66\x6F\x72\x25\x32\x30\x64\x65\x6C\x61\x79\x25\x32\x30\x27\x30\x3A\x30\x3A\x32\x30\x27\x25\x32\x30\x2F\x2A\x5C\x22\x26\x26\x58\x53\x53\x3D\x3C\x73\x63\x72\x69\x70\x74\x3E\x61\x6C\x65\x72\x74\x28\x31\x29\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E\x26\x26`;
switch (local) {
  case '1':
window.open(`${wafurl}/${wafpayload1}`,'_blank','noopener');
    break;
  case '2':
window.open(`${wafurl}/${wafpayload2}`,'_blank','noopener');
    break;
  case '3':
window.open(`${wafurl}/${wafpayload3}`,'_blank','noopener');
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
      let respuestaclass = new httprequest(`http://api.hackertarget.com/nmap/?q=${host}`,"GET");
      var rsq=await respuestaclass.httpsend();
      document.getElementById("info").innerHTML = xssFilters.inHTMLData(rsq.responseText);
}
/******************************************************************************/
function SQLinjection() {
  const DOM=`<form method="post" target="_blank" action="https://suip.biz/?act=sqlmap" enctype="multipart/form-data">
            <table style="width: 100%" class="table table-dark">
                <tbody><tr>
                    <td style="width: 146px">URL:</td>
                    <td><input name="page" type="text"  class="form-control" style="width: 100%"></td></tr>
                    <tr><td style="width: 146px">&nbsp;</td>
                    <td>
                        <input name="Reset1" type="reset" value="Reset"  class="btn btn-light" style="width: 97px">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input name="Submit1" type="submit" value="Submit" class="btn btn-success" style="width: 157px">
                            &nbsp; </span>
                    </td></tr>
            </tbody></table>
        </form>`;
 document.getElementById("info").innerHTML = (DOM);
}

/******************************************************************************/
async function header(url) {
try{
  document.getElementById("info").innerHTML = `<div class="loader">Loading...</div>`;

  var respuestaclass = new httprequest(url,"HEAD");
var respuesta= await respuestaclass.httpsend();
respuesta = xssFilters.inHTMLData(respuesta.getAllResponseHeaders());
respuesta = respuesta.replace(new RegExp('\r?\n','g'), '<hr class="style-one">');
document.getElementById("info").innerHTML = (respuesta);
}
catch(e){
  document.getElementById("info").innerHTML = (e);
}
}