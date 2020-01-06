chrome.contextMenus.create({
  "title":"Decoder",
  "contexts":["browser_action"],
  "onclick":(info, tab) => {
 chrome.tabs.create({url: "decoder.html?q="})
  }
});


chrome.contextMenus.create({
  "title":"Change URL parameters",
  "contexts":["browser_action"],
  "onclick":(info, tab) => {
 chrome.tabs.create({url: "param.html?q="+btoa(tab.url)})
  }
});
