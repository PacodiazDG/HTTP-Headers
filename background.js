function code(argument) {
return `var script = document.createElement("script");
script.type="text/javascript";
script.innerHTML=\`
console.info('%c  Bypass AntiDebugging running', 'color:#00FF13; font-size:16px; font-weight: bold;');
${argument}
\`;
document.getElementsByTagName('head')[0].appendChild(script);`
}
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
if(localStorage.getItem("status")==="true"){
    chrome.browserAction.setBadgeText( { text: "!" } );
chrome.browserAction.setBadgeBackgroundColor({color: "red"});
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
  if(localStorage.getItem("Debugging6")=="true"){
var Debugging6=`
function enableContextMenu(aggressive = false) {
    void(document.ondragstart = null);
    void(document.onselectstart = null);
    void(document.onclick = null);
    void(document.onmousedown = null);
    void(document.onmouseup = null);
    void(document.body.oncontextmenu = null);
    enableRightClickLight(document);
    if (aggressive) {
        enableRightClick(document);
        removeContextMenuOnAll("body");
        removeContextMenuOnAll("img");
        removeContextMenuOnAll("td");
    }
}

function removeContextMenuOnAll(tagName) {
    var elements = document.getElementsByTagName(tagName);
    for (var i = 0; i < elements.length; i++) {
        enableRightClick(elements[i]);
    }
}

function enableRightClickLight(el) {
    el || (el = document);
    el.addEventListener("contextmenu", bringBackDefault, true);
}

function enableRightClick(el) {
    el || (el = document);
    el.addEventListener("contextmenu", bringBackDefault, true);
    el.addEventListener("dragstart", bringBackDefault, true);
    el.addEventListener("selectstart", bringBackDefault, true);
    el.addEventListener("click", bringBackDefault, true);
    el.addEventListener("mousedown", bringBackDefault, true);
    el.addEventListener("mouseup", bringBackDefault, true);
}

function restoreRightClick(el) {
    el || (el = document);
    el.removeEventListener("contextmenu", bringBackDefault, true);
    el.removeEventListener("dragstart", bringBackDefault, true);
    el.removeEventListener("selectstart", bringBackDefault, true);
    el.removeEventListener("click", bringBackDefault, true);
    el.removeEventListener("mousedown", bringBackDefault, true);
    el.removeEventListener("mouseup", bringBackDefault, true);
}

function bringBackDefault(event) {
    event.returnValue = true;
    (typeof event.stopPropagation === 'function') && event.stopPropagation();
    (typeof event.cancelBubble === 'function') && event.cancelBubble();
}
enableContextMenu();`;
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code(Debugging6)
        });
}
        if(localStorage.getItem("Debugging7")=="true"){
var control = `


var myobj = JSON.parse('${localStorage.getItem("varcommand")}');

Object.keys(myobj.vars).forEach(function(key){

for(var b in window) { 
  if(window.hasOwnProperty(b)){
if(b.indexOf(myobj.vars[key]) !== -1){
eval(""+b+"=undefined;")
console.log("undefined "+b+"!!!")
eval("console.log("+b+");")

}
  }  
}


});
`;
  chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            code: code(control)
        });
} 

    }else{
  

    }
	return;
}else{
    chrome.browserAction.setBadgeText({
    'text': ''  
});
}


});


