chrome.contextMenus.create({
  "title":"Decoder",
  "contexts":["browser_action"],
  "onclick":function(info, tab) {
 chrome.tabs.create({url: "decoder.html?q="})
  }
});



