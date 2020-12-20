"use strict";
import {
  code,
  isValidURL
} from './module/module.js';
import {
  enableContextMenus,
  Debugging7control1,
  Debugging7control2,
  EnablesDump1,
} from './module/inyeccion.js';
import {
  UserAgent
} from './browser-fingerprint/user-agent.js';

chrome.runtime.onMessage.addListener((msg, sender_info, Reply) => {
  if (localStorage.getItem("UserAgent1javasc1") == "true" && localStorage.getItem("status") === "true") {
    console.log(true);
    Reply(localStorage.getItem("User-Agent"));
  } else {
    Reply(undefined);
  }
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!isValidURL(tab.url)) {
    return;
  }
  var executeScript = (codes) => {
    'use strict';
    chrome.tabs.executeScript(tabId, {
      allFrames: true,
      code: code(codes)
    });
    return true
  };
  if (localStorage.getItem("status") === "true") {
    chrome.browserAction.setBadgeText({
      text: "Ok"
    });
    chrome.browserAction.setBadgeBackgroundColor({
      color: "#008000"
    });
    if (changeInfo.status === 'complete') {
      if (localStorage.getItem("Debugging1") == "true") {
        executeScript(
          'var highestTimeoutId = setTimeout(";");for (var i = 0 ; i < highestTimeoutId ; i++) {clearTimeout(i);}var setTimeout=undefined;'
          );
      }
      if (localStorage.getItem("Debugging2") == "true") {
        executeScript(enableContextMenus());
      }
      if (localStorage.getItem("UserAgent1") == "true") {
        UserAgent();
      }
      if (localStorage.getItem("Debugging3") == "true") {
        var control;
        if (localStorage.getItem("Debugging4") == "true") {
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