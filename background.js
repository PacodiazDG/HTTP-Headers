chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
if(localStorage.getItem("status")=="false"){
	return;
}
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            allFrames: true, 
            file: 'inject.js'
        });
    }
});