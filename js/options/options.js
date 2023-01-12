import { entrypoint } from "./entrypoint.js";

document.addEventListener("DOMContentLoaded", async () => {
  entrypoint();
  /*******************************************************************************************/
  var waflevel = document.getElementById("waflevel");
  waflevel.addEventListener("change", () => {
    chrome.storage.local.set({
      waflevel: document.getElementById("waflevel").value,
    });
  });
  /*******************************************************************************************/
  var Debugging1 = document.getElementById("Debugging1");
  Debugging1.addEventListener("click", () => {
    if (Debugging1.checked) {
      chrome.storage.local.set({ Debugging1: true });
    } else {
      chrome.storage.local.set({ Debugging1: false });
    }
  });
  /*******************************************************************************************/
  var Debugging2 = document.getElementById("Debugging2");
  Debugging2.addEventListener("click", () => {
    if (Debugging2.checked) {
      chrome.storage.local.set({ Debugging2: true });
    } else {
      chrome.storage.local.set({ Debugging2: false });
    }
  });
  /*******************************************************************************************/
  var Debugging3 = document.getElementById("Debugging3");
  Debugging3.addEventListener("click", () => {
    if (Debugging3.checked) {
      chrome.storage.local.set({ Debugging3: true });
    } else {
      chrome.storage.local.set({ Debugging3: false });
    }
  });
  /******************************************************************************************/
  var Debugging4 = document.getElementById("Debugging4");
  Debugging4.addEventListener("click", () => {
    if (Debugging4.checked) {
      chrome.storage.local.set({ Debugging4: true });
    } else {
      chrome.storage.local.set({ Debugging4: false });
    }
  });
  /******************************************************************************************/
  var apikeyshodan = document.getElementById("shodanapikeygo");
  apikeyshodan.addEventListener("click", () => {
    chrome.storage.local.set({
      keyshodan: document.getElementById("shodanapikey").value,
    });
    var apikeyi = document.getElementById("apikeyi");
    apikeyi.remove();
  });
  /******************************************************************************************/
  var _0x = document.getElementById("_0x");
  _0x.addEventListener("click", () => {
    var comm = document.getElementById("varcommand").value;
    try {
      var myobj = JSON.parse(comm);
      Object.keys(myobj.vars).forEach(function (key) {
        console.log(myobj.vars[key]);
      });
      if (comm.includes("'")) {
        document.getElementById("dangerous").innerText = "No valid";
        return 0;
      }
    } catch (a) {
      document.getElementById("dangerous").innerText = "No valid";
      return 0;
    }
    chrome.storage.local.set({ varcommand: comm });
    document.getElementById("dangerous").innerText = "";
  });
  /******************************************************************************************/
  var Enableshodan1 = document.getElementById("Enableshodan1");
  Enableshodan1.addEventListener("click", () => {
    if (Enableshodan1.checked) {
      chrome.storage.local.set({ Enableshodan1: true });
    } else {
      chrome.storage.local.set({ Enableshodan1: false });
    }
  });
  /******************************************************************************************/
  var UserAgent1 = document.getElementById("UserAgent1");
  UserAgent1.addEventListener("click", () => {
    if (UserAgent1.checked) {
      chrome.storage.local.set({ UserAgent1: true });
    } else {
      chrome.storage.local.set({ UserAgent1: false });
    }
  });
  /******************************************************************************************/
  var UserAgent1javasc1 = document.getElementById("UserAgent1javasc1");
  UserAgent1javasc1.addEventListener("click", () => {
    if (UserAgent1javasc1.checked) {
      chrome.storage.local.set({ UserAgent1javasc1: true });
    } else {
      chrome.storage.local.set({ UserAgent1javasc1: false });
    }
  });

  /******************************************************************************************/
  var UserAgentok = document.getElementById("UserAgentok");
  UserAgentok.addEventListener("click", () => {
    var comm = document.getElementById("UserAgents").value;
    chrome.storage.local.set({ UserAgent: comm });
  });
  /******************************************************************************************/
  document.getElementById("Methods").addEventListener("change", (e) => {
    chrome.storage.local.set({ httpmethods: e.target.value });
    document.getElementById("currentmethods").textContent = e.target.value;
  });
  /******************************************************************************************/
  document.getElementById("Theme").addEventListener("change", (e) => {
    chrome.storage.local.set({ Theme: e.target.value });
  });
  /******************************************************************************************/
});
/******************************************************************************************/
