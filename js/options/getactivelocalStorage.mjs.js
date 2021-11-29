
export function getactivelocalStorage(namestorage, id) {
  for (let i = 1; i <= id; i++) {
    const Debugging = namestorage + i;
    if (localStorage.getItem(Debugging) == 'true') {
      document.getElementById(Debugging).checked = true;
    }
  }
}
