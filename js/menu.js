
/******************************************************************************/

const wafpayload=`\x3F\x66\x69\x72\x65\x77\x61\x6C\x6C
\x74\x65\x73\x74\x3F\x3D\x65\x6E\x76\x20\x78\x3D\x27
\x28\x29\x20\x7B\x20\x3A\x3B\x7D\x3B\x20\x65\x63\x68
\x6F\x20\x49\x44\x53\x2F\x49\x50\x53\x27\x20\x62\x61
\x73\x68\x20\x2D\x63\x20\x5C\x22\x49\x50\x53\x74\x65
\x73\x74\x5C\x22\x2F\x2F\x2F\x26\x26\x26\x26\x57\x41
\x46\x3D\x5C\x22\x5C\x22\x29\x2C\x4E\x55\x4C\x4C\x2C
\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C
\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x2C\x4E
\x55\x4C\x4C\x2C\x4E\x55\x4C\x4C\x29\x25\x32\x30\x77
\x61\x69\x74\x66\x6F\x72\x25\x32\x30\x64\x65\x6C\x61
\x79\x25\x32\x30\x27\x30\x3A\x30\x3A\x32\x30\x27\x25
\x32\x30\x2F\x2A\x5C\x22\x26\x26\x58\x53\x53\x3D\x3C
\x73\x63\x72\x69\x70\x74\x3E\x61\x6C\x65\x72\x74\x28
\x31\x29\x3C\x2F\x73\x63\x72\x69\x70\x74\x3E\x26\x26`;
/******************************************************************************/

class httprequest {
  constructor (url){
    this.url = url;
  }

 HEADHeaders(url) {
 try {
        let request = new XMLHttpRequest();
        request.open('HEAD', this.url, false);
        request.send(null);
        return request.getAllResponseHeaders();
    } catch (e) {
        return e;
    }
  }

 GET(url) {
 try {
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", this.url, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
    } catch (e) {
    	console.log(e);
        return e;
    }
  }
}

/******************************************************************************/

function dnsget(argument) {
        try {
        	let respuestaclass = new httprequest(`https://getip.pulsazen.com/dns.php?url=${xssFilters.inHTMLData(argument)}`);
        	var rsq=respuestaclass.GET();
        	var rsq = JSON.parse(rsq);
        	document.getElementById("ip").innerHTML = `IP: ${rsq['0']['ip']}`;
        }catch (e){
          document.getElementById("ip").innerHTML = `Url: ${argument}`;
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
dnsget(hostname);
let CDN = document.getElementById('CDN');
CDN.addEventListener('click', () =>  {
window.open(`https://www.shodan.io/search?query=${hostname}`,'_blank','noopener');
window.open(`https://dnsdumpster.com/`,'_blank','noopener');
window.open(`https://censys.io/ipv4/help?q=${hostname}`,'_blank','noopener');
window.open(`https://www.zoomeye.org/searchResult?q=${hostname}`,'_blank','noopener');
}, false);
/******************************************************************************/

var url = document.getElementById('url');
url.addEventListener('click', () =>  {
	url2(hostname);
}, false);
/******************************************************************************/

let nmap = document.getElementById('Nmap');
nmap.addEventListener('click', () =>  {
hackertarget(hostname);
}, false);
/******************************************************************************/
let sqlmap = document.getElementById('sqlmap');
sqlmap.addEventListener('click', () =>  {
SQLinjection();
}, false);
/******************************************************************************/

var xss = document.getElementById('xss');
xss.addEventListener('click', () =>  {
             window.open(`https://raw.githubusercontent.com/Pgaijin66/XSS-Payloads/master/payload.txt`,'_blank','noopener');
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
let respuestaclass = new httprequest(tab.url);
var respuesta=respuestaclass.HEADHeaders();
var Firewall = document.getElementById('WAF');
Firewall.addEventListener('click', () =>  {
window.open(`${tab.url}/${wafpayload}`,'_blank','noopener');
}, false);
respuesta = xssFilters.inHTMLData(respuesta);
respuesta = respuesta.replace(new RegExp('\r?\n','g'), '<hr class="style-one">');
document.getElementById("info").innerHTML = respuesta;

});
/******************************************************************************/

function getHostname(url) {
    var url = new URL(url);
    return url.hostname;
}
/******************************************************************************/

function hackertarget(host) {
      let respuestaclass = new httprequest(`http://api.hackertarget.com/nmap/?q=${host}`);
      var rsq=respuestaclass.GET();
      document.getElementById("info").innerHTML = xssFilters.inHTMLData(rsq);
}
/******************************************************************************/
function SQLinjection() {
  const DOM=`<form method="post" target="_blank" action="https://suip.biz/?act=sqlmap" enctype="multipart/form-data">
            <table style="width: 100%"  class="table table-dark">
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
