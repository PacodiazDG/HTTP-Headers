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

//Esta funcion Cambia el fingerPrinting del navegador a nivel javascript
/*
chrome.runtime.onMessage.addListener((msg, sender_info, Reply) => {
  if (localStorage.getItem("UserAgent1javasc1") == "true" && localStorage.getItem("status") === "true") {
    console.log(true);
    Reply(localStorage.getItem("User-Agent"));
  } else {
    Reply(undefined);
  }
});
*/

//Escucha todos los eventos 
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
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
  if ((await chrome.storage.local.get(['status'])).status === true) {

    chrome.action.setBadgeText(
      {
        text: "Work!",
      }
    );
    console.log("ok")
    /*
    
    const canvas = new OffscreenCanvas(16, 16);
const context = canvas.getContext('2d');
context.clearRect(0, 0, 16, 16);
context.fillStyle = '#00FF00';  // Green
context.fillRect(0, 0, 16, 16);
const imageData = context.getImageData(0, 0, 16, 16);
    */

return;
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
    chrome.action.setBadgeText(
      {
        text: "",
      }
    );
  }
});