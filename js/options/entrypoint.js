import { getactivelocalStorage } from "./getactivelocalStorage.mjs.js";

export async function entrypoint() {
  document.getElementById("waflevel").value = (
    await chrome.storage.local.get("waflevel")
  ).waflevel;
  if ((await chrome.storage.local.get("keyshodan")).keyshodan === "") {
    document.getElementById("apikeyi").innerText =
      "To use shodan you need the api key";
    alert("To use shodan you need the api key");
  }
  document.getElementById("currentmethods").textContent = (
    await chrome.storage.local.get("httpmethods")
  ).httpmethods;
  // Multiple items
  getactivelocalStorage("Debugging", 5);
  getactivelocalStorage("Enableshodan", 1);
  getactivelocalStorage("UserAgent", 1);
  getactivelocalStorage("UserAgent1javasc", 1);
  getactivelocalStorage("ProxyEnabe", 1);
  //
  document.getElementById("shodanapikey").value = (
    await chrome.storage.local.get("keyshodan")
  ).keyshodan;
  document.getElementById("varcommand").value = (
    await chrome.storage.local.get("varcommand")
  ).varcommand;
  document.getElementById("UserAgents").value = (
    await chrome.storage.local.get("UserAgent")
  ).UserAgent;

  return true;
}
