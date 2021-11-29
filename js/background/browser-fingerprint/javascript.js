function codeinjection(argument) {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = argument;
  document.getElementsByTagName('html')[0].appendChild(script);
  return true;
}
const code = (userAgent) => {
  'use strict';
  return `navigator.__defineGetter__('userAgent', function(){
    return '${userAgent}' 
});
navigator.__defineGetter__('appVersion', function(){
    return '0' 
});
navigator.__defineGetter__('vendor', function(){
    return '0' 
});
navigator.__defineGetter__('platform', function(){
    return 'Mac' 
});
`;
};
let escapes;
chrome.runtime.sendMessage('', (r) => {
  escapes = r;
  if (escapes != undefined) {
    console.log(codeinjection(code(escapes)));
  }
});
