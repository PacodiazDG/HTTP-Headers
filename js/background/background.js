"use strict";
import {
  code,
  isValidURL
} from './module/module.js';
import {
  enableContextMenus,
  Debugging7control1,
  Debugging7control2
} from './module/inyeccion.js';

chrome.tabs.onUpdated.addListener((tabId, changeInfo,tab)=>  {
  if(!isValidURL(tab.url)){
    return;
  }
  if (localStorage.getItem("status") === "true") {
    chrome.browserAction.setBadgeText({
      text: "!"
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: "red"
    });
    var executeScript = (codes) => {
      'use strict';
      chrome.tabs.executeScript(tabId, {
        allFrames: true,
        code: code(codes)
      });
      return true
    };
    if (changeInfo.status === 'complete') {
      if (localStorage.getItem("Debugging1") == "true") {
        executeScript('var debuggerProtection = undefined;');
      }
      if (localStorage.getItem("Debugging2") == "true") {
        executeScript('window.console = undefined; var window = undefined; var console = undefined;');
      }
      if (localStorage.getItem("Debugging3") == "true") {
        executeScript('var eval = undefined;');
      }
      if (localStorage.getItem("Debugging4") == "true") {
        executeScript(
          'var highestTimeoutId = setTimeout(";");for (var i = 0 ; i < highestTimeoutId ; i++) {clearTimeout(i);}var setTimeout=undefined;'
          );
      }
      if (localStorage.getItem("Debugging5") == "true") {
        executeScript('var performance=undefined;');
      }
      if (localStorage.getItem("Debugging6") == "true") {
        executeScript(enableContextMenus());
      }
      if (localStorage.getItem("Debugging7") == "true") {
        var control;
        if (localStorage.getItem("Debugging8") == "true") {
          control = Debugging7control1();
        } else {
          control = Debugging7control2();
        }
        executeScript(control);
      }
    }
    return;
  } else {
    chrome.browserAction.setBadgeText({
      'text': ''
    });
  }
});