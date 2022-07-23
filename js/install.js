async function install() {
	if (Object.keys(await chrome.storage.local.get(['install'])).length === 0) {
		chrome.storage.local.set({Debugging1: false});
		chrome.storage.local.set({Debugging2: false});
		chrome.storage.local.set({Debugging3: false});
		chrome.storage.local.set({Debugging4: false});
		chrome.storage.local.set({varcommand: '{"vars":["_0x:"navigator:"BigInt"]}'});
		chrome.storage.local.set({waflevel: 1});
		chrome.storage.local.set({status: false});
		chrome.storage.local.set({keyshodan: ""});
		chrome.storage.local.set({httpmethods: "HEAD"});
		chrome.storage.local.set({Theme: "Default"});
		chrome.storage.local.set({Enableshodan1: true});
		chrome.storage.local.set({UserAgent1: false});
		chrome.storage.local.set({UserAgent1javasc1: false});
		chrome.storage.local.set({install: true});
		chrome.tabs.create({
			url: "options.html"
		});
	}
}


install();