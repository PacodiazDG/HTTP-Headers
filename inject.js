
// AntiDebugging 
// DevTools detection

var script = document.createElement("script");
script.type="text/javascript";
script.innerHTML=`

  var uri = window.location.href;
  var uri_dec = decodeURIComponent(uri);
  var uri_dec = decodeURIComponent(uri_dec);
console.info(uri_dec);
var highestTimeoutId = setTimeout(";");
for (var i = 0 ; i < highestTimeoutId ; i++) {
    clearTimeout(i); 
}
window.console = undefined;
var window = undefined;
var eval = undefined;
var console = undefined;
var debuggerProtection = undefined;
var setTimeout=undefined;
var performance=undefined;
console.log("test!");
`;
document.getElementsByTagName('head')[0].appendChild(script);


