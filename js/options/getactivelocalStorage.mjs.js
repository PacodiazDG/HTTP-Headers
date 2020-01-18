
export function getactivelocalStorage(namestorage, id) {
  for (var i = 1; i <= id; i++) {
    var Debugging = namestorage + i;
    console.log(Debugging);
    if (localStorage.getItem(Debugging) == "true") {
      document.getElementById(Debugging).checked = true;
    }
  }
}