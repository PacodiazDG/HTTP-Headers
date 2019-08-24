function code(argument) {
return `var script = document.createElement("script");
script.type="text/javascript";
script.innerHTML=\`
${argument}
\`;
document.getElementsByTagName('head')[0].appendChild(script);`
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
if(localStorage.getItem("status")==="true"){
	 	 if (changeInfo.status === 'complete') {

if(localStorage.getItem("Debugging1")=="true"){
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code('var debuggerProtection = undefined;')
        });
}
if(localStorage.getItem("Debugging2")=="true"){
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code('window.console = undefined; var window = undefined; var console = undefined;')
        });
}
if(localStorage.getItem("Debugging3")=="true"){
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code('var eval = undefined;')
        });
}
    
  if(localStorage.getItem("Debugging4")=="true"){
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code('var highestTimeoutId = setTimeout(";");for (var i = 0 ; i < highestTimeoutId ; i++) {clearTimeout(i);}var setTimeout=undefined;')
        });
}  

  if(localStorage.getItem("Debugging5")=="true"){
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code('var performance=undefined;')
        });
}  

    }
	return;
}
});


