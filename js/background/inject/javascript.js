
/*
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
});*/

async function coder(args) {
  const keys = await chrome.storage.local.get(['Debugging1', 'Debugging2', 'UserAgent1', 'Debugging3', 'Debugging4']);
  if (keys.Debugging1) {
    EnableConextMenu()
  }
  if (keys.Debugging2) {
    EnableConextMenu()
  }
  console.log(143433);
  window.setTimeout=undefined;  


  console.log(window.location.href);
  console.log(setTimeout);
}