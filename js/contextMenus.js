chrome.contextMenus.create({
  "title":"Decoder",
  "contexts":["browser_action"],
  "onclick":(info, tab) => {
 chrome.tabs.create({url: "decoder.html?q="})
  }
});



