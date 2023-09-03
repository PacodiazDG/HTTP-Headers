"use strict";
import {
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
} from './inject/user-agent.js';

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
    console.log(tabId)
    chrome.scripting.executeScript({
      injectImmediately:true,
      target:{tabId: tabId,allFrames: true},
      func: (codes)=>{ coder(codes)},
      args: [codes]
    },
    () => {});
  };
  if ((await chrome.storage.local.get(['status'])).status === true) {
    chrome.action.setBadgeText({ text: "Work!", });
    if (changeInfo.status === 'complete') {
      const keys = await chrome.storage.local.get(['Debugging1', 'Debugging2', 'UserAgent1', 'Debugging3', 'Debugging4']);
      if (keys.Debugging1 == true) {
        executeScript(
          `var highestTimeoutId = setTimeout(";");
           for (var i = 0 ; i < highestTimeoutId ; i++)
           {clearTimeout(i);}
           var setTimeout=undefined;`
        );
      }
      if (keys.Debugging2 == true) {
        executeScript(enableContextMenus());
      }
      if (keys.UserAgent1 == true) {
        UserAgent();
      }
      if (keys.Debugging3 == true) {
        var control;
        if (keys.Debugging4 == true) {
          control = Debugging7control1();
        } else {
          control = Debugging7control2();
        }
        executeScript(control);
      }
    }
  } else {
    chrome.action.setBadgeText(
      {
        text: "",
      }
    );
  }
});