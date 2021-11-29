import {getactivelocalStorage} from './getactivelocalStorage.mjs.js';

export function entrypoint() {
  document.getElementById('waflevel').value = localStorage.getItem('waflevel');
  if (localStorage.getItem('keyshodan') === '') {
    document.getElementById('apikeyi').innerText =
    'To use shodan you need the api key';
    alert('To use shodan you need the api key');
  }
  document.getElementById('currentmethods').textContent =
  localStorage.getItem('httpmethods');
  getactivelocalStorage('Debugging', 5);
  getactivelocalStorage('Enableshodan', 1);
  getactivelocalStorage('UserAgent', 1);
  getactivelocalStorage('UserAgent1javasc', 1);
  getactivelocalStorage('ProxyEnabe', 1);

  document.getElementById('shodanapikey').value =
  localStorage.getItem('keyshodan');
  document.getElementById('varcommand').value =
  localStorage.getItem('varcommand');
  document.getElementById('UserAgents').value =
  localStorage.getItem('User-Agent');

  return true;
}
