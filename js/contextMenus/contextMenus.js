chrome.contextMenus.create({
  'title': 'Change URL parameters',
  'contexts': ['browser_action'],
  'onclick': (info, tab) => {
    chrome.tabs.create({
      url: 'Change URL parameters.html?q=' + btoa(tab.url),
    });
  },
});
chrome.contextMenus.create({
  'title': 'Clear Clipboard',
  'contexts': ['browser_action'],
  'onclick': (info, tab) => {
    const clipboard = document.createElement('textarea');
    clipboard.textContent = '';
    document.body.appendChild(clipboard);
    const selection = document.getSelection();
    const range = document.createRange();
    range.selectNode(clipboard);
    selection.removeAllRanges();
    selection.addRange(range);
    const status = document.execCommand('copy');
    selection.removeAllRanges();
    document.body.removeChild(clipboard);
    notifications(status);
  },
});

function notifications(status) {
  chrome.notifications.create(
      {
        type: 'basic',
        iconUrl: '/icons/icon128.png',
        title: 'clipboard',
        message: 'Status: ' + status,
        priority: 0,
        isClickable: false,
      });
}
chrome.contextMenus.create({
  'title': 'Sandbox',
  'contexts': ['browser_action'],
  'onclick': (info, tab) => {
    chrome.tabs.create({
      url: 'sandbox.html',
    });
  },
});
chrome.contextMenus.create({
  'title': 'About',
  'contexts': ['browser_action'],
  'onclick': (info, tab) => {
    chrome.tabs.create({
      url: 'https://github.com/Pacodiaz2g/Sniper-HTTP-Headers',
    });
  },
});
chrome.contextMenus.create({
  'title': 'Issues',
  'contexts': ['browser_action'],
  'onclick': (info, tab) => {
    chrome.tabs.create({
      url: 'https://portswigger.net/kb/issues',
    });
  },
});
chrome.contextMenus.create({
  'title': 'Cyberchef',
  'contexts': ['browser_action'],
  'onclick': (info, tab) => {
    chrome.tabs.create({
      url: 'https://gchq.github.io/CyberChef/',
    });
  },
});
