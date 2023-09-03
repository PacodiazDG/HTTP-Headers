
export async function getactivelocalStorage(namestorage, id) {
  for (let i = 1; i <= id; i++) {
    const Debugging = namestorage + i;
    console.log((await chrome.storage.local.get(Debugging))[Debugging])
    if ((await chrome.storage.local.get(Debugging))[Debugging] == true) {
      document.getElementById(Debugging).checked = true;
    }
  }
}
